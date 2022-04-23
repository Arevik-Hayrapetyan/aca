//1.Rotate any matrix
const matrix = [
  [1, 2, 3],
  [4, 5, []],
  [7, 8, 9],
  [null, 11, 12],
  [13, 14, NaN],
];

const rotate90Degree = (matrix) => {
  const result = [];
  const length = matrix.length;
  let count;
  let check;

  if (matrix.length !== matrix[0].length && matrix.length > matrix[0].length) {
    count = matrix.length - matrix[0].length;
    check = "case1";

    matrix.forEach((row, rowIndex) => {
      for (let i = 0; i < count; i++) row.push(null);
    });
  }

  if (matrix.length !== matrix[0].length && matrix.length < matrix[0].length) {
    count = matrix[0].length - matrix.length;
    check = "case2";
    const getNull = () => null;
    let pushedArr = Array.from({ length: matrix[0].length }, getNull);
    for (let i = 0; i < count; i++) {
      matrix.push(pushedArr);
    }
  }

  matrix.forEach((row, rowIndex) => {
    const temp = [];
    // debugger;
    row.forEach((column, columnIndex) => {
      temp.push(matrix[matrix.length - columnIndex - 1][rowIndex]);
    });
    result.push(temp);
  });

  if (check == "case1") result.splice(result.length - count);
  if (check == "case2") {
    result.forEach((row, rowIndex) => {
      row.splice(0, count);
    });
  }

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
