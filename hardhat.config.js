require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mainnet: {
      url: process.env.INFURA_URL,
      chainId: 1, // Ethereum Mainnet
      gasPrice: 50000000000, // in wei (50 gwei) - adjust as needed
      accounts: [process.env.PRIVATE_KEY]
    }
  },
};
Note: The private key and Infura URL are loaded from the .env file for security reasons. 
