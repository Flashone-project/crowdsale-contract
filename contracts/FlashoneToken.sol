pragma solidity ^0.4.15;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract FlashoneToken is MintableToken {
  string public constant name = "FlashOne";
  string public constant symbol = 'FLO';
  uint8 public constant decimal = 18;
}
