const multiplicationTable = function (maxValue) {
  var array = [];
  for (var i = 1; i <= maxValue; i++) {
    for (var j = 1; j <= maxValue; j++) {
      array.push(j * i);
    }
  }

  let stringify = array.toString();
  return stringify.replace(/,/g, " ");
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
