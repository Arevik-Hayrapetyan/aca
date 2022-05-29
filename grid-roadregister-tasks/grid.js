function checkValidGridLength(grid) {
  const gridLength = 9;
  const rowLength = 9;
  if (grid.length === gridLength) {
    const checkedRowLength = grid.every((row) => {
      return row.length == rowLength;
    });
    if (!checkedRowLength) {
      console.log(`Invalid row length, it must be ${rowLength}`);
      return false;
    }
    return true;
  }
  console.log(`Invalid grid length, it must be ${gridLength}`);
  return false;
}

function checkRow(grid) {
  if (checkValidGridLength(grid)) {
    const check = grid.map((row) => {
      return row
        .map((column, columnIndex) => {
          if (!isNaN(column)) {
            if (row.lastIndexOf(column) > columnIndex) {
              return false;
            }
          }
        })
        .includes(false);
    });
    if (check.includes(true)) {
      return false;
    } else {
      return true;
    }
  }
}

function checkColumn(grid) {
  const result = [];
  grid.forEach((row, rowIndex) => {
    const temp = [];
    row.forEach((column, columnIndex) => {
      temp.push(grid[columnIndex][rowIndex]);
    });
    result.push(temp);
  });

  return checkRow(result);
}

function checkValidPuzzle(grid) {
  console.log("checkValidGridLength", checkValidGridLength(grid));
  console.log("checkRow", checkRow(grid));
  console.log("checkColumn", checkColumn(grid));
  if (checkRow(grid) && checkColumn(grid)) {
    return "Your puzzle is valid";
  } else {
    return "Your puzzle is invalid";
  }
}

console.log(
  checkValidPuzzle([
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", "8", ".", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "6"],
  ])
);
