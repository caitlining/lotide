// implementing the function takeUntil
//this function will take in two parameters
//1. the array to work with
//2. the callback

//the function will return a "slice of the array"
//the slice will include elements from the input array
//the slice will start with the first element and will keep going until the callback returns a TRUTHY value

//the callback should only be provided one value: the single item in the array (so one at a time)
const takeUntil = function(arr, callback) {
  const slice = [];
  for (const element of arr) {
    if (!callback(element)) {
      slice.push(element);
    } else {
      return slice;
    }
  } return slice;
};

const testFunction = function(num) {
  return num > 3;
};

console.log(takeUntil([1, 2, 3, 4, 5], testFunction));
console.log('---');

console.log(takeUntil([5, 1, 2, 3, 4, 5], testFunction));
console.log('---');


//TESTING TO USE

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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// the above should return an array that includes all of the values from data1 until one of those is less than 0
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);


assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
