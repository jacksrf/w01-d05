// write a loop that prints every other character in a string

var word = process.argv[2];
var i = 0;
var newString = '';

while (i < word.length) {
	var letterPrint = word.charAt(i);
	console.log(letterPrint);
	i++;
	var letterRemove = word.charAt(i)
	newString += (word[i])
	i++;
}

console.log("");

for (i = 0; i < newString.length; i++) {
	console.log(newString.charAt(i));
}



// for (i = 0; i < word.length; i = i + 2) {
// 		console.log(word[i]);
// 	}	
