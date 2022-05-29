Array.prototype.myEvery = function (callback, thisArg) {
  for (let index = 0; index < this.length - 1; index++) {
    if (!callback.call(thisArg, this[index], index, this)) {
      return false;
    }
  }
  return true;
};
const array = [17, 6, 12, 5, 8];
const answer = array.myEvery((el) => el > 5);
console.log(answer);
