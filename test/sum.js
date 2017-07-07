var sum = (require('../sum'));
var chai = require('chai');
var expect = chai.expect;


describe('sum()', function() {
    context('when amount is 20, 30', function() {
      it('returns 50', function() {
        var result = sum(20, 30);
        expect(result).to.equal(50);
      });
    });
    context('when amount is 99, 3990', function() {
      it('returns 198', function() {
        var result = sum(99, 99);
        expect(result).to.equal(198);
      });
    });
    context('when amount is 5, 5', function() {
      it('returns 10', function() {
        var result = sum(5, 5);
        expect(result).to.equal(10);
      });
    });
    context('when amount is 11, 11', function() {
      it('returns 22', function() {
        var result = sum(11, 11);
        expect(result).to.equal(22);
      });
    });
  });
