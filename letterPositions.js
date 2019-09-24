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

module.exports = letterPositions;
