// Write a method that takes a string and reverses the letters in place. ↴


const reverseStringInPlace = (arr) => {
	// assign two pointers, work from both sides of array
	let leftIndex = 0
	let rightIndex = arr.length - 1
	while (leftIndex < rightIndex) {
		// capture current value at right index
		const charAtRightIndex = arr[rightIndex]
		//replace 
		arr[rightIndex] = arr[leftIndex]
		arr[leftIndex] = charAtRightIndex
		leftIndex++
		rightIndex--
	}
	return arr
}

console.log(reverseStringInPlace(["h", "e", "l", "l", "o"]))
console.log(reverseStringInPlace(["how", "are", "you", "doing", "?"]))