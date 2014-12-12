var size = 5;

// They haven't taught functions yet, so let's do this without functions.
var oddRow = "";
var evenRow = "";
for (var colIndex = 0; colIndex < size; colIndex += 1) {
  if (colIndex % 2 == 0) {
    oddRow += " ";
    evenRow += "#";
  } else {
    oddRow += "#";
    evenRow += " ";
  }
}

var board = "\n";
for (var rowIndex = 0; rowIndex < size; rowIndex += 1) {
  board += (rowIndex % 2 == 0 ? oddRow : evenRow) + "\n"
}

debug(board);
