var nickname = (require('../nickname'));
var chai = require('chai');
var expect = chai.expect;


describe('nickname()', function() {
    context('when name is Joseph and the nickname is Joe', function() {
      it('returns true', function() {
        var result = nickname("Joe", "Joseph");
        expect(result).to.equal(true);
      });
    });
    context('when name is Robert and the nickname is Bob', function() {
      it('returns false', function() {
        var result = nickname("Bob", "Robert");
        expect(result).to.equal(false);
      });
    });
    context('when name is Mary and the nickname is Mary', function() {
      it('returns false', function() {
        var result = nickname("Mary", "Mary");
        expect(result).to.equal(false);
      });
    });
  });
