const eqObjects = function(object1, object2) {
  let object1KeyArray = Object.keys(object1);
  let object2KeyArray = Object.keys(object2);
  if (object1KeyArray.length !== object2KeyArray.length) {
    return false;
  } else {
    for (const keyName of object1KeyArray) {
      if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) {
        return eqArrays(object1[keyName], object2[keyName]);
      } else {
        if (object1[keyName] !== object2[keyName]) {
        return false;
        }
      }
    } return true;
  }
};


//this will take in two objects and console.log an appropriate message to the console

const assertObjectsEqual = function (inputObject, expectedObject) {
  const inspect = require('util').inspect;
  if (eqObjects(inputObject, expectedObject)) {
    console.log(`✅ Assertation Passed: ${inspect(inputObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`🔴 Assertation Failed: ${inspect(inputObject)} !== ${inspect(expectedObject)}`);
  }
};

assertObjectsEqual({ a: 1, b: 2}, { a: 1, b: 2} );
assertObjectsEqual({ a: 1, b: 5}, { a: 1, b: 2} );