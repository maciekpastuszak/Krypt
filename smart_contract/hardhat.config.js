//https://eth-sepolia.g.alchemy.com/v2/Wg_5XdyDR_faLehTHqkj9mbmpkbsuPMH
import * as dotenv from 'dotenv' 
dotenv.config()

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: `${process.env.SEPOLIA_URL}`,
      accounts: [ `${process.env.SEPOLIA_ACCOUNTS}` ]
    }
  }
}