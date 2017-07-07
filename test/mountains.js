var mountain = require('../mountains');
var chai = require('chai');
var expect = chai.expect;

describe('mountain()', function() {
    context('when mountain heights are [1000,2000,3000]', function() {
      it('returns 3000 as highest mountain', function() {

        var result = mountain([1000,2000,3000]);
        expect(result).to.equal(3000);
      });
    });
    context('when mountain heights are [1999,1997,2001]', function() {
      it('returns 2001 as highest mountain', function() {

        var result = mountain([1999,1997,2001]);
        expect(result).to.equal(2001);
      });
    });
    context('when mountain heights are [4999,1997,2001]', function() {
      it('returns 4999 as highest mountain', function() {

        var result = mountain([4999,1997,2001]);
        expect(result).to.equal(4999);
      });
    });
  });
