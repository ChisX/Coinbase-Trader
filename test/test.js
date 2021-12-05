const Client = require('coinbase').Client;
const {default: axios} = require('axios');
const Trader = require('../src/trader');

let trader = new Trader('aKey','aSec');
trader.buyCrypto('BTC',1,100).then(info => {console.log(info)});