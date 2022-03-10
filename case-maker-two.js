const makeCase = function (input, casing) {
  switch (casing) {
    case "camel":
      return input
        .split(" ")
        .map((word, index) => {
          // If it is the first word make sure to lowercase all the chars.
          if (index == 0) {
            return word.toLowerCase();
          } // If it is not the first word only upper case the first char and lowercase the rest.
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
    case "pascal":
      return input
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
    case "snake":
      return input
        .split(" ")
        .map((word) => {
          return word + "_";
        })
        .join("")
        .slice(0, -1);
    case "kebab":
      return input
        .split(" ")
        .map((word) => {
          return word + "-";
        })
        .join("")
        .slice(0, -1);
    case "title":
      return input
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
    case "vowel":
      return input
        .split(" ")
        .map((word) => {
          return word.replace("i", "I").replace("a", "A");
        })
        .join(" ");
    case "consonant":
      return input
        .split(" ")
        .map((word) => {
          return word
            .replace("t", "T")
            .replace("h", "H")
            .replace("s", "S")
            .replace("r", "R")
            .replace("n", "N")
            .replace("g", "G");
        })
        .join(" ");
  }
  if (casing.includes("upper" && "snake")) {
    return input
      .split(" ")
      .map((word) => {
        return word + "_";
      })
      .join("")
      .slice(0, -1)
      .toUpperCase();
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));


