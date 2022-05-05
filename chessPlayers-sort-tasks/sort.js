function sortArray(arr) {
  const copyArr = [...arr];
  const newArr = [];

  arr.forEach(() => {
    const min = Math.min(...copyArr);
    newArr.push(min);
    copyArr.splice(copyArr.indexOf(min), 1);
  });
  return newArr;
}
console.log(sortArray([0, 0, 4, 50, 3, 7, 8, 8, 10]));
