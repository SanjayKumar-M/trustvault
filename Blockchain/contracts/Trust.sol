// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract NotaryService {
  struct Document {
    bytes32 hash;
    uint timestamp;
    bool exists;
  }

  mapping (address => Document[]) public notarizedDocuments;
  mapping (bytes32 => bool) public notarizedHashes;
  address private owner;
  uint private fee;

  constructor() {
    owner = msg.sender;
    fee = 1 ether; // adjust the fee amount as needed
  }

  function notarizeDocument(bytes32 hash) public payable {
    require(msg.value == fee, "Not enough Ether to pay the fee.");
    require(!notarizedHashes[hash], "This document has already been notarized.");
    notarizedHashes[hash] = true;
    notarizedDocuments[msg.sender].push(Document(hash, block.timestamp, true));
  }

  function getNotarizedDocuments() public view returns (bytes32[] memory hashes, uint[] memory timestamps) {
    uint len = notarizedDocuments[owner].length;
    hashes = new bytes32[](len);
    timestamps = new uint[](len);
    for (uint i = 0; i < len; i++) {
      hashes[i] = notarizedDocuments[owner][i].hash;
      timestamps[i] = notarizedDocuments[owner][i].timestamp;
    }
    return (hashes, timestamps);
  }


}
