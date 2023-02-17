// Replace with the deployed NotaryService contract address
export const NotaryServiceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Replace with the ABI of the NotaryService contract
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

// Replace with the address of the Filecoin ERC20 token
export const FilecoinAddress = "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153";

// Replace with the ABI of the Filecoin ERC20 token
// export const FilecoinABI = [
//   // ... ERC20 ABI goes here ...
// ];
