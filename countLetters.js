const countLetters = function(inputSentence) {
  let outputObjectWithLetterQuantities = {};
  let inputSentenceNoSpaces = inputSentence.split(" ").join("");

  for (const character of inputSentenceNoSpaces) {
    if (outputObjectWithLetterQuantities[character]) {
      outputObjectWithLetterQuantities[character] += 1;
    } else {
      outputObjectWithLetterQuantities[character] = 1;
    }
  }
  return outputObjectWithLetterQuantities;
};





module.exports = countLetters;





