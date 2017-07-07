var hangman = (require('../hangman'));
var chai = require('chai');
var expect = chai.expect;


describe('hangman()', function() {
    context('when word is cool and letter is O', function() {
      it('returns 2', function() {

        var result = hangman("cool", "O");
        expect(result).to.equal(2);
      });
    });
    context('when word is cool and letter is P', function() {
      it('returns 0', function() {

        var result = hangman("cool", "P");
        expect(result).to.equal(0);
      });
    });
    context('when word is migrant and letter is z', function() {
      it('returns 0', function() {

        var result = hangman("migrant", "z");
        expect(result).to.equal(0);
      });
    });
    context('when word is poopypie and letter is P', function() {
      it('returns 3', function() {

        var result = hangman("poopypie", "P");
        expect(result).to.equal(3);
      });
    });
  });
