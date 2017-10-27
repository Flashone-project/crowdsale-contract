var FlashoneCrowdsale = artifacts.require('./FlashoneCrowdsale.sol')

module.exports = function(deployer, network, accounts) {
  return liveDeploy(deployer, accounts);
};

function latestTime() {
  return web3.eth.getBlock('latest').timestamp;
}

const duration = {
  seconds:  function(val) { return val },
  minutes:  function(val) { return val * this.seconds(60) },
  hours:    function(val) { return val * this.minutes(60) },
  days:     function(val) { return val * this.hours(24) },
  weeks:    function(val) { return val * this.days(7) },
  years:    function(val) { return val * this.days(365) }
};

async function liveDeploy(deployer, accounts) {
  const BigNumber = web3.BigNumber;
  const RATE = 1;//new BigNumber(1);
  console.log(duration.weeks(1));
  const startTime = latestTime() + duration.minutes(5);
  const endTime = startTime + duration.weeks(1);

  console.log([startTime, endTime, RATE, accounts[0]]);

  // uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet
  return deployer.deploy(FlashoneCrowdsale, startTime, endTime, RATE, accounts[0])
  .then(async () => {
    const inst = await FlashoneCrowdsale.deployed();
    const token = await inst.token.call();
    console.log('Token address', token);
  })
}

// var WEE = require('web3')
// var web3 = new WEE('http://localhost:8545')
// web3.eth.abi.encodeParameters(['uint256', 'uint256', 'uint256', 'address'], [1509064459,1509669259,1,'0x008491e354540059dd8a06b500112460419d6a34'])
// 1509064459,1509669259,1,'0x008491e354540059dd8a06b500112460419d6a34'
// 'uint256', 'uint256', 'uint256', 'address'
