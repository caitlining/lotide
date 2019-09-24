const without = function(source, itemsToRemove) {
  const cleanArray = [];
  for (const testNum of source) {
    if (!itemsToRemove.includes(testNum)) {
      cleanArray.push(testNum);
    }
  }
  return cleanArray;
};

module.exports = without;