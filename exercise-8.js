const pasanganTerbesar = (number) =>{
  let str = String(number);
  let tempNum = 0;
  let result = 0;
  let tempStr = '';
  let i = 0;
  while ( i < str.length - 1 ) {
    tempStr = str[i] + str[i + 1];
    tempNum = Number(tempStr);
    tempNum > result
      ? result = tempNum 
      : result;
    i++;
  }
  return result;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
