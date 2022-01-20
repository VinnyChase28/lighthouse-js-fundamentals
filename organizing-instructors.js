const organizeInstructors = function (instructors) {
  let obj = {};

  const unique = [...new Set(instructors.map((item) => item.course))]; // [ 'A', 'B']

  for (i in unique) {
    obj[unique[i]] = [];
  }

  for (i in instructors) {
    if (instructors[i].course === "Blockchain") {
      obj["Blockchain"].push(instructors[i].name);
    } else if (instructors[i].course === "iOS") {
      obj["iOS"].push(instructors[i].name);
    } else if (instructors[i].course === "Web") {
      obj["Web"].push(instructors[i].name);
    }
  }

  console.log(obj);
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
