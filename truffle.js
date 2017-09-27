const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5183626,
      gasPrice: 20e9,
      from: "0x0059160e763988730635638727D93Ede7cf779D8",
    },

    development_migrate: {
      network_id: "*",
      host: "localhost",
      port: 8545,
      gas: 4000000,
      gasPrice: 20e9,
      from: "0x0059160e763988730635638727D93Ede7cf779D8",
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: 4,
      gas: 4000000,
      gasPrice: 20e9,
      from: "0x002245F565253A5ABe3Fee6Fc20dcE3Cc41dD400",
     },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4,
      gas: 4000000,
      gasPrice: 20e9,
      from: "0x002245F565253A5ABe3Fee6Fc20dcE3Cc41dD400",
    },
    kovan: {
      host: "localhost",
      port: 8444,
      network_id: "42",
      gas: 5000000,
      gasPrice: 20e9,
      from: "0x002245F565253A5ABe3Fee6Fc20dcE3Cc41dD400",
    }
  }
};
