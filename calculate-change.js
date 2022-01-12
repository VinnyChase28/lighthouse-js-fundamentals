const calculateChange = function (total, cash) {
  let changeOfEachDenomination = {};
  let currentChange = cash - total;

  if (currentChange >= 2000) {
    changeOfEachDenomination["twentyDollar"] = Math.floor(currentChange / 2000);
    currentChange =
      currentChange - 2000 * changeOfEachDenomination["twentyDollar"];
  }

  if (currentChange >= 1000) {
    changeOfEachDenomination["tenDollar"] = Math.floor(currentChange / 1000);
    currentChange =
      currentChange - 1000 * changeOfEachDenomination["tenDollar"];
  }

  if (currentChange >= 500) {
    changeOfEachDenomination["fiveDollar"] = Math.floor(currentChange / 500);
    currentChange =
      currentChange - 500 * changeOfEachDenomination["fiveDollar"];
  }

  if (currentChange >= 200) {
    changeOfEachDenomination["twoDollar"] = Math.floor(currentChange / 200);
    currentChange = currentChange - 200 * changeOfEachDenomination["twoDollar"];
  }

  if (currentChange >= 100) {
    changeOfEachDenomination["oneDollar"] = Math.floor(currentChange / 100);
    currentChange = currentChange - 100 * changeOfEachDenomination["oneDollar"];
  }

  if (currentChange >= 25) {
    changeOfEachDenomination["quarter"] = Math.floor(currentChange / 25);
    currentChange = currentChange - 25 * changeOfEachDenomination["quarter"];
  }

  if (currentChange >= 10) {
    changeOfEachDenomination["dime"] = Math.floor(currentChange / 10);
    currentChange = currentChange - 10 * changeOfEachDenomination["dime"];
  }

  if (currentChange >= 5) {
    changeOfEachDenomination["nickel"] = Math.floor(currentChange / 5);
    currentChange = currentChange - 5 * changeOfEachDenomination["nickel"];
  }

  if (currentChange >= 1) {
    changeOfEachDenomination["penny"] = Math.floor(currentChange / 1);
    currentChange = currentChange - 1 * changeOfEachDenomination["penny"];
  }

  return changeOfEachDenomination;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
