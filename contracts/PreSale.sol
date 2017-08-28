pragma solidity ^0.4.11;

contract PreSale {

    struct Contributor {
        uint256 contribution;
        address contributor;
    }

    Contributor[] public contributors;
    uint public contributorCount;
    address public wallet;

    function PreSale(address _wallet) {
        require(_wallet != 0x0);
        wallet = _wallet;
    }

    // fallback function can be used to buy tokens
    function () payable {
        contributors.push(Contributor({
            contribution: msg.value,
            contributor: msg.sender
        }));
        contributorCount++;
        Contribution(msg.sender, msg.value);
        preBuy();
    }

    function preBuy () internal {
        wallet.transfer(msg.value);
    }
    
    function getContributorCount() constant returns (uint) {
        return contributorCount;
    }
    
    function getContributor (uint index) constant returns (uint, address) {
        Contributor storage _cont = contributors[index];
        return (_cont.contribution, _cont.contributor);
    }

    event Contribution(address contributor, uint256 contribution);
    
}