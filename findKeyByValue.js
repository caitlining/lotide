const findKeyByValue = function(inputObject, valueToFind) {
  for (const key in inputObject) {
    if (inputObject[key] === valueToFind) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

