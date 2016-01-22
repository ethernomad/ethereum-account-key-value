var Web3 = require('web3');

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

// Solc version: 0.2.0-0/Release-Linux/g++/int linked to libethereum-1.1.1-0/Release-Linux/g++/int

var accountKeyValueAbi = require('./account_key_value.abi.json');
var accountKeyValueContract = web3.eth.contract(accountKeyValueAbi);
var accountKeyValueAddress = '0x5108ff346ccca474fcbcc3a9eed4aae51c239063';
var accountKeyValue = accountKeyValueContract.at(accountKeyValueAddress);

module.exports = {
  valueSet: accountKeyValue.valueSet,
  valueDelete: accountKeyValue.valueDelete,
  valueGet: accountKeyValue.valueGet
};
