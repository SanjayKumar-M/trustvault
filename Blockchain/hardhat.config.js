require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/7LGvqMTpRaoj6JIzhVdCYZW-GWmnOihO',
      accounts:['f015034756ed14b746239a0b5c8b6f97c00f4a51f539aefa6dcc570372fc4c32'],

    },
  }
};