function checkRoadSystem(roadRegister) {
  let i = 0; //for rowIndex
  let j = 0; // for columnIndex
  roadRegister.map((row, rowIndex) => {
    row.map((column, columnIndex) => {
      if (roadRegister[rowIndex][columnIndex]) {
        i += rowIndex;
        j += columnIndex;
      }
    });
  });
  if (i === j) return true;
  return false;
}
console.log(
  checkRoadSystem([
    [false, true, false],
    [false, false, false],
    [true, false, false],
  ])
);
