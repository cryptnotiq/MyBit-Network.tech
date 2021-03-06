  pragma solidity 0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/DBInterface.sol";
  import "../interfaces/DivToken.sol";
  import "../interfaces/BurnableERC20.sol";

  interface Governance { function isConsensusReached(address _thisContract, bytes4 _methodID, bytes32 _parameterHash) external view returns (bool); }

  // @title A contract to hold escrow as collateral against assets
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice AssetManager can lock his escrow in this contract and retrieve it if asset funding fails or successfully returns ROI
  contract AssetManagerEscrow {
    using SafeMath for uint256;

    DBInterface public database;

    // @notice constructor: initializes database
    // @param: the address for the database contract used by this platform
    constructor(address _database)
    public {
      database = DBInterface(_database);
    }

    // @dev assetID can be computed beforehand with sha3(msg.sender, _amountToRaise, _operatorID, _assetURI))
    // @dev anybody can make the assetManager escrow if he leaves this contract with approval to transfer
    function lockEscrow(bytes32 _assetID, uint _amount)
    public
    returns (bool) {
      require(database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID))) == address(0));
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetID, msg.sender));
      address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("platformToken")));
      require(BurnableERC20(tokenAddress).transferFrom(msg.sender, address(this), _amount));
      database.setUint(keccak256(abi.encodePacked("assetManagerEscrow", assetManagerEscrowID)), _amount);
      database.setAddress(keccak256(abi.encodePacked("assetManager", _assetID)), msg.sender);
      emit LogEscrowLocked(_assetID, assetManagerEscrowID, msg.sender, _amount);
      return true;
    }


    // @notice assetManager can unlock his escrow here once funding fails or asset returns sufficient ROI
    // @dev asset must have fundingDeadline = 0 or have ROI > 25%
    // @dev returns escrow according to ROI. 25% ROI returns 25% of escrow, 50% ROI returns 50% of escrow etc...
    function unlockEscrow(bytes32 _assetID)
    public
    returns (bool) {
      require(database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID))) == msg.sender);
      require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))) < now);
      BurnableERC20 burnToken = BurnableERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken"))));
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetID, msg.sender));
      uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", assetManagerEscrowID)));
      uint unlockAmount = database.uintStorage(keccak256(abi.encodePacked("assetManagerEscrow", assetManagerEscrowID))).sub(escrowRedeemed);
      if(!database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID)))){
        //If we're past deadline but crowdsale did NOT finalize, release all escrow
        require(removeAssetManager(_assetID, assetManagerEscrowID));
      }
      else {
        //Past the deadline with a successful funding. Only pay back based on ROI
        DivToken assetToken = DivToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
        uint roi = assetToken.assetIncome().mul(100).div(assetToken.totalSupply());   // Scaled up by 10^2  (approaches 100 as asset income increases)
        uint roiCheckpoints = roi.div(25);       // How many quarterly increments have been reached?
        uint quarterEscrow = database.uintStorage(keccak256(abi.encodePacked("assetManagerEscrow", assetManagerEscrowID))).div(4);
        require(roiCheckpoints <= 4 && roiCheckpoints > 0);    // Can't unlock escrow past 100% ROI
        //  multiply the number of quarterly increments by a quarter of the escrow and subtract the escrow already redeemed.
        unlockAmount = roiCheckpoints.mul(quarterEscrow).sub(escrowRedeemed);
        require(unlockAmount > 0);
        database.setUint(keccak256(abi.encodePacked("escrowRedeemed", assetManagerEscrowID)), escrowRedeemed.add(unlockAmount));
      }
      require(burnToken.transfer(msg.sender, unlockAmount));
      return true;
    }


    // @notice investors can vote to call this function for the new assetManager to then call
    // @dev new assetManager must approve this contract to transfer in and lock _ amount of platform tokens
    function becomeAssetManager(bytes32 _assetID, address _oldAssetManager, uint _amount, bool _burn)
    external
    hasConsensus(_assetID, msg.sig, keccak256(abi.encodePacked(_assetID, _oldAssetManager, msg.sender, _amount, _burn)))
    returns (bool) {
      address currentAssetManager = database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID)));
      require(currentAssetManager != msg.sender && currentAssetManager == _oldAssetManager);
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetID, _oldAssetManager));
      uint oldEscrowRemaining = database.uintStorage(keccak256(abi.encodePacked("assetManagerEscrow", assetManagerEscrowID))).sub(database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", assetManagerEscrowID))));
      BurnableERC20 token = BurnableERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken"))));
      require(removeAssetManager(_assetID, assetManagerEscrowID));
      if (_burn) { require(token.burn(oldEscrowRemaining)); }
      else { require(token.transfer(_oldAssetManager, oldEscrowRemaining));  }
      require(lockEscrow(_assetID, _amount));
      return true;
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                            Internal Functions
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    function removeAssetManager(bytes32 _assetID, bytes32 _assetManagerEscrowID)
    internal
    returns (bool) {
        database.deleteAddress(keccak256(abi.encodePacked("assetManager", _assetID)));
        database.deleteUint(keccak256(abi.encodePacked("assetManagerEscrow", _assetManagerEscrowID)));
        database.deleteUint(keccak256(abi.encodePacked("escrowRedeemed", _assetManagerEscrowID)));
        return true;
    }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // @notice add this modifer to functions that you want multi-sig requirements for
    // @dev function can only be called after at least n >= quorumLevel owners have agreed to call it
    modifier hasConsensus(bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash) {
      bytes32 numVotesID = keccak256(abi.encodePacked("voteTotal", keccak256(abi.encodePacked(address(this), _assetID, _methodID, _parameterHash))));
      uint256 numTokens = DivToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)))).totalSupply();
      require(database.uintStorage(numVotesID).mul(100).div(numTokens) >= 33);
      _;
    }


    event LogEscrowBurned(bytes32 indexed _assetID, address indexed _assetManager, uint _amountBurnt);
    event LogEscrowLocked(bytes32 indexed _assetID, bytes32 indexed _assetManagerEscrowID, address indexed _assetManager, uint _amount);

}
