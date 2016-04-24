var expect = require('chai').expect;

describe('random-mobile: ', function () {

  var randomMobile = require('../../');

  it('randomMobile()', function () {

    var count = 100;

    while (count--) {
      expect(randomMobile())
        .to.be.a('string')
        .and
        .to.have.length(10);

      expect(randomMobile(true))
        .to.be.a('string')
        .and
        .to.have.length(12);
    }
  });
});
