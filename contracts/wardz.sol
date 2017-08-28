pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

contract Wardz is MintableToken {

    string public constant symbol = "WDZ";
    string public constant name = "wardZ";
    uint public constant decimals = 18;

}