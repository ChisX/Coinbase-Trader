# Coinbase-Trader
A user interface that incorporates the coinbase cryptocurrency API for enabling the purchase and selling between cryptocurrencies and fiat currencies (currently allowing USD).

# How to Login #
A user mustfirst create an account with coinbase (https://www.coinbase.com/signup). By default, this will allow you, even in a free plan, to obtain an API Key and an API Secret. This information is tied directly to your use of our coinbase trader interface and in fact serves as a primary means of authentication. For precise steps in creating your own keys, we recommend the following guide (https://cryptopro.app/help/automatic-import/coinbase-api-key/).

In the completely integrated version of our software, you can expect a login screen much like this, where you will be prompted to enter your keys in order, in order to login to your specific arcane account. Note that since you go through the process of creating your own keys, we can feasibly have no knolwedge of them and therefore your information remains private with you, for the sake of a truly trustless and private service.

![part1.png](https://github.com/ArcaneCorporations/Coinbase-Trader/blob/main/screenshots/ss1.png)

The coinbase API as of yet supports Bitcoin and Ethereum, and for the alpha-version of our program, we have chosen to allow trades in USD for fiat currencies, as an experiment.

# How to Use #
Upon signing in, you will be met with the following main screen, which outlines your signup credentials (your key and secret, in other words), and a simple interface to choose which currencies you would like to trade (crypto-to-fiat or vice-versa). The program will fetch live rates between the selected currencies to notify you in advance of approximately how much of one to another currency you can expect to trade in your order, programmatically thanks to the coinbase API.

![part2.png](https://github.com/ArcaneCorporations/Coinbase-Trader/blob/main/screenshots/ss2.png)

# Failsafes #
When you attempt a transaction in this program, you will come across a warning on specifying an appropriate threshold value. If you buy cryptocurrency, you need to set the maximum buy threshold. If the price of CRYPTO/USD is greater than you specify, the transaction will be automatically cancelled, protecting your funds. Conversely, if you're attempting to sell cryptocurrency to buy USD, setting a sell threshold will cancel transactions for which the sell price of your cryptocoins is too low.

![part3.png](https://github.com/ArcaneCorporations/Coinbase-Trader/blob/main/screenshots/ss3.png)
