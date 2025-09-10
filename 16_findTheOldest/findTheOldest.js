const findTheOldest = function (arr) {
  arr.sort(
    (bruh = function (a, b) {
      let c, d, e, f;
      c = a.yearOfDeath;
      e = b.yearOfDeath;
      (d = a.yearOfBirth), (f = b.yearOfBirth);
      if (c === undefined) c = 2025;
      if (e === undefined) e = 2025;
      console.log(c - d - (e - f));
      console.log(e - f);

      return c - d - (e - f);
    })
  );

  console.log(arr);

  return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
