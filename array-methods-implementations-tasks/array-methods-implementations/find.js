Array.prototype.myFind = function (callback) {
  debugger;
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      return this[index];
    }
  }
  return undefined;
};
let array = [4, 5, 6, 7];
let answer = array.myFind((el) => el > 4);
console.log(answer);
