const angkaPalindrome = num => {
    while (true) {
        num++;
        let i = 1;
        let str = String(num);
        let reversedStr = "";
        let result;

        while ( i <= str.length ) {
            reversedStr += str[str.length-i]; 
            i++; 
        }

        if (str === reversedStr) {
            result = Number(str);
            return result;
        }
    }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
