const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {

  it('should return true for ([1, 2, 3], [1, 2, 3]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('should return false for ([1, 2, 3], [3, 2, 1])', () => {
    const output = eqArrays([1, 2, 3], [3, 2, 1]);
    const result = false;
    assert.deepEqual(output, result);
  });

  it('should return false for (["1", "2", "3"], ["1", "2", 3])', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

});