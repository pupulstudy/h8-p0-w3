const balikString = (str) => {
	let foo = '';
	for (let i = 1; i <= str.length; i++) {
		foo += str[str.length-i];
	};
	return foo;
};

console.log(balikString('hello world!'));
