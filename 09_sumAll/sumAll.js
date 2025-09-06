const sumAll = function (a, b) {
  if (Number.isInteger(a) == false || Number.isInteger(b) == false)
    return "ERROR";
  let tot = 0;

  if (b < a) {
    let temp = a;
    a = b;
    b = temp;
  }

  if (a < 0) return "ERROR";

  for (let i = a; i <= b; i++) {
    tot += i;
  }

  return tot;
};

// Do not edit below this line
module.exports = sumAll;
