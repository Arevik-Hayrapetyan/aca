Array.prototype.mySome = function (callback) {
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      return true;
    }
  }
  return false;
};
const array = [28, 30, 25, 6];
const answer = array.mySome((el) => el > 50);
console.log(answer);
