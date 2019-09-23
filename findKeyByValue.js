const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertation Failed: ${actual} !== ${expected}`);
  }
};

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

module.exports = findKeyByValue;

