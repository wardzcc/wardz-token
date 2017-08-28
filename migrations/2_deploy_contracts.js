//var WardzSale = artifacts.require("./WardzSale.sol");
var PreSale = artifacts.require("./PreSale.sol");
//var WardzMultiSigWallet = artifacts.require("./WardzMultiSigWallet.sol");

module.exports = function(deployer, netwwork, accounts) {
  const startBlock = web3.eth.blockNumber + 2;
  const endBlock = startBlock + 300;
  const rate = new web3.BigNumber(304000);
  //const rate = new web3.BigNumber(1000);
  const wallet = web3.eth.accounts[2];
  const cap = new web3.BigNumber(9.86842 * Math.pow(10,22));
  const goal = new web3.BigNumber(6.57895 * Math.pow(10,21));
  //const cap = 10000 * Math.pow(10,18);
  //const goal = 1000 * Math.pow(10,18);
  //deployer.deploy(WardzSale, startBlock, endBlock, rate, wallet, cap, goal);

  deployer.deploy(PreSale, "0xc750de303d08db5de2e5d8c3372e8a8ecfb9756f");

  //MultiSig
  //deployer.deploy(WardzMultiSigWallet, [web3.eth.accounts[0], web3.eth.accounts[1]], 2, 100);

}