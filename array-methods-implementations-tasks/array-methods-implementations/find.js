Array.prototype.myFind = function (callback, thisArg) {
  for (let index = 0; index < this.length; index++) {
    if (callback.call(thisArg, this[index], index, this)) {
      return this[index];
    }
  }
};
const array = [4, 3, 2, 1];
const answer = array.myFind((el) => el > 4);
console.log(answer);
