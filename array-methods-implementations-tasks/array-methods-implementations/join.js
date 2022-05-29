Array.prototype.myJoin = function (separator) {
  if (separator == undefined) separator = ",";
  let concat = "";
  for (let index = 0; index < this.length; index++) {
    if (index === this.length - 1) return (concat += this[index]);
    concat += this[index] + separator;
  }
  return concat;
};
const elements = [1, 3];

console.log(elements.myJoin());
console.log(elements.myJoin(""));
console.log(elements.myJoin(" "));
console.log(typeof elements.myJoin());
