// 2. Rotate all matrix elements except the diagonals

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotate90Degree = (matrix) => {
  const result = [];
  const length = matrix.length;

  matrix.forEach((row, rowIndex) => {
    const temp = [];
    row.forEach((column, columnIndex) => {
      if (rowIndex == columnIndex || rowIndex + columnIndex == length - 1) {
        temp.push(matrix[rowIndex][columnIndex]);
      } else {
        temp.push(matrix[length - columnIndex - 1][rowIndex]);
      }
    });
    result.push(temp);
  });

  return result;
};

const calculateRotationNumber = (deg) => {
  if (deg % 90 !== 0) {
    throw new RangeError("Incorrect value");
  }

  // ((deg % 360) + 360) % 360 / 90
  deg = (deg % 360) / 90;
  deg += deg < 0 ? 4 : 0;

  return deg;
};

const a = {};

function t(b) {
  b.i = 12;
}

t(a);

console.log(a);

const rotate = (matrix, deg) => {
  const r = calculateRotationNumber(deg);
  return Array.from({ length: r }).reduce((a, e) => {
    return rotate90Degree(a);
  }, matrix);
};

console.log(rotate(matrix, 90));
