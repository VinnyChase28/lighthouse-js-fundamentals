const conditionalSum = function (values, condition) {
  evenAddition = 0;
  oddAddition = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      evenAddition += values[i];
    } else if (values[i] % 2 !== 0) {
      oddAddition += values[i];
    }
  }
  if (condition === "even") {
    return evenAddition;
  } else if (condition === "odd") {
    return oddAddition;
  } else if (values.length === 0) {
    return 0;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
