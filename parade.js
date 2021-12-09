const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = (moves) => {
  const position = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      console.log("go north");
      position[1] += 1;
    } else if (moves[i] === "west") {
      console.log("go west");
      position[0] -= 1;
    } else if (moves[i] === "east") {
      console.log("go east");
      position[0] += 1;
    } else if (moves[i] === "south") {
      console.log("go south");
      position[1] -= 1;
    }
  }
  return;
};

finalPosition(moves);
