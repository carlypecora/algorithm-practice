//given an array of integers, return indices of the two numbers such that they add upto a specific target

//given nums = [2, 7, 11, 15],target = 9
//return [0, 1]

const twoSums = (array, target) => {
	let sortedArray = array.sort((a,b) => a - b)
	console.log(sortedArray)
	let left = 0
	let right = sortedArray.length - 1
	for (let i = 0; i < sortedArray.length; i++){
		let sum = sortedArray[left] + sortedArray[right]
		if (sum === target) {
			return [left, right]
		} else if (sum > target) {
			right --
		} else if (sum < target) {
			left ++
		}
	}
}

const array = [8, 5, 3, 9] 
const target = 12

const array2 = [12, 4, 7, 1, 0, 50]
const target2 = 16

console.log(twoSums(array, target))
console.log(twoSums(array2, target2))