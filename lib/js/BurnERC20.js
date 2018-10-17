"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var BurnERC20 = exports.BurnERC20 = 
{
  "contractName": "BurnERC20",
  "abi": [
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n\ninterface BurnERC20 {\n\n    function burnFrom(address _tokenHolder, uint _amount) external returns (bool success);\n\n    function burn(uint _amount) external returns (bool success);\n\n    event LogBurn(address indexed _spender, uint256 _value);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnERC20.sol",
    "exportedSymbols": {
      "BurnERC20": [
        7940
      ]
    },
    "id": 7941,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7917,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:23"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7940,
        "linearizedBaseContracts": [
          7940
        ],
        "name": "BurnERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7926,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7919,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 7926,
                  "src": "72:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7918,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:23",
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
                  "id": 7921,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7926,
                  "src": "94:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7920,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "94:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:36:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7924,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 7926,
                  "src": "126:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7923,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "125:14:23"
            },
            "scope": 7940,
            "src": "54:86:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7933,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7928,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7933,
                  "src": "160:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7927,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:14:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7931,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 7933,
                  "src": "192:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7930,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "192:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "191:14:23"
            },
            "scope": 7940,
            "src": "146:60:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 7939,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7935,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7939,
                  "src": "226:24:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7934,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:23",
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
                  "id": 7937,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 7939,
                  "src": "252:14:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:42:23"
            },
            "src": "212:56:23"
          }
        ],
        "scope": 7941,
        "src": "27:244:23"
      }
    ],
    "src": "0:272:23"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnERC20.sol",
    "exportedSymbols": {
      "BurnERC20": [
        7940
      ]
    },
    "id": 7941,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7917,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:23"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7940,
        "linearizedBaseContracts": [
          7940
        ],
        "name": "BurnERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7926,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7919,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 7926,
                  "src": "72:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7918,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:23",
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
                  "id": 7921,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7926,
                  "src": "94:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7920,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "94:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:36:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7924,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 7926,
                  "src": "126:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7923,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "125:14:23"
            },
            "scope": 7940,
            "src": "54:86:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7933,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7928,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7933,
                  "src": "160:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7927,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:14:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7931,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 7933,
                  "src": "192:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7930,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "192:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "191:14:23"
            },
            "scope": 7940,
            "src": "146:60:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 7939,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7935,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7939,
                  "src": "226:24:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7934,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:23",
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
                  "id": 7937,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 7939,
                  "src": "252:14:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:42:23"
            },
            "src": "212:56:23"
          }
        ],
        "scope": 7941,
        "src": "27:244:23"
      }
    ],
    "src": "0:272:23"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-11T19:26:29.582Z"
}