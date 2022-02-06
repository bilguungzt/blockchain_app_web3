require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TdvkAQP8dOdWHRqZeaSqbUsMD16z0GzX',
      accounts: ['d26d8bce9932e10c6264ed115c82b1cede3df29b1bf19c6a04b82ea9a5b5e49f'],
    },
  },
};