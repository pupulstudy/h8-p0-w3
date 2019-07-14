const manualPush = (arr, ...rest) => {
  for (var i = 0; i < rest.length; i++) {
    arr[arr.length] = rest[i];
  }
  return arr;
}

const mengelompokkanAngka = (arr) => {
  let arrResult = [[], [], []];
  let j = 0;
  while (j < arr.length ) {
    arr[j] % 3 === 0
      ? manualPush(arrResult[2],arr[j])
        : arr[j] % 2 === 0
      ? manualPush(arrResult[0],arr[j])
        : manualPush(arrResult[1],arr[j]);
    j++
  }
  return arrResult;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])) // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])) // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])) // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])) // [ [], [], [] ]
