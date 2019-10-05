const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let object1KeyArray = Object.keys(object1);
  let object2KeyArray = Object.keys(object2);
  if (object1KeyArray.length !== object2KeyArray.length) {
    return false;
  } else {
    for (const keyName of object1KeyArray) {
      if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) {
        return eqArrays(object1[keyName], object2[keyName]);
      } else if (typeof object1[keyName] === 'object' && typeof object2[keyName] === 'object') {
        return eqObjects(object1[keyName], object2[keyName]);
      } else {
        if (object1[keyName] !== object2[keyName]) {
          return false;
        }
      }
    }
    return true;
  }
};

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));


module.exports = eqObjects;

