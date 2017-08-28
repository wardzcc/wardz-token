var wardzCrowdsale = artifacts.require("./WardzSale.sol");
var wardz = artifacts.require("./Wardz.sol");

contract('wardzCrowdsale', function(accounts) {
  it("should have 0 to my address", function() {
    var wdz;

    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;

    return wardzCrowdsale.deployed().then(function(instance) {
      wdz = instance;
      return wdz.token();
    }).then(function(address) {
      var tokenAddress = address;
      wdzTokenInstance = wardz.at(tokenAddress);
      return wdzTokenInstance.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      assert.equal(account_one_starting_balance, 0, "Amount wasn't correctly taken from the sender");
    });
  });
  it("should send 10 to my address", function() {
    var wdz;

    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;
    var wdzTokenInstance;
    var dollar = 100000;
    var ether = dollar / 304;
    var amount = web3.toWei(ether, "ether");

    return wardzCrowdsale.deployed().then(function(instance) {
      wdz = instance;
      return wdz.token();
    }).then(function(address) {
      var tokenAddress = address;
      wdzTokenInstance = wardz.at(tokenAddress);
      return wdzTokenInstance.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      wdz.sendTransaction({from: account_one, value: amount});
      return wdzTokenInstance.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = web3.fromWei(balance.toNumber(),"ether");
      
      assert.equal(account_one_ending_balance, 10000, "Amount wasn't correctly taken from the sender");
    });
  });
});
