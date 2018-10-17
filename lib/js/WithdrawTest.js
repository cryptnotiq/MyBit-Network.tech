"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var WithdrawTest = exports.WithdrawTest = 
{
  "contractName": "WithdrawTest",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogDeposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogWithdraw",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50610396806100206000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806327e235e31461005c5780633ccfd60b146100b3578063f340fa01146100e2575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610118565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100c8610130565b604051808215151515815260200191505060405180910390f35b610116600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102b0565b005b60006020528060005260406000206000915090505481565b6000807f4ce7033d118120e254016dccf195288400b28fc8936425acd5f17ce2df3ab708336000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156102a7573d6000803e3d6000fd5b50600191505090565b7f1b851e1031ef35a238e6c67d0c7991162390df915f70eaf9098dbf0b175a61988134604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1346000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550505600a165627a7a72305820f193417181603dd4764d131019613ca324ba268faae1e29718b02d348dcdff590029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806327e235e31461005c5780633ccfd60b146100b3578063f340fa01146100e2575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610118565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100c8610130565b604051808215151515815260200191505060405180910390f35b610116600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102b0565b005b60006020528060005260406000206000915090505481565b6000807f4ce7033d118120e254016dccf195288400b28fc8936425acd5f17ce2df3ab708336000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156102a7573d6000803e3d6000fd5b50600191505090565b7f1b851e1031ef35a238e6c67d0c7991162390df915f70eaf9098dbf0b175a61988134604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1346000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550505600a165627a7a72305820f193417181603dd4764d131019613ca324ba268faae1e29718b02d348dcdff590029",
  "sourceMap": "26:555:43:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:555:43;;;;;;;",
  "deployedSourceMap": "26:555:43:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;52:40;;8:9:-1;5:2;;;30:1;27;20:12;5:2;52:40:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;97:228;;8:9:-1;5:2;;;30:1;27;20:12;5:2;97:228:43;;;;;;;;;;;;;;;;;;;;;;;;;;;329:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;52:40;;;;;;;;;;;;;;;;;:::o;97:228::-;139:4;206:11;155:45;167:10;179:8;:20;188:10;179:20;;;;;;;;;;;;;;;;155:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;220:8;:20;229:10;220:20;;;;;;;;;;;;;;;;206:34;;269:1;246:8;:20;255:10;246:20;;;;;;;;;;;;;;;:24;;;;276:10;:19;;:27;296:6;276:27;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;276:27:43;316:4;309:11;;97:228;;:::o;329:142::-;396:32;407:9;418;396:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;457:9;434:8;:19;443:9;434:19;;;;;;;;;;;;;;;;:32;;;;;;;;;;;329:142;:::o",
  "source": "pragma solidity ^0.4.24;\n\ncontract WithdrawTest{\n\n  mapping(address => uint) public balances;\n\n  function withdraw()\n  external\n  returns (bool){\n    emit LogWithdraw(msg.sender, balances[msg.sender]);\n    uint amount = balances[msg.sender];\n    balances[msg.sender] = 0;\n    msg.sender.transfer(amount);\n    return true;\n  }\n\n  function deposit(address _receiver)\n  payable\n  external{\n    emit LogDeposit(_receiver, msg.value);\n    balances[_receiver] += msg.value;\n  }\n\n  event LogDeposit(address _receiver, uint _amount);\n  event LogWithdraw(address _receiver, uint _amount);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/WithdrawTest.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/WithdrawTest.sol",
    "exportedSymbols": {
      "WithdrawTest": [
        10640
      ]
    },
    "id": 10641,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10565,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:43"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10640,
        "linearizedBaseContracts": [
          10640
        ],
        "name": "WithdrawTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 10569,
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 10640,
            "src": "52:40:43",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 10568,
              "keyType": {
                "id": 10566,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "60:7:43",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "52:24:43",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 10567,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "71:4:43",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10607,
              "nodeType": "Block",
              "src": "144:181:43",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10575,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "167:3:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "167:10:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10577,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10569,
                          "src": "179:8:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 10580,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 10578,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13397,
                            "src": "188:3:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10579,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "188:10:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "179:20:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10574,
                      "name": "LogWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10639,
                      "src": "155:11:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "155:45:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10582,
                  "nodeType": "EmitStatement",
                  "src": "150:50:43"
                },
                {
                  "assignments": [
                    10584
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10584,
                      "name": "amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 10608,
                      "src": "206:11:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10583,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "206:4:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 10589,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 10585,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10569,
                      "src": "220:8:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 10588,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 10586,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13397,
                        "src": "229:3:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 10587,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "229:10:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "220:20:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "206:34:43"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10595,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10590,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10569,
                        "src": "246:8:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10593,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10591,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "255:3:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10592,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "255:10:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "246:20:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 10594,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "269:1:43",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "246:24:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10596,
                  "nodeType": "ExpressionStatement",
                  "src": "246:24:43"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10602,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10584,
                        "src": "296:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10597,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "276:3:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10600,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "276:10:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 10601,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "276:19:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 10603,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "276:27:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10604,
                  "nodeType": "ExpressionStatement",
                  "src": "276:27:43"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 10605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "316:4:43",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10573,
                  "id": 10606,
                  "nodeType": "Return",
                  "src": "309:11:43"
                }
              ]
            },
            "documentation": null,
            "id": 10608,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10570,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "114:2:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10572,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10608,
                  "src": "139:4:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10571,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "139:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "138:6:43"
            },
            "scope": 10640,
            "src": "97:228:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10626,
              "nodeType": "Block",
              "src": "385:86:43",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10614,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10610,
                        "src": "407:9:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10615,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "418:3:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10616,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "418:9:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10613,
                      "name": "LogDeposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10633,
                      "src": "396:10:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10617,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "396:32:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10618,
                  "nodeType": "EmitStatement",
                  "src": "391:37:43"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10624,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10619,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10569,
                        "src": "434:8:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10621,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10620,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10610,
                        "src": "443:9:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "434:19:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 10622,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13397,
                        "src": "457:3:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 10623,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "457:9:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "434:32:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10625,
                  "nodeType": "ExpressionStatement",
                  "src": "434:32:43"
                }
              ]
            },
            "documentation": null,
            "id": 10627,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10610,
                  "name": "_receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 10627,
                  "src": "346:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10609,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "346:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "345:19:43"
            },
            "payable": true,
            "returnParameters": {
              "id": 10612,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "385:0:43"
            },
            "scope": 10640,
            "src": "329:142:43",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10633,
            "name": "LogDeposit",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10629,
                  "indexed": false,
                  "name": "_receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 10633,
                  "src": "492:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10628,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10631,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10633,
                  "src": "511:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10630,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "511:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "491:33:43"
            },
            "src": "475:50:43"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10639,
            "name": "LogWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10638,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10635,
                  "indexed": false,
                  "name": "_receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 10639,
                  "src": "546:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10634,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "546:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10637,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10639,
                  "src": "565:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10636,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "565:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "545:33:43"
            },
            "src": "528:51:43"
          }
        ],
        "scope": 10641,
        "src": "26:555:43"
      }
    ],
    "src": "0:582:43"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/WithdrawTest.sol",
    "exportedSymbols": {
      "WithdrawTest": [
        10640
      ]
    },
    "id": 10641,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10565,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:43"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10640,
        "linearizedBaseContracts": [
          10640
        ],
        "name": "WithdrawTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 10569,
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 10640,
            "src": "52:40:43",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 10568,
              "keyType": {
                "id": 10566,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "60:7:43",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "52:24:43",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 10567,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "71:4:43",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10607,
              "nodeType": "Block",
              "src": "144:181:43",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10575,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "167:3:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "167:10:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10577,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10569,
                          "src": "179:8:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 10580,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 10578,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13397,
                            "src": "188:3:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10579,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "188:10:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "179:20:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10574,
                      "name": "LogWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10639,
                      "src": "155:11:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "155:45:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10582,
                  "nodeType": "EmitStatement",
                  "src": "150:50:43"
                },
                {
                  "assignments": [
                    10584
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10584,
                      "name": "amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 10608,
                      "src": "206:11:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10583,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "206:4:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 10589,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 10585,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10569,
                      "src": "220:8:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 10588,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 10586,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13397,
                        "src": "229:3:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 10587,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "229:10:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "220:20:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "206:34:43"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10595,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10590,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10569,
                        "src": "246:8:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10593,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10591,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "255:3:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10592,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "255:10:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "246:20:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 10594,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "269:1:43",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "246:24:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10596,
                  "nodeType": "ExpressionStatement",
                  "src": "246:24:43"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10602,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10584,
                        "src": "296:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10597,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "276:3:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10600,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "276:10:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 10601,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "276:19:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 10603,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "276:27:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10604,
                  "nodeType": "ExpressionStatement",
                  "src": "276:27:43"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 10605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "316:4:43",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10573,
                  "id": 10606,
                  "nodeType": "Return",
                  "src": "309:11:43"
                }
              ]
            },
            "documentation": null,
            "id": 10608,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10570,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "114:2:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10572,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10608,
                  "src": "139:4:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10571,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "139:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "138:6:43"
            },
            "scope": 10640,
            "src": "97:228:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10626,
              "nodeType": "Block",
              "src": "385:86:43",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10614,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10610,
                        "src": "407:9:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10615,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "418:3:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10616,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "418:9:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10613,
                      "name": "LogDeposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10633,
                      "src": "396:10:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10617,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "396:32:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10618,
                  "nodeType": "EmitStatement",
                  "src": "391:37:43"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10624,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10619,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10569,
                        "src": "434:8:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10621,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10620,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10610,
                        "src": "443:9:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "434:19:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 10622,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13397,
                        "src": "457:3:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 10623,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "457:9:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "434:32:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10625,
                  "nodeType": "ExpressionStatement",
                  "src": "434:32:43"
                }
              ]
            },
            "documentation": null,
            "id": 10627,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10610,
                  "name": "_receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 10627,
                  "src": "346:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10609,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "346:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "345:19:43"
            },
            "payable": true,
            "returnParameters": {
              "id": 10612,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "385:0:43"
            },
            "scope": 10640,
            "src": "329:142:43",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10633,
            "name": "LogDeposit",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10629,
                  "indexed": false,
                  "name": "_receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 10633,
                  "src": "492:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10628,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10631,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10633,
                  "src": "511:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10630,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "511:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "491:33:43"
            },
            "src": "475:50:43"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10639,
            "name": "LogWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10638,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10635,
                  "indexed": false,
                  "name": "_receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 10639,
                  "src": "546:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10634,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "546:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10637,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10639,
                  "src": "565:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10636,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "565:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "545:33:43"
            },
            "src": "528:51:43"
          }
        ],
        "scope": 10641,
        "src": "26:555:43"
      }
    ],
    "src": "0:582:43"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-11T19:26:29.606Z"
}