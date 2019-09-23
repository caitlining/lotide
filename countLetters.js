const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertation Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputSentence) {
  let outputObjectWithLetterQuantities = {};
  let inputSentenceNoSpaces = "";
  for (const character of inputSentence) {
    if (character !== " ") {
      inputSentenceNoSpaces += character;
    }
  } for (const character of inputSentenceNoSpaces) {
    if (outputObjectWithLetterQuantities[character]) {
      outputObjectWithLetterQuantities[character] += 1;
    } else {
      outputObjectWithLetterQuantities[character] = 1;
    }
  }
  return outputObjectWithLetterQuantities;
};

const results1 = countLetters("how are you today");
const results2 = countLetters("lighthouse in the house");

console.log(results1);
console.log(results2);

assertEqual(results1["a"], 2);
assertEqual(results1["h"], 1);
assertEqual(results1["o"], 3);
assertEqual(results2["l"], 1);
assertEqual(results2["i"], 2);

module.exports = countLetters;





