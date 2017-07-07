var greater = (require('../greaterThan'));
var chai = require('chai');
var expect = chai.expect;


describe('greater()', function() {
    context('when amount is 20, 30', function() {
      it('returns false', function() {
        var result = greater(20, 30);
        expect(result).to.equal(false);
      });
    });
    context('when amount is 99, 3990', function() {
      it('returns false', function() {
        var result = greater(99, 3990);
        expect(result).to.equal(false);
      });
    });
    context('when amount is 5, 5', function() {
      it('returns false', function() {
        var result = greater(5, 5);
        expect(result).to.equal(false);
      });
    });
    context('when amount is 110, 11', function() {
      it('returns true', function() {
        var result = greater(110, 11);
        expect(result).to.equal(true);
      });
    });
  });
