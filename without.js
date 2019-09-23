const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅ Assertation Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🔴 Assertation Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const without = function(source, itemsToRemove) {
  const cleanArray = [];
  for (const testNum of source) {
    if (!itemsToRemove.includes(testNum)) {
      cleanArray.push(testNum);
    }
  }
  return cleanArray;
};

// The function below works, but I made a cleaner version above
// const without = function(source, itemsToRemove) {
//   let cleanArray = [];
//   for (let i = 0; i < source.length; i++) {
//     let matchingElements = false;
//     for (let q = 0; q < itemsToRemove.length; q++) {
//       if (source[i] === itemsToRemove[q]) {
//         matchingElements = true;
//       }
//     } if (matchingElements === false) {
//       cleanArray.push(source[i]);
//     }
//   } return cleanArray;
// };


// TESTING
// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);


