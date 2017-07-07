var average = (require('../average'));
var chai = require('chai');
var expect = chai.expect;


describe('average()', function() {
    context('when amount is 20, 30', function() {
      it('returns 25', function() {
        var result = average([20, 30]);
        expect(result).to.equal(25);
      });
    });
    context('when amount is 99, 3990', function() {
      it('returns 2044.5', function() {
        var result = average([99, 3990]);
        expect(result).to.equal(2044.5);
      });
    });
    context('when amount is 5, 5', function() {
      it('returns 5', function() {
        var result = average([5, 5]);
        expect(result).to.equal(5);
      });
    });
    context('when amount is 124, 1100, 2000, 5000, 45, 95', function() {
      it('returns 1394', function() {
        var result = average([124, 1100, 2000, 5000, 45, 95]);
        expect(result).to.equal(1394);
      });
    });
  });
