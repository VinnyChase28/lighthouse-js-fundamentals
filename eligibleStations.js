const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = function (stations) {
  const eligibleStations = [];
  for (const i of stations) {
    const capacity = i[1];
    if (capacity >= 20) {
      const venue = i[2];
      if (venue === "school" || venue === "community centre") {
        eligibleStations.push(i[0]);
      }
    }
  }
  return eligibleStations;
};

console.log(chooseStations(stations));
