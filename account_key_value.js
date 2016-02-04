"use strict";
var Web3 = require('web3');
var web3;

// @see https://gist.github.com/frozeman/fbc7465d0b0e6c1c4c23
if (typeof web3 !== 'undefined') {
  var defaultAccount = web3.eth.defaultAccount;
  web3 = new Web3(web3.currentProvider);
  web3.eth.defaultAccount = defaultAccount;
}
else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  web3.eth.defaultAccount = web3.eth.accounts[0];
}

// Solc Version: 0.2.1-0/Release-Linux/g++/int linked to libethereum-1.1.1-0/Release-Linux/g++/int

var accountKeyValueAbi = require('./account_key_value.abi.json');
var accountKeyValueContract = web3.eth.contract(accountKeyValueAbi);
var accountKeyValueAddress = '0xa04a97f383e03ea5a186415686e66f71deb4dc2f';
var accountKeyValue = accountKeyValueContract.at(accountKeyValueAddress);

module.exports = {
  valueSet: accountKeyValue.valueSet,
  valueDelete: accountKeyValue.valueDelete,
  valueGet: accountKeyValue.valueGet,
  filter: function(account) {
    return web3.eth.filter({fromBlock: 881760, address: accountKeyValueAddress, topics: [account]});
  }
};
