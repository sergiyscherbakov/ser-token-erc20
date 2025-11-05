require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.24",
      }
    ]
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    // Uncomment and configure for testnet/mainnet deployment
    // sepolia: {
    //   url: `https://sepolia.infura.io/v3/YOUR_INFURA_API_KEY`,
    //   accounts: ['YOUR_PRIVATE_KEY']
    // }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
