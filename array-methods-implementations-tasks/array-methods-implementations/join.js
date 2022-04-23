Array.prototype.myJoin = function (separator) {
  if (separator == "") separator = "";
  if (separator == undefined) separator = ",";
  let concat = "";
  for (let index = 0; index < this.length; index++) {
    concat += this[index] + separator;
  }
  return concat;
};
const elements = ["Fire", "Air", "Water"];

console.log(elements.myJoin());
console.log(elements.myJoin(""));
console.log(elements.myJoin(" "));
console.log(typeof elements.myJoin());
