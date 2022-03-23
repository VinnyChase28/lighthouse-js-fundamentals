let prompt = require("prompt-sync")();
let wrong = true;
let number = 24;
let alreadyGuessed = [];
let attempts = 0;

do {
  console.log(alreadyGuessed);
  console.log(attempts);
  let answer = prompt("Guess a number: ");
  if (alreadyGuessed.includes(answer)) {
    console.log("Already Guessed");
    attempts += 1;
    continue;
  } else if (answer > number) {
    console.log("Too Large");
    alreadyGuessed.push(answer);
    attempts += 1;
    continue;
  } else if (answer < number) {
    console.log("Too Small");
    alreadyGuessed.push(answer);
    attempts += 1;
    continue;
  } else if (isNaN(answer)) {
    console.log("Not a number! Can't you read?");
    alreadyGuessed.push(answer);
    attempts += 1;
    continue;
  } else {
    wrong = false;
    console.log("You got it! You took " + attempts + " attempts");
    break;
  }
} while (wrong);
