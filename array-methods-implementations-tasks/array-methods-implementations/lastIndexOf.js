Array.prototype.myLastIndexOf = function (searchElement, fromIndex) {
  const start = fromIndex ? fromIndex : 0;

  for (let index = this.length; index > start; index--) {
    if (this[index] === searchElement) {
      return index;
    }
  }
  return -1;
};
const array = [40, 20, 30, 50];
const answer = array.myLastIndexOf(40, 1);
console.log(answer);
