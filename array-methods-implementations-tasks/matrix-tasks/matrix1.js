//1.Rotate any matrix
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [11, 12, 13],
  [14, 15, 16],
];
//length-length[0].length
const rotate90Degree = (matrix) => {
  const result = [];
  const length = matrix.length;
  const count = matrix.length - matrix[0].length;
  if (matrix.length !== matrix[0].length && matrix.length > matrix[0].length) {
    matrix.forEach((row, rowIndex) => {
      for (let i = 0; i < count; i++) row.push(null);
    });
  }
  matrix.forEach((row, rowIndex) => {
    const temp = [];
    row.forEach((column, columnIndex) => {
      temp.push(matrix[length - columnIndex - 1][rowIndex]);
    });
    result.push(temp);
  });
  result.splice(result.length - count);
  console.log("result", result);
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
