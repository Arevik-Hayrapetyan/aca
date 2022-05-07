function getAllMatchesCount(playersCount) {
  let acc = 1;
  for (let i = 1; i < playersCount; i++) {
    acc *= playersCount - i;
  }
  return acc;
}
function sortMatrix(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] < matrix[i][1]) {
      newMatrix.push(matrix[i]);
    } else {
      newMatrix.push([matrix[i][1], matrix[i][0]]);
    }
  }
  newMatrix = newMatrix.sort(function (a, b) {
    return a[0] - b[0];
  });

  return newMatrix;
}
function compareMatrixs(matrix, finishedMatches) {
  for (let i = 0; i < finishedMatches.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (
        finishedMatches[i][0] === matrix[j][0] &&
        finishedMatches[i][1] === matrix[j][1]
      ) {
        matrix.splice(j, 1);
      }
    }
  }
  matrix = matrix.sort(function (a, b) {
    return a[1] - b[1];
  });
  return matrix;
}

function getPlayers(playersCount, finishedMatches) {
  finishedMatches = sortMatrix(finishedMatches);
  const matrix = [];
  const allMatchesCount = getAllMatchesCount(playersCount);
  let count = 0;
  let step = playersCount;
  let level = 0;
  for (let i = 0; i < allMatchesCount / 2; i++) {
    for (let j = 1; j < step; j++) {
      let temp = [count, level + j];
      if (j === step - 1) {
        ++count;
        --step;
        ++level;
      }
      matrix.push(temp);
    }
  }
  return compareMatrixs(matrix, finishedMatches);
}
console.log(
  getPlayers(4, [
    [0, 1],
    [1, 2],
    [2, 0],
  ])
);
