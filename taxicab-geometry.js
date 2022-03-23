const blocksAway = function (directions) {
  //x axis and y axis
  let y = 0;
  let x = 0;
  let direction = null;
  let north = "north";
  let south = "south";
  let east = "east";
  let west = "west ";
  let route = [];

  //there are 4 directions: north, south, east, west

  //lets put the input in proper pairs *shakes fist*
  directions
    .reduce(function (accumulator, currentValue, currentIndex, array) {
      if (currentIndex % 2 === 0)
        accumulator.push(array.slice(currentIndex, currentIndex + 2));
      return accumulator;
    }, [])
    //push subarrays to array
    .map((p) => route.push([p[0], p[1]]));

  if (route[0][0] == "right") {
    direction = east;
    x += route[0][1];
  }

  if (route[0][0] == "left") {
    direction = west;
    x -= route[0][1];
  }

  console.log(x, y);
  route.shift();
  // console.log(route);

  for (i in route) {
    // console.log(route[i]);
    if (route[i][0] == "left" && direction == east) {
      drection = north;
      y += route[i][1];
    } else if (route[i][0] == "right" && direction == east) {
      direction = south;
      y -= route[i][1];
    } else if (route[i][0] == "left" && direction == west) {
      direction = south;
      y -= route[i][1];
    } else if (route[i][0] == "right" && direction == west) {
      direction = north;
      y += route[i][1];
    } else if (route[i][0] == "left" && direction == south) {
      direction = east;
      x += route[i][1];
    } else if (route[i][0] == "right" && direction == south) {
      direction = west;
      x -= route[i][1];
    } else if (route[i][0] == "left" && direction == north) {
      direction = west;
      x -= route[i][1];
    } else if (route[i][0] == "right" && direction == north) {
      direction = east;
      x += route[i][1];
    }
  }
  return { "east ": x, "north: ": y };
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
