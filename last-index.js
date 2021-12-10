const lastIndexOf = (array, number) => {
  let mySet = new Set(array);
  if (mySet.has(number)) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (number === array[i]) {
        return i;
      }
    }
  } else {
    return -1;
  }
};
// console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
// console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);

console.log(lastIndexOf([5, 5, 5, 5, 0], 5));
