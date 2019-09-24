const countLetters = require('../countLetters');
const assert = require('chai').assert;

const results1 = countLetters("how are you today");
const results2 = countLetters("lighthouse in the house");

describe('#countLetters', () => {
  
  it("should return 2 for results1['a']", () => {
    assert.strictEqual(results1['a'], 2);
  });

  it("should return 1 for results2['l]", () => {
    assert.strictEqual(results2['l'], 1);
  });
  
});