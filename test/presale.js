var preSale = artifacts.require("./PreSale.sol");

contract('PreSale', function(accounts) {
  it("Should get two contributor", function() {

    var account_one = accounts[3];
    var account_two = accounts[4];
    var amount = web3.toWei('0.1', "ether");


    return preSale.deployed().then(function(instance) {
        
      ps = instance;
      ps.sendTransaction({from: account_one, value: amount});
      ps.sendTransaction({from: account_two, value: amount});

      return ps.getContributorCount();

    }).then(function (contributors) {
        assert.equal(contributors, 2, "Amount of contributors wrong");
    })

  });
    it("Should be the right account", function() {

        var account_one = accounts[3];
        var account_two = accounts[4];
        var cOneAddress;

        return preSale.deployed().then(function(instance) {
            
        ps = instance;
        return ps.getContributor.call(0);

        }).then(function (value) {
            console.log(value[1]);
            cOneAddress = value[1];
            return ps.getContributor.call(1);
        }).then(function(value){  
           var cTwoAddress = value[1];
            assert.equal(cOneAddress, account_one, "contributors wrong");
            assert.equal(cTwoAddress, account_two, "contributors wrong");
        })

  });    
});
