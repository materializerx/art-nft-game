require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.1",
  networks: {
    // rinkeby: {
    //   url: 'https://eth-rinkeby.alchemyapi.io/v2/X3gCK8D7WF6TAHKPAaAx6O4tZS3JxHZs',
    //   accounts: ['15e8b1ece7b31183a6b061956cc92d1fbad46f9ab313a3ca4156a0dee3735e70'],
    // },
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
      // gasPrice: 30000000
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
