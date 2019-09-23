const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertation Failed: ${actual} !== ${expected}`);
  }
};

// implement function findKeyByValue
// this takes in an OBJECT and a VALUE
// it should scan the object,
// and return the first key which contains the given value
// if no key with that given value is found
// it should return undefined;


// So I want to loop through all of the key-value pairs in my object
// as I'm looping, I'm looking for the value that matches the inputted value
// if I find that inputted value, I want to make a variable that is the key name that holds the value I'm looking for
// if I don't find the inputted value as a value in any of the inputted object keys
// i want to return undefined
// so I can return the variable I made at the end, and if it wasn't given a value, it should return as undefined


// below works but I've made another version that is more concise
// const findKeyByValue = function (inputObject, valueToFind) {
//   let outputMatchingKeyName;
//   for (const key in inputObject) {
//     if (inputObject[key] === valueToFind) {
//       outputMatchingKeyName = key;
//     }
//   } return outputMatchingKeyName;
// };

const findKeyByValue = function(inputObject, valueToFind) {
  for (const key in inputObject) {
    if (inputObject[key] === valueToFind) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const relationships = {
  mom: "Marianne",
  dad: "Steve",
  sister: "Jenny",
  partner: "David"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(findKeyByValue(relationships, "Jenny"));
console.log(findKeyByValue(relationships, "Bob"));

