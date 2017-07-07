var longestWord = (require('../longestWord'));
var chai = require('chai');
var expect = chai.expect;


describe('longestWord()', function() {
    context('when string is "The big brown fox can kiss my hand"', function() {
      it('returns brown', function() {
        var result = longestWord("The big brown fox can kiss my hand");
        expect(result).to.equal("brown");
      });
    });
    context('when string is "This is my sentence for testing"', function() {
      it('returns sentence', function() {
        var result = longestWord("This is my sentence for testing");
        expect(result).to.equal("sentence");
      });
    });
    context('when string is "I am returning the first occurence of the longest word"', function() {
      it('returns returning', function() {
        var result = longestWord("I am returning the first occurence of the longest word");
        expect(result).to.equal("returning");
      });
    });
  });
