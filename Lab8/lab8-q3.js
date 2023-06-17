Array.prototype.sortArray = function () {
  let array = this;
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

console.log([7, 5, 2, 4, 3, 9].sortArray());
