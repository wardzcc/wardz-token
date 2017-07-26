var ConvertLib = artifacts.require("./ConvertLib.sol");
var wardz = artifacts.require("./wardz.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, wardz);
  deployer.deploy(wardz);
};
