function checkValidPuzzle(grid) {
  const gridLength = 9;
  const rowLength = 9;

  function checkValidGridLength(grid) {
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

  if (checkValidGridLength(grid)) {
    grid.forEach((row) => {
      let rowNumbers = [];

      row.map((item, index) => {
        if (!isNaN(item)) {
          if (row.lastIndexOf(item) > index) {
            console.log(row[index]);
          }
          // rowNumbers.push(item);
        }
      });
      // console.log("lastIndexOf", rowNumbers.lastIndexOf("2"));
      console.log(rowNumbers);
    });
  }
}
console.log(
  checkValidPuzzle([
    [".", ".", "1", "1", "4", ".", ".", "2", "2"],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", "7", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."],
  ])
);
