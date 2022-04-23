Array.prototype.myUnshift = function (element) {
  this.splice(0, 0, element);
  return this.length;
};
const array = [1, 2, 3, 4];
array.myUnshift("hi");
array.myUnshift("hi");
array.myUnshift("hi");
console.log(array);
