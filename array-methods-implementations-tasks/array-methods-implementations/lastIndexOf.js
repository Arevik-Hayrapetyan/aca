Array.prototype.myLastIndexOf = function (searchElement, fromIndex = 0) {
  // debugger;
  for (let index = this.length - 1; index >= fromIndex; index--) {
    if (this[index] === searchElement) {
      return index;
    }
  }
  return -1;
};
const array = [1, 5, 4, undefined, 7, 8];
const answer = array.myLastIndexOf(undefined, 4);
console.log(answer);
