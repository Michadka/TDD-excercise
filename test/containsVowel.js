var vowel = (require('../containsVowel'));
var chai = require('chai');
var expect = chai.expect;


describe('vowel()', function() {
    context('when word is dog', function() {
      it('returns Yes', function() {
        var result = vowel("dog");
        expect(result).to.equal("Yes");
      });
    });
    context('when word is fgfgf', function() {
      it('returns No', function() {
        var result = vowel("fgfgf");
        expect(result).to.equal("No");
      });
    });
    context('when word is O', function() {
      it('returns Yes', function() {
        var result = vowel("O");
        expect(result).to.equal("Yes");
      });
    });
    context('when word is P', function() {
      it('returns No', function() {
        var result = vowel("P");
        expect(result).to.equal("No");
      });
    });

  });
