const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertation Failed: ${actual} !== ${expected}`);
  }
};

//implement the function findKey
// this will take in an OBJECT and a callback
//this will scan the object
//this will RETURN the FIRST KEY for which the callback returns a truthy value
//if NO KEY is found, it should return undefined

//tip: look at findKeyByValue, as some of the core logic will be the same

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const result1 = findKey({
  "Blue Hill":  { stars: 1 },
  "Akaleri":    { stars: 3 },
  "noma":       { stars: 2 },
  "elBulli":    { stars: 3 },
  "Ora":        { stars: 2 },
  "Akelarre":   { stars: 3 }
}, x => x.stars === 2);

const faveCities = {
  "New York": {rank: 10},
  "Florence": {rank: 9},
  "Maui":     {rank: 8}
};

// const highRanking = function (num) {
//   if (num.rank === 10) {
//     return true;
//   }
// }

const highRanking = num => num.rank === 10;

const result2 = findKey(faveCities, highRanking);

const result3 = findKey(faveCities, num => num.rank === 9);

const result4 = findKey(faveCities, num => num.rank < 5);



assertEqual(result1, "noma");
assertEqual(result2, "New York");
assertEqual(result3, "Florence");
assertEqual(result4, undefined);

