require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/sDgBhv6AbwLSq3WMmDt3P6dFqPY-Rre0',
      accounts: ['Private-Key'],

    },

    hyperspace: {
      chainId: 3141,
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: ['Private-Key'],
    },

  }
};