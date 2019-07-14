const manualSort = arr => {
  let foo;
  let i = 0;
  while (i < arr.length) {
    let j = 0;
    while (j < arr.length) {
      if (arr[i] < arr[j]) {
        foo = arr[i];
        arr[i] = arr[j];
        arr[j] = foo;
      }
      j++;
    }
    i++;
  }
  return arr;
}

const manualPush = (arr, ...rest) => {
  for (let i = 0; i < rest.length; i++) {
    arr[arr.length] = rest[i];
  }
  return arr;
}

const groupAnimals = (animals) => {
  manualSort(animals)
  let arr = [];
  let i = 1;
  manualPush(arr, [animals[0]]);
  while (i < animals.length) {     
    arr[arr.length-1][0][0] !== animals[i][0]
    ? manualPush(arr, [animals[i]])
    : manualPush(arr[arr.length-1],animals[i]);
    i++;
  }
  return arr;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
