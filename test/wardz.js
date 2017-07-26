var wardz = artifacts.require("./wardz.sol");

contract('wardz', function(accounts) {
  it("should put 10000 MetaCoin in the first account", function() {
    return wardz.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 1000000, "10000 wasn't in the first account");
    });
  });
  it("should call a function that depends on a linked library", function() {
    var wdz;
    var wardzBalance;
    var wardzEthBalance;

    return wardz.deployed().then(function(instance) {
      wdz = instance;
      return wdz.balanceOf.call(accounts[0]);
    }).then(function(outCoinBalance) {
      wardzBalance = outCoinBalance.toNumber();
      return wdz.balanceInEthOf.call(accounts[0]);
    }).then(function(outCoinBalanceEth) {
      wardzEthBalance = outCoinBalanceEth.toNumber();
    }).then(function() {
      assert.equal(wardzEthBalance, 2 * wardzBalance, "Library function returned unexpected function, linkage may be broken");
    });
  });
  it("should send coin correctly", function() {
    var wdz;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    return wardz.deployed().then(function(instance) {
      wdz = instance;
      return wdz.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return wdz.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return wdz.transfer(account_two, amount);
    }).then(function() {
      return wdz.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return wdz.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });
});
