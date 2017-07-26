pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/wardz.sol";

contract TestWardz {

  function testInitialBalanceUsingDeployedContract() {
    wardz wdz = wardz(DeployedAddresses.wardz());

    uint expected = 1000000;

    Assert.equal(wdz.balanceOf(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  }

  function testInitialBalanceWithNewWardz() {
    wardz wdz = wardz(DeployedAddresses.wardz());

    uint expected = 1000000;

    Assert.equal(wdz.balanceOf(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  }

}
