const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "plumpness";

const judgeVegetable = (vegetables, metric) => {
  const maxValue = Math.max(...vegetables.map((i) => i[metric]), 0);
  const emptyArray = [];
  vegetables.map((item) => {
    if (item[metric] === maxValue) {
      emptyArray.push(item.submitter);
    }
  });
  return emptyArray.toString();
};

console.log(judgeVegetable(vegetables, metric));
