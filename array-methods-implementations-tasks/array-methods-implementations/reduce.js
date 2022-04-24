Array.prototype.myReduce = function (callback, initialValue) {
  let acc;
  let startIndex;
  if (initialValue === undefined) {
    acc = array[0];
    startIndex = 1;
  } else {
    startIndex = 0;
    acc = initialValue;
  }
  for (let index = startIndex; index < this.length; index++) {
    acc = callback(acc, this[index], index, this);
  }
  return acc;
};
const array = [1, 2, 3, 4, 20];
const answer = array.myReduce((prev, current) => prev + current);
console.log(answer);
