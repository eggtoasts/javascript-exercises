const reverseString = function (string) {
  let ans = "";
  for (let i = string.length - 1; i >= 0; i--) {
    ans += string.at(i);
  }
  console.log(ans);
  return ans;
};

// Do not edit below this line
module.exports = reverseString;
