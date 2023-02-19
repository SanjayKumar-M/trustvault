require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/sDgBhv6AbwLSq3WMmDt3P6dFqPY-Rre0',
      accounts: ['8736319d495123dada9b10099ddc0722624aaad321aa99df40cf620119c5fcce'],

    },

    hyperspace: {
      chainId: 3141,
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: ['8736319d495123dada9b10099ddc0722624aaad321aa99df40cf620119c5fcce'],
    },

  }
};