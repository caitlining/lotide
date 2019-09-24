const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(inputObject, expectedObject) {
  const inspect = require('util').inspect;
  if (eqObjects(inputObject, expectedObject)) {
    console.log(`✅ Assertation Passed: ${inspect(inputObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`🔴 Assertation Failed: ${inspect(inputObject)} !== ${inspect(expectedObject)}`);
  }
};

module.exports = assertObjectsEqual;
