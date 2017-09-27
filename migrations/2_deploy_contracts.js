var ConvertLib = artifacts.require("./ConvertLib.sol");
var Math = artifacts.require("./SafeMath.sol");
var WanChainICO = artifacts.require("./WanchainContribution.sol");

var wanTokenOwner = '0x0059160e763988730635638727D93Ede7cf779D8';

module.exports = function(deployer,network, accounts) {

  var dateTime = new Date('2017/09/27 20:00:00');
  var left = dateTime % 1000;
  var timeseconds = (dateTime - left) / 1000;

  console.log(dateTime.toUTCString());
  console.log(timeseconds);

  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, [WanChainICO]);
  deployer.deploy(Math);
  deployer.link(Math, [WanChainICO]);
  deployer.deploy(WanChainICO,wanTokenOwner, timeseconds);

};
