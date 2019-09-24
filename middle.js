const middle = function(arr) {
  const tooShortForMiddle = arr.length <= 2;
  const evenArray = arr.length % 2 === 0;
  if (tooShortForMiddle) {
    return [];
  } else if (evenArray) {
    const firstMiddleIndex = (arr.length / 2) - 1;
    const secondMiddleIndex = (arr.length / 2);
    return [arr[firstMiddleIndex], arr[secondMiddleIndex]];
  } else {
    const singleMiddleIndex = (Math.floor(arr.length / 2));
    return [arr[singleMiddleIndex]];
  }
};

module.exports = middle;