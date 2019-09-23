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


//we are skipping/not tallying the spaces
//but they still matter because they impact the index


// create a function that takes in a string
// create an empty object, which we will fill and return
// loop through the string by character
// if the character is not a space and it's the first time we've seen it:
// add the character as a key and it's index as the first value in an array
// if the character is not a space and we've seen it before
// add a value to that character's key value, which is an array already
// return an object:
// the object will list all of the characters in your string as keys,
// no spaces,
// the value of each key will be all the indexed positions of that character


// not sure how to use char and also find it's index
// const letterPositions = function(sentenceAsString) {
//   const resultsArray = {};
//   for (const char of sentenceAsString) {
//     if (char !== " ") {
//       if (!resultsArray[char]) {
//         resultsArray[char] = [char]
//       } else if (resultsArray[char]) {
//         resultsArray[char].push(char);
//       }
//     }
//   }
//   return resultsArray;
// }

//maybe try using a for in on a string to get the index


// good old fashioned loop because I understand indexes best that way
// this works but I wanted to make it more dry so I did below
// const letterPositions = function (sentenceAsString) {
//   const resultsObject = {};
//   for (let i = 0; i < sentenceAsString.length; i++) {
//     if (sentenceAsString[i] !== " ") {
//       if (!resultsObject[sentenceAsString[i]]) {
//         resultsObject[sentenceAsString[i]] = [i];
//       } else if (resultsObject[sentenceAsString[i]]) {
//         resultsObject[sentenceAsString[i]].push(i);
//       }
//     }
//   } return resultsObject;
// };


//same as above but with a variable to clear things up
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


// TESTING

//let result1 = letterPositions("hello");

// assertArraysEqual(result1["h"], [0]);

//console.log(letterPositions("hello"))
//console.log(letterPositions("hello hello"))

// console.log(letterPositions("hello"));
// console.log(letterPositions("hello hello"));
// console.log(letterPositions("lighthouse in the house"));
// console.log(letterPositionsDry("lighthouse in the house"));

const results1 = letterPositions("hello");
const results2 = letterPositions("lighthouse in the house");

assertArraysEqual(results1["h"], [0]);
assertArraysEqual(results2["h"], [3, 5, 15, 18]);

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
