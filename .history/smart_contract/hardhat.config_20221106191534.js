require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/qgaQewusGJERrhvFq1zmhrc2rZIwZqsT',
      accounts:[
        'abcc7c603c02299d02d0be46fa5bd57beb982bd966db8927841e0d6f9fce1c50',
      ],
    },
  },
};
