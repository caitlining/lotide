const flatten = function(arr) {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let q = 0; q < arr[i].length; q++) {
        flatArray.push(arr[i][q]);
      }
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;