// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

// const message = [ 'c', 'a', 'k', 'e', ' ',
//                 	 'p', 'o', 'u', 'n', 'd', ' ',
//                 	 's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

// console.log(message.join(''));
// Prints: 'steal pound cake'

const reverseWords = (msg) => {
	const wordArray = msg.join("").split(" ")
	const reverseWordArray = []
	for (let i = wordArray.length - 1; i >= 0; i--) {
		  reverseWordArray.push(wordArray[i])
	}
	return reverseWordArray.join(" ").split("")
}

const message = [ 'c', 'a', 'k', 'e', ' ',
                	 'p', 'o', 'u', 'n', 'd', ' ',
                	 's', 't', 'e', 'a', 'l' ];

console.log(reverseWords(message))

console.log(message.join(''))