const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');

const private_keys = [
  "f33211d202c93fb8d8308d50b5872a6d56b1082bf8e122dcc47e8ec18728bf4f"
]

module.exports = {
  
  compilers:{
    solc:{
      version: "^0.8.0"
    }
  },

  networks: {
    develop: {
      port: 8545
    },

    kovan: {
      provider: () => new HDWalletProvider({
        privateKeys: private_keys,
        providerOrUrl: 'https://kovan.infura.io/v3/977a18ab9b1847148abb1c876db84427',
        numberOfAddresses: 1
      }),
      network_id: 42,       
      gas: 5500000,        
      confirmations: 2,    
      timeoutBlocks: 200,  
      skipDryRun: true     
    }
  }
};
