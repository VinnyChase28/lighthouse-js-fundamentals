const range = (start, end, step) => {
  let output = [];
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  } else if (start > end) {
    return [];
  } else if (step <= 0) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
  }
  return output;
};

console.log(range(0, 8, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));
