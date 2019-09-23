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

const letterPositions = function(sentenceAsString) {
  const resultsObject = {};
  for (let i = 0; i < sentenceAsString.length; i++) {
    let currentChar = sentenceAsString[i];
    if (currentChar !== " ") {
      if (!resultsObject[currentChar]) {
        resultsObject[currentChar] = [i];
      } else if (resultsObject[currentChar]) {
        resultsObject[currentChar].push(i);
      }
    }
  }
  return resultsObject;
};

const results1 = letterPositions("hello");
const results2 = letterPositions("lighthouse in the house");

assertArraysEqual(results1["h"], [0]);
assertArraysEqual(results2["h"], [3, 5, 15, 18]);

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

module.exports = letterPositions;
