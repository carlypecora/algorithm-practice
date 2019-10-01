//create a function that replicates the js map() function

Array.prototype.myMap = function(callback){
	//create a new array to push all elements passed into the callback function
	let arr = []
	for(let i = 0; i < this.length; i++){
		arr.push(callback(this[i]))
	}
	return arr
}

const addS = (str) => {
	return str + "s"
}
const arr = [1, 2, 3, 4, 5]

const arr2 = ["hello", "how", "are", "you"]

console.log(arr.map(el => el * 2))
console.log(arr.myMap(el => el * 2))

console.log(arr2.map(addS))
console.log(arr2.myMap(addS))