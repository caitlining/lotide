const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true});

describe('#countOnly', () => {

  it("should return 1 for result1['Jason']", () => {
    assert.equal(result1['Jason'], 1);
  });

  it("should return { Fang: 2, Jason: 1 } for (firstNames, {'Jason': true, 'Karima': true, 'Fang': true})", () => {
    assert.deepEqual(result1, { Fang: 2, Jason: 1 });
  });

  it("should return undefined for result1['Karima']", () => {
    assert.equal(result1['Karima'], undefined);
  });

});
