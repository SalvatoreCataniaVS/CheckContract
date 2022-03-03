const CheckContract = artifacts.require("CheckContract");

module.exports = function (deployer) {
  deployer.deploy(CheckContract);
};
