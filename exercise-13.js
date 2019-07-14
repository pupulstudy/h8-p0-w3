const targetTerdekat = arr => {
  let targetX = [];
  let targetO;
  let xIndex = 0;
  let o = 0;
  let x = 0;
  let i = 0;
  let targetResult = 0;

  while ( o < arr.length ) {
    arr[o] === "o"
      ? targetO = o
      : undefined;
    o++;
  }

  while (x < arr.length) {
    if (arr[x] === "x") {
      targetX[xIndex] = x;
      xIndex++;
    }
    x++
  }

  if (targetX.length !== 0) {
    while (i < targetX.length) {
      targetResult = Math.abs(targetX[0] - targetO);
      targetResult > Math.abs(targetX[i] - targetO)
        ? targetResult = Math.abs(targetX[i] - targetO)
        : undefined;
      i++
    }
  }
  return targetResult;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
