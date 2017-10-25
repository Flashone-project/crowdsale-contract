pragma solidity ^0.4.15;

import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';
import './FlashoneToken.sol';

contract FlashoneCrowdsale is Crowdsale {
  function FlashoneCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate,
    address _wallet) Crowdsale(_startTime, _endTime, _rate, _wallet)
  {

  }

}
