Array.prototype.myPop = function () {
  return this.splice(this.length - 1, 1)[0];
};
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.myPop());
console.log(plants);
plants.myPop();
console.log(plants);
