Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue ? initialValue : this[0];
  const startIndex = initialValue ? 0 : 1;
  for (let index = startIndex; index < this.length; index++) {
    acc = callback(acc, this[index], index, this);
  }
  return acc;
};
const array = [1, 2, 3, 4, 20];
const answer = array.myReduce((prev, current) => prev + current, 10);
console.log(answer);
