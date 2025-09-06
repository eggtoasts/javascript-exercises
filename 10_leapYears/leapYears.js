const leapYears = function (year) {
  let divBy4 = year % 4 == 0;
  let divBy100 = year % 100 == 0;
  let divBy400 = year % 400 == 0;

  if (divBy4 == 1 && (divBy100 == 0 || (divBy100 == 1 && divBy400 == 1))) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
