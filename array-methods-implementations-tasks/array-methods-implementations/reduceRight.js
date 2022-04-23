Array.prototype.myReduceRight = function (callback, initialValue) {
  let acc = initialValue ? initialValue : this[this.length - 1];
  const startIndex = initialValue ? this.length - 1 : this.length - 2;
  for (let index = startIndex; index > -1; index--) {
    acc = callback(acc, this[index], index, this);
  }
  return acc;
};
const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
].myReduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);
const array2 = [1, 2, 3, 4].myReduceRight(
  (prev, current) => prev + current,
  10
);

console.log(array1, array2);
