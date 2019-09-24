const findKey = require('../findKey');
const assert = require('chai').assert;

const result1 = findKey({
  "Blue Hill":  { stars: 1 },
  "Akaleri":    { stars: 3 },
  "noma":       { stars: 2 },
  "elBulli":    { stars: 3 },
  "Ora":        { stars: 2 },
  "Akelarre":   { stars: 3 }
}, x => x.stars === 2);

const faveCities = {
  "New York": {rank: 10},
  "Florence": {rank: 9},
  "Maui":     {rank: 8}
};
const highRanking = num => num.rank === 10;

const result2 = findKey(faveCities, highRanking);
const result3 = findKey(faveCities, num => num.rank === 9);
const result4 = findKey(faveCities, num => num.rank < 5);

describe('#findKey', () => {

  it('should return "noma" for result1', () => {
    assert.strictEqual(result1, "noma");
  });

  it('should return "New York" for result2', () => {
    assert.strictEqual(result2, "New York");
  });

  it('should return "Florence" for result3', () => {
    assert.strictEqual(result3, "Florence");
  });

  it('should return undefined for result4', () => {
    assert.strictEqual(result4, undefined);
  });

});