export const NotaryServiceAddress = "0xa2Def0a9B19F79143ceAf5215396d2741C0cBC7f";

export const NotaryServiceABI = [
    {
        "inputs": [
          {
            "internalType": "contract IERC20",
            "name": "_filecoin",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "getNotarizedDocuments",
        "outputs": [
          {
            "internalType": "string[]",
            "name": "cids",
            "type": "string[]"
          },
          {
            "internalType": "uint256[]",
            "name": "timestamps",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "cid",
            "type": "string"
          }
        ],
        "name": "notarizeDocument",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "name": "notarizedCIDs",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "notarizedDocuments",
        "outputs": [
          {
            "internalType": "string",
            "name": "cid",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "payFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
];

export const FilecoinAddress = "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153";
