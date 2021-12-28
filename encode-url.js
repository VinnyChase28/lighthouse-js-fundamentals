const urlEncode = function (text) {
  let new_string = "";
  for (i in text) {
    new_string = text.replace(/ /g, "%20");
  }
  return new_string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
