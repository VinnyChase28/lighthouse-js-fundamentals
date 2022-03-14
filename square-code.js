const squareCode = function (message) {
  let num = Math.ceil(Math.sqrt(message.replace(/ /g, "").length));
  let letterArr = message.replace(/ /g, "").split("");
  //create subarrays with characters
  let tempArray = [];

  while (letterArr.length) {
    tempArray.push(letterArr.splice(0, num));
  }

  //get columns of subarrays
  const arrayColumn = (arr, n) => arr.map((x) => x[n]);

  const columns = [];

  if (tempArray[0].length > tempArray.length) {
    //have to add one here if rows are bigger than columns
    for (let i = 0; i <= tempArray.length + 1; i++) {
      columns.push(arrayColumn(tempArray, i));
    }
  } else {
    for (let i = 0; i <= tempArray.length; i++) {
      columns.push(arrayColumn(tempArray, i));
    }
  }

  // console.log(columns);

  const answer = [];

  for (let i in columns) {
    answer.push(columns[i].join(""));
  }

  return answer.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);

//bonus: get the same output as the kata example

function addNewlines(str) {
  let num = Math.ceil(Math.sqrt(str.replace(/ /g, "").length));

  var result = "";
  while (str.length > 0) {
    result += str.replace(/ /g, "").substring(0, num) + "\n";
    str = str.replace(/ /g, "").substring(num);
  }
  return result;
}

console.log(addNewlines("chill out"));
console.log(addNewlines("feed the dog"));
console.log(addNewlines("have a nice day"));
console.log(
  addNewlines(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
