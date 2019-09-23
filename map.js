//Building our own Map function
//This function will take in two arguments:
//1. An array to map
//2. A callback function
//our map function will return a new array based on the reults of the callback function

const words = ["ground", "control", "to", "major", "tom"];
const arianaLyrics = ["no", "tears", "left", "to", "cry"];

const map = function(inputArr, callbackFunc) {
  const results = [];
  for (const element of inputArr) {
    results.push(callbackFunc(element));
  } return results;
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅ Assertation Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🔴 Assertation Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const results1 = map(words, word => word[0]);

const results2 = map(words, function(word) {
  return word[0];
});

const returnFirstLetter = function(word) {
  return word[0];
};

const capitalize = function(word) {
  return word.toUpperCase();
};

const results3 = map(words, returnFirstLetter);

console.log(results1);
console.log(results2);
console.log(results3);

const expectedResults = [ 'g', 'c', 't', 'm', 't' ];

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results3, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results3, expectedResults);

assertArraysEqual(map(arianaLyrics, returnFirstLetter), ['n', 't', 'l', 't', 'c']);

console.log(map(arianaLyrics, capitalize));
console.log(map(words, capitalize));

module.exports = map;

