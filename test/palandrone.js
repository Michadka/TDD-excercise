var palandrone = (require('../palandrone'));
var chai = require('chai');
var expect = chai.expect;

  describe('palandrone()', function() {
    context('when word is "Abba"', function() {
      it('returns true', function() {

        var result = palandrone("Abba");
        expect(result).to.equal(true);
      });
    });
    context('when word is "dad"', function() {
      it('returns true', function() {

        var result = palandrone("dad");
        expect(result).to.equal(true);
      });
    });
    context('when word is "aBcDeFgHhgfedcba"', function() {
      it('returns true', function() {

        var result = palandrone("aBcDeFgHhgfedcba");
        expect(result).to.equal(true);
      });
    });
    context('when word is "Gopher"', function() {
      it('returns false', function() {

        var result = palandrone("Gopher");
        expect(result).to.equal(false);
      });
    });
  });
