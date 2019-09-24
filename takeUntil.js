const takeUntil = function(arr, callback) {
  const slice = [];
  for (const element of arr) {
    if (!callback(element)) {
      slice.push(element);
    } else {
      return slice;
    }
  }
  return slice;
};

module.exports = takeUntil;