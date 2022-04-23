Array.prototype.myEvery = function (callback) {
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      return true;
    } else {
      return false;
    }
  }
};
const array = [20, 30, 40, 11];
const answer = array.myEvery((el) => el < 20);
console.log(answer);
