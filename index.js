'use strict';

var randomNatural  = require('random-natural');
var randomAreaCode = require('random-areacode');

module.exports = function (formatted) {

  var areaCode   = randomAreaCode();
  var exchange   = randomNatural(2, 9).toString()
    + randomNatural(0, 9).toString()
    + randomNatural(0, 9).toString();
  var subscriber = randomNatural(1000, 9999).toString();

  return formatted
    ? areaCode + ' ' + exchange + '-' + subscriber
    : areaCode + exchange + subscriber;
};
