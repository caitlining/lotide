const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼Assertation Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`👎🏼Assertation Failed: ${actual} !== ${expected}`);
  }
};

//make a function that returns an object
//the function takes in a string
//the returned object will have key-value pairs 
// those pairs will show the quantity of each letter in the given string
// skip spaces

//tip, you can use for...of loops with strings

//this function works but I accidentally made it for counting words, not characters
/*
const countWords = function (inputSentenceAsString) {
  let outputObjectWithLetterQuantities = {};
  let inputSentenceAsArrayWithoutSpaces = inputSentenceAsString.split(" ");
  for (const word of inputSentenceAsArrayWithoutSpaces) {
    if (outputObjectWithLetterQuantities[word]) {
      outputObjectWithLetterQuantities[word] += 1;
    } else {
      outputObjectWithLetterQuantities[word] = 1;
    }  
  } return (outputObjectWithLetterQuantities);
};
*/

//to make this work properly, I'm going to loop through my input string and make a new string that is just each character, sans spaces


const countLetters = function (inputSentence) {
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
  } return outputObjectWithLetterQuantities;
};


const results1 = countLetters("how are you today")
const results2 = countLetters("lighthouse in the house");

//TESTS 

//console.log(results1);
//console.log(results2);

assertEqual(results1["a"], 2);
assertEqual(results1["h"], 1);
assertEqual(results1["o"], 3);
assertEqual(results2["l"], 1);
assertEqual(results2["i"], 2);





