//solved, submit to Kata

const repeatNumbers = function (data) {
  let newArray = [];
  for (let i in data) {
    newArray.push(data[i][0].toString().repeat(data[i][1]));
  }
  return newArray.toString();
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
