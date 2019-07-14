const hitungJumlahKata = kalimat => {
  let i = 1;
  for (let j = 0; j < kalimat.length; j++) {
    kalimat[j] === " " ? i++ : undefined;
  }
  return i;
} 

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
