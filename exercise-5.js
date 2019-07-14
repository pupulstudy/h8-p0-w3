const palindrome = kata => {
	let i = 0;
	let j = kata.length;

	while (j-1 > i) {
		if ( kata[i].toLowerCase() !== kata[j-1].toLowerCase() ) {
			return false;
		}
		i++;
		j--;
	}
	return true
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
