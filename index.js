'use strict';

var pickItem      = require('pick-item');
var toString      = require('to-str');
var randomNatural = require('random-natural');

var isps = [130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 145, 147,
  150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 180, 181,
  182, 183, 184, 185, 186, 187, 188, 189];

module.exports = function (isp) {

  isp = isp ? toString(isp) : pickItem(isps);

  var result = '';
  var i      = 8;

  while (i--) {
    result += '' + randomNatural(0, 9);
  }

  result = isp + result;

  return result;
};
