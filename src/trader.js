// Imports
const Client = require('coinbase').Client;
const {default: axios} = require('axios');

// Allowed Cryptocurrencies: BTC,ETH
class Trader {
  constructor(aKey,aSec) {
    this.client = new Client({'apiKey': aKey, 'apiSecret': aSec});
  }

  async buyCrypto(currency,amount,buyThr) {
    this.client.getAccount(`${currency}`,(err, account) => {
      
    })
  }
  
  async sellCrypto(currency,amount,sellThr) {
    this.client.getAccount(`${currency}`,(err, account) => {
      
    })
  }
}

module.exports = Trader