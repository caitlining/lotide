const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertation Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Caitlin", "Caitlin");
assertEqual("Caitlin", "Jennifer");
assertEqual(22, 22);
assertEqual(22, 5);