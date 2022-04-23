Array.prototype.myFindIndex = function (callback) {
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      return index;
    }
  }
  return -1;
};
const array = [4, 8, 20, 30];
const answer = array.myFindIndex((el) => el > 20);
console.log(answer);
