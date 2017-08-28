pragma solidity ^0.4.11;

import "./Wardz.sol";
import "zeppelin-solidity/contracts/crowdsale/CappedCrowdsale.sol";
import "zeppelin-solidity/contracts/crowdsale/RefundableCrowdsale.sol";

contract WardzSale is CappedCrowdsale, RefundableCrowdsale {

    function WardzSale(uint256 _startBlock, uint256 _endBlock, uint256 _rate, address _wallet, uint256 _cap, uint256 _goal) Crowdsale(_startBlock, _endBlock, _rate, _wallet) CappedCrowdsale(_cap) RefundableCrowdsale(_goal) FinalizableCrowdsale() {
        require(_goal <= _cap);
    }

    // creates the wardz to be sold.
    function createTokenContract() internal returns (MintableToken) {
        return new Wardz();
    }

}