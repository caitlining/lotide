const map = function(inputArr, callbackFunc) {
  const results = [];
  for (const element of inputArr) {
    results.push(callbackFunc(element));
  } return results;
};

module.exports = map;

