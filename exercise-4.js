const array = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

const manualSpliceArr = (arr, init=0, del=0, ...rest) => {
  let newSplicedArr = []; 
  var i, j, k;

  for (i = 0; i < init; i++) {
    newSplicedArr[i] = arr[i];
  }
  for (j = 0; j < rest.length; j++) {
    newSplicedArr[newSplicedArr.length] = rest[j];
  }
  for (k = i ; k < arr.length - del; k++) {
    newSplicedArr[newSplicedArr.length] = arr[k+del]
  }
  return newSplicedArr;
}

const manualSpliceStr = (str, init=0, del=0, ...rest) => {
  let newSplicedStr = '';
  var i, j, k;

  for (i = 0; i < init; i++) {
    newSplicedStr += str[i];
  }
  for (j = 0; j < rest.length; j++) {
    newSplicedStr += rest[j];
  }
  for (k = i ; k < str.length - del; k++) {
    newSplicedStr += str[k+del]
  }
  return newSplicedStr;
}

const manualSplitStr = (str, delimiter) => {
  let newSplittedStr = '',
      i, j;

  for (i = 0 ; i < str.length ; i++) {
    if ( str[i] === delimiter ) {
      for (j = 0; j < delimiter.length; j++) {
        newSplittedStr[newSplittedStr.length] += delimiter[j];
      }
  } else {
    newSplittedStr += str[i];
  }   
}
return newSplittedStr;
}

const manualSplitArr = (str, delimiter) => {
  let result = [],
      outerCounter = 0,
      outerFoo = "",
      i;

  for (i = 0; i < str.length; i++) {
    let innerFoo = true,
        innerCounter = 0,
        j;

    for (j = i; innerCounter < delimiter.length; j++) {
      if (str[j] !== delimiter[innerCounter]) {
        innerFoo = false;
        break;
      }
      innerCounter++;
    }
    if (innerFoo === false) {
      outerFoo += str[i];
    }
    else {
      result[outerCounter] = outerFoo;
      outerCounter++;
      outerFoo = "";
      i = i + delimiter.length - 1;
    }
    if (i === str.length - 1) {
      result[outerCounter] = outerFoo;
    }
  }
  return result;
}

const manualSlice = (arr, a = 0, b = arr.length) => {
  let foo = 0,
      newArr = [];

  while (a < b) {
    newArr[foo] = arr[a];
    foo++;
    a++;
  }
  return newArr;
}

const manualShift = arr => {
  for (i=1 ; i<arr.length ; i++) {
   newArr[i-1] = arr[i];
 }
 return newArr;
}

const dataHandling1 = _ => manualSpliceArr(array, 1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
const dataHandling2 = _ => manualSpliceArr(dataHandling1(), 4, 1, "Pria", "SMA Internasional Metro");
const splittedDate = _ => manualSplitStr(dataHandling2()[3],'/')
const monthInNumber = _ => splittedDate()[2] + splittedDate()[3]

const monthInGreek = _ => {
  switch (monthInNumber()) {
    case '01': return "Januari"; break;
    case '02': return "Februari"; break;
    case '03': return "Maret"; break;
    case '04': return "April"; break;
    case '05': return "Mei"; break;
    case '06': return "Juni"; break;
    case '07': return "Juli"; break;
    case '08': return "Agustus"; break;
    case '09': return "September"; break;
    case '10': return "Oktober"; break;
    case '11': return "November"; break;
    case '12': return "Desember"; break;
  }
}

const formattedDateGreek = _ => manualSpliceStr((splittedDate()),2,2,' ',(monthInGreek()),' ');
const splittedDateToArr = _ => manualSplitArr((formattedDateArr()), " ");
const splittedDateToArrGreek = _ => manualSplitArr((formattedDateGreek()), " ");
const formattedDateArr = _ => manualSpliceArr(splittedDate(),2,2,' ',(monthInNumber()),' ');
const autoSortDescendingDateStr = _ => splittedDateToArr().sort(function(a,b){ return b - a;});
const autoJoinDateWithHypens = _ => splittedDateToArr().join('-');
const slicedName = _ => manualSlice(dataHandling2()[1],0,14);
const splittedName = _ => manualSplitStr(slicedName(), "");

//Expected Output
console.log(dataHandling2()); //["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
console.log(monthInGreek()); //Mei
console.log(autoSortDescendingDateStr()); //["1989", "21", "05", ]
console.log(autoJoinDateWithHypens()); //21-05-1989
console.log(splittedName()); //21-05-1989 Roman Alamsyah


/* ======== Test Purpose =========
console.log(splittedDate()); //21051989
console.log(formattedDateGreek()); //21 Mei 1989
console.log(splittedDateToArrGreek()); //["21", "Mei", "1989"]
console.log(splittedDateToArr()); //["21", "05", "1989"]
console.log(slicedName()); //["R", "o", "m", "a", "n", " ", "A", "l", "a", "m", "s", "y", "a", "h"]
*/

/* ======== Better Use Auto to Below =========

const manualJoinDateWithHypens = _ => manualSpliceStr((splittedDate()),2,2,'-',(monthInNumber()),'-');
const manualSortDescendingDateStr = _ => manualSort(splittedDateToArr(), "descending");
console.log(manualJoinDateWithHypens()); //21-05-1989
console.log(manualSortDescendingDateStr()); //["1989", "21", "05", ]

const manualSort = (arr, format = ascending) => {
  let foo;
  let i = 0;

  while (i < arr.length) {
    let j = 0;
    while (j < arr.length) {
      if (format.toLowerCase() === "ascending" && arr[i] < arr[j]) {
        foo = arr[i];
        arr[i] = arr[j];
        arr[j] = foo;
      }

      if (format.toLowerCase() === "descending" && arr[i] > arr[j]) {
        foo = arr[i];
        arr[i] = arr[j];
        arr[j] = foo;
      }
      j++;
    }
    i++;
  }
  return arr;
}*/
