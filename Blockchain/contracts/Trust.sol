// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NotaryService {
  struct Document {
    string cid;
    uint timestamp;
    bool exists;
  }

  mapping (address => Document[]) public notarizedDocuments;
  mapping (string => bool) public notarizedCIDs;
  address private owner;
  IERC20 private filecoin; // Filecoin ERC20 token address
  uint private fee;

  constructor(IERC20 _filecoin) {
    owner = msg.sender;
    fee = 1 ether; // adjust the fee amount as needed
    filecoin = _filecoin;
  }

  function notarizeDocument(string memory cid) public {
    require(!notarizedCIDs[cid], "This document has already been notarized.");
    notarizedCIDs[cid] = true;
    notarizedDocuments[msg.sender].push(Document(cid, block.timestamp, true));
  }

  function getNotarizedDocuments() public view returns (string[] memory cids, uint[] memory timestamps) {
    uint len = notarizedDocuments[owner].length;
    cids = new string[](len);
    timestamps = new uint[](len);
    for (uint i = 0; i < len; i++) {
      cids[i] = notarizedDocuments[owner][i].cid;
      timestamps[i] = notarizedDocuments[owner][i].timestamp;
    }
    return (cids, timestamps);
  }

  function payFee() public {
    require(filecoin.balanceOf(msg.sender) >= fee, "Not enough Filecoin to pay the fee.");
    require(filecoin.allowance(msg.sender, address(this)) >= fee, "Not enough Filecoin allowance.");
    filecoin.transferFrom(msg.sender, owner, fee);
  }
}
