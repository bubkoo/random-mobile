'use strict';

var expect = require('chai').expect;


describe('random-mobile: ', function () {

  var randomMobile = require('../../');

  it('randomMobile()', function () {
    expect(randomMobile()).to.be.a('string');
    expect(randomMobile().length).to.be.equal(11);
    expect(randomMobile('135').length).to.be.equal(11);
  });
});
