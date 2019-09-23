const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {

  it("should return [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });

  it("should return [] for [2]", () => {
    assert.deepEqual(middle([2]), []);
  });

  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should return [] for [2, 2]", () => {
    assert.deepEqual(middle([2, 2]), []);
  });

});