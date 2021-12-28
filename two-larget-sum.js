const sumLargestNumbers = function (data) {
  let max = Math.max.apply(null, data); // get the max of the array
  data.splice(data.indexOf(max), 1); // remove max from the array
  return Math.max.apply(null, data) + max;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
