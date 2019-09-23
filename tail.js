const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertation Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const test = ["test"];
const empty = [];
console.log(tail(words));
console.log(tail(test));
console.groupCollapsed(tail(empty));

assertEqual(words.length, 3);
assertEqual(tail(words)[0], "Lighthouse");
