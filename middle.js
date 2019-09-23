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

const middle = function(arr) {
  const tooShortForMiddle = arr.length <= 2;
  const evenArray = arr.length % 2 === 0;
  if (tooShortForMiddle) {
    return [];
  } else if (evenArray) {
    const firstMiddleIndex = (arr.length / 2) - 1;
    const secondMiddleIndex = (arr.length / 2);
    return [arr[firstMiddleIndex], arr[secondMiddleIndex]];
  } else {
    const singleMiddleIndex = (Math.floor(arr.length / 2));
    return [arr[singleMiddleIndex]];
  }
};

module.exports = middle;