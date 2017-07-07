var changeMachine = (require('../changeMachine'));
var chai = require('chai');
var expect = chai.expect;
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

  describe('changeMachine()', function() {
    context('when amount is 20', function() {
      it('returns [1, 0, 0, 0]', function() {

        var result = changeMachine(20);
        expect(result).to.be.equalTo([1, 0, 0, 0]);
      });
    });
    context('when amount is 21', function() {
      it('returns [1, 0, 0, 1]', function() {

        var result = changeMachine(21);
        expect(result).to.be.equalTo([1, 0, 0, 1]);
      });
    });
    context('when amount is 99', function() {
      it('returns [4, 1, 1, 4]', function() {

        var result = changeMachine(99);
        expect(result).to.be.equalTo([4, 1, 1, 4]);
      });
    });
  });
