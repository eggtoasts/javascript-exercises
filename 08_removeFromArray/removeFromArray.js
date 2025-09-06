const removeFromArray = function (arr, ...itemsToDelete) {
  //Takes an array and deletes numbers
  let newArr = [];
  for (item of itemsToDelete) {
    arr = arr.filter((a) => a !== item);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
