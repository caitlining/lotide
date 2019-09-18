const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼Assertation Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`👎🏼Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  } return true;
};

/* works with primitive key values only!

const eqObjects = function(object1, object2) {
  let object1KeyArray = Object.keys(object1);
  let object2KeyArray = Object.keys(object2);
  if (object1KeyArray.length !== object2KeyArray.length) {
    return false;
  } else {
    for (const keyName of object1KeyArray) {
      if (object1[keyName] !== object2[keyName]) {
        return false;
      }
    } return true;
  }
};*/


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




// TESTS



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
//(eqObjects(ab, abc));

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2);

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

const aArr = { a: [1, 2, 3], b: 1 };
const bArr = { a: 1, b: [1, 2, 3] };

assertEqual(eqObjects(aArr, bArr), false);

