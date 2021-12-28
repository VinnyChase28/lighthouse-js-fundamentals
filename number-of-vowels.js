const numberOfVowels = function (data) {
  let m = data.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
