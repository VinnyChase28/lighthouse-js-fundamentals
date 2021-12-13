const loopyLighthouse = (range, multiples, words) => {
  for (let j = range[0]; j <= range[1]; j++) {
    const multipleOfTwo = j % 2 == 0;
    const multipleOfFive = j % 5 == 0;
    if (multipleOfTwo && multipleOfFive) {
      console.log("BattyBeacon");
    } else if (j % multiples[0] === 0) {
      console.log(words[0]);
    } else if (j % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(j);
    }
  }
};
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
