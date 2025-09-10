const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, x) => (total += x), 0);
};

const multiply = function (arr) {
  return arr.reduce((total, x) => (total *= x));
};

const power = function (a, b) {
  let ans = 1;
  for (let i = 0; i < b; i++) {
    ans *= a;
    console.log(ans);
  }
  return ans;
};

const factorial = function (x) {
  let ans = 1;
  for (let i = 1; i <= x; i++) {
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
