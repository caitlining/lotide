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


/* first version: works but is not as easy to read

const middle = function(arr) {
  let result = [];
  if (arr.length <= 2) {
    return result;
  } else if (arr.length % 2 === 0) {
    result.push(arr[(arr.length / 2) - 1]);
    result.push(arr[arr.length / 2]);
  } else {
    result.push(arr[Math.floor(arr.length / 2)]);
  } return result;
};*/

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

/*console.log(middle([2]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));*/

//TEST CONDITIONS

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([2, 2]), []);