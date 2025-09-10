const fibonacci = function (x) {
  //heh.. dp time... heh

  if (x < 0) return "OOPS";

  let dp = [0, 1];
  for (let i = 2; i <= x; i++) {
    let x = dp[i - 2] + dp[i - 1];
    dp.push(x);
  }

  return dp[x];
};

// Do not edit below this line
module.exports = fibonacci;
