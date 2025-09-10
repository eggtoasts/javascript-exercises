const palindromes = function (str) {
  let arr = str
    .toLowerCase()
    .split("")
    .filter(
      (a) =>
        (a.toLowerCase() >= "a" && a.toLowerCase() <= "z") ||
        (a <= "9" && a >= "0")
    );

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
