var rabbits = (require('../cherokee'));
var chai = require('chai');
var expect = chai.expect;


describe('rabbits()', function() {
    context('when rabbits is 3,25,50', function() {
      it('returns 210195', function() {

        var result = rabbits(3,25,50);
        expect(result).to.equal(210195);
      });
    });
    context('when rabbits is 5,75,12', function() {
      it('returns 4125', function() {

        var result = rabbits(5,75,12);
        expect(result).to.equal(4125);
      });
    });
    context('when rabbits is 162,5,104', function() {
      it('returns 25894', function() {

        var result = rabbits(162,5,104);
        expect(result).to.equal(25894);
      });
    });
  });
