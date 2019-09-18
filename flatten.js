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

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅ Assertation Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🔴 Assertation Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const flatten = function(arr) {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let q = 0; q < arr[i].length; q++) {
        flatArray.push(arr[i][q]);
      } 
    } else {
      flatArray.push(arr[i]);
    }
  } return flatArray;
};

// TESTING

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4, 5, 6, 7], 8, [9, 10]]));
console.log(flatten([1, 2, 3, 4, 5, 6]));
console.log(flatten([[1]]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 5, 6, 7], 8, [9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1]), [1]);