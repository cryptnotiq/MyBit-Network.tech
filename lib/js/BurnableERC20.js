"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var BurnableERC20 = exports.BurnableERC20 = 
{
  "contractName": "BurnableERC20",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "LogBurn",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenHolder",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [
        {
          "name": "success",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
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
      "constant": true,
      "inputs": [
        {
          "name": "_who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n// @title An interface to interact with Burnable ERC20 tokens \ninterface BurnableERC20 { \n\n  function allowance(address tokenOwner, address spender) external view returns (uint remaining);\n  \n  function burnFrom(address _tokenHolder, uint _amount) external returns (bool success); \n\n  function burn(uint _amount) external returns (bool success); \n  \n  function totalSupply() external view returns (uint256);\n\n  function balanceOf(address _who) external view returns (uint256);\n\n  function transfer(address _to, uint256 _value) external returns (bool);\n\n  function approve(address _spender, uint256 _value) external returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);\n\n  event Transfer(address indexed from, address indexed to, uint256 value);\n\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n\n  event LogBurn(address indexed _spender, uint256 _value); \n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
    "exportedSymbols": {
      "BurnableERC20": [
        6360
      ]
    },
    "id": 6361,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6271,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:20"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6360,
        "linearizedBaseContracts": [
          6360
        ],
        "name": "BurnableERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6280,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6273,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 6280,
                  "src": "138:18:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6272,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:7:20",
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
                  "id": 6275,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6280,
                  "src": "158:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6274,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:37:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6278,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 6280,
                  "src": "198:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6277,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:16:20"
            },
            "scope": 6360,
            "src": "119:95:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6289,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6282,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 6289,
                  "src": "238:20:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6281,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:20",
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
                  "id": 6284,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6289,
                  "src": "260:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6283,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "237:36:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6287,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6289,
                  "src": "292:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6286,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:14:20"
            },
            "scope": 6360,
            "src": "220:86:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6296,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6291,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6296,
                  "src": "325:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6290,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "324:14:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6294,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6296,
                  "src": "357:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6293,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "356:14:20"
            },
            "scope": 6360,
            "src": "311:60:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6301,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6297,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6300,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6299,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6301,
                  "src": "424:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6298,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:9:20"
            },
            "scope": 6360,
            "src": "378:55:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6308,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6303,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 6308,
                  "src": "456:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6302,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:14:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6306,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6308,
                  "src": "493:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6305,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:9:20"
            },
            "scope": 6360,
            "src": "437:65:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6317,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6310,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6317,
                  "src": "524:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6309,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:20",
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
                  "id": 6312,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6317,
                  "src": "537:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6311,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "523:29:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6315,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6317,
                  "src": "571:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6314,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "570:6:20"
            },
            "scope": 6360,
            "src": "506:71:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6326,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6319,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6326,
                  "src": "598:16:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6318,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:20",
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
                  "id": 6321,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6326,
                  "src": "616:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6320,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "597:34:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6324,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6326,
                  "src": "650:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6323,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "649:6:20"
            },
            "scope": 6360,
            "src": "581:75:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6337,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6328,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6337,
                  "src": "682:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6327,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:7:20",
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
                  "id": 6330,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6337,
                  "src": "697:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6329,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:20",
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
                  "id": 6332,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6337,
                  "src": "710:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6331,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "681:44:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6335,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6337,
                  "src": "744:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6334,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:6:20"
            },
            "scope": 6360,
            "src": "660:90:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6345,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6344,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6339,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6345,
                  "src": "769:20:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6338,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:20",
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
                  "id": 6341,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6345,
                  "src": "791:18:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6340,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "791:7:20",
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
                  "id": 6343,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6345,
                  "src": "811:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6342,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "768:57:20"
            },
            "src": "754:72:20"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6353,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6347,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "845:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6346,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:7:20",
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
                  "id": 6349,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "868:23:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6348,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "868:7:20",
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
                  "id": 6351,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "893:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6350,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "844:63:20"
            },
            "src": "830:78:20"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6359,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6355,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6359,
                  "src": "926:24:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6354,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:20",
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
                  "id": 6357,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6359,
                  "src": "952:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6356,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "925:42:20"
            },
            "src": "912:56:20"
          }
        ],
        "scope": 6361,
        "src": "89:882:20"
      }
    ],
    "src": "0:972:20"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
    "exportedSymbols": {
      "BurnableERC20": [
        6360
      ]
    },
    "id": 6361,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6271,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:20"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6360,
        "linearizedBaseContracts": [
          6360
        ],
        "name": "BurnableERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6280,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6273,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 6280,
                  "src": "138:18:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6272,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:7:20",
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
                  "id": 6275,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6280,
                  "src": "158:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6274,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:37:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6278,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 6280,
                  "src": "198:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6277,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:16:20"
            },
            "scope": 6360,
            "src": "119:95:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6289,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6282,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 6289,
                  "src": "238:20:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6281,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:20",
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
                  "id": 6284,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6289,
                  "src": "260:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6283,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "237:36:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6287,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6289,
                  "src": "292:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6286,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:14:20"
            },
            "scope": 6360,
            "src": "220:86:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6296,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6291,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6296,
                  "src": "325:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6290,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "324:14:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6294,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6296,
                  "src": "357:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6293,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "356:14:20"
            },
            "scope": 6360,
            "src": "311:60:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6301,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6297,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6300,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6299,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6301,
                  "src": "424:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6298,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:9:20"
            },
            "scope": 6360,
            "src": "378:55:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6308,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6303,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 6308,
                  "src": "456:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6302,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:14:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6306,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6308,
                  "src": "493:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6305,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:9:20"
            },
            "scope": 6360,
            "src": "437:65:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6317,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6310,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6317,
                  "src": "524:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6309,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:20",
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
                  "id": 6312,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6317,
                  "src": "537:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6311,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "523:29:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6315,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6317,
                  "src": "571:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6314,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "570:6:20"
            },
            "scope": 6360,
            "src": "506:71:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6326,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6319,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6326,
                  "src": "598:16:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6318,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:20",
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
                  "id": 6321,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6326,
                  "src": "616:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6320,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "597:34:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6324,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6326,
                  "src": "650:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6323,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "649:6:20"
            },
            "scope": 6360,
            "src": "581:75:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6337,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6328,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6337,
                  "src": "682:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6327,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:7:20",
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
                  "id": 6330,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6337,
                  "src": "697:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6329,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:20",
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
                  "id": 6332,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6337,
                  "src": "710:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6331,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "681:44:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6335,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6337,
                  "src": "744:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6334,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:6:20"
            },
            "scope": 6360,
            "src": "660:90:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6345,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6344,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6339,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6345,
                  "src": "769:20:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6338,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:20",
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
                  "id": 6341,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6345,
                  "src": "791:18:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6340,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "791:7:20",
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
                  "id": 6343,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6345,
                  "src": "811:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6342,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "768:57:20"
            },
            "src": "754:72:20"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6353,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6347,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "845:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6346,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:7:20",
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
                  "id": 6349,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "868:23:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6348,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "868:7:20",
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
                  "id": 6351,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "893:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6350,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "844:63:20"
            },
            "src": "830:78:20"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6359,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6355,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6359,
                  "src": "926:24:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6354,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:20",
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
                  "id": 6357,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6359,
                  "src": "952:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6356,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "925:42:20"
            },
            "src": "912:56:20"
          }
        ],
        "scope": 6361,
        "src": "89:882:20"
      }
    ],
    "src": "0:972:20"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.817Z"
}