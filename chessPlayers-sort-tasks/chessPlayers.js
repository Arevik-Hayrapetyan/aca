function getAllMatchesCount(playersCount) {
  let acc = 1;
  for (let i = 1; i < playersCount; i++) {
    acc *= playersCount - i;
  }
  return acc;
}

function getPlayers(playersCount, finishedMatches) {
  const matrix = [];
  const allMatchesCount = getAllMatchesCount(playersCount);
  let count = 0;
  let step = playersCount;
  let level = 1;
  for (let i = 0; i < allMatchesCount / 2; i++) {
    for (let j = 1; j < step; j++) {
      debugger;
      let temp = [count, j];
      if (j === step - 1) {
        ++count;
        --step;
      }
      console.log(temp);
    }
    // matrix.push(temp);
  }
  return matrix;
}

console.log(
  getPlayers(4, [
    [0, 1],
    [1, 2],
    [2, 0],
  ])
);
