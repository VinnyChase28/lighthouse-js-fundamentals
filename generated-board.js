let whiteQueen = [0, 0];
let blackQueen = [5, 7];
//C, R
const generateBoard = () => {
  board = new Array();
  rows = 8;
  for (var i = 0; i < rows; i++) board[i] = new Array(0, 0, 0, 0, 0, 0, 0, 0);

  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;

  console.log(whiteQueen[1], blackQueen[1]);

  // If white queen and black queen are in the same row
  if (whiteQueen[1] == blackQueen[1]) return true;

  // If white queen and black queen are in the same column
  if (whiteQueen[0] == blackQueen[0]) return true;

  // // If queen can attack diagonally
  if (
    Math.abs(whiteQueen[1] - blackQueen[1]) ==
    Math.abs(whiteQueen[0] - blackQueen[0])
  )
    return true;

  // Opponent is safe
  console.log(board);
  return false;
};

const queenThreat = () => {
  // If white queen and black queen are in the same row
  if (whiteQueen[1] == blackQueen[1]) return true;

  // If white queen and black queen are in the same column
  if (whiteQueen[0] == blackQueen[0]) return true;

  // // If queen can attack diagonally
  if (
    Math.abs(whiteQueen[1] - blackQueen[1]) ==
    Math.abs(whiteQueen[0] - blackQueen[0])
  )
    return true;

  // Opponent is safe
  console.log(board);
  return false;
};

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
