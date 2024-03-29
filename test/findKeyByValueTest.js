const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const relationships = {
  mom: "Marianne",
  dad: "Steve",
  sister: "Jenny",
  partner: "David"
};

describe('#findKeyByValue', () => {

  it('should return "drama" for (bestTVShowsByGenre, "The Wire")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return undefined for (bestTVShowsByGenre, "That 70s Show")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});
