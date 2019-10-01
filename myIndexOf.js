//Create a function myIndexOf that replicates javascript's indexOf() function

Array.prototype.myIndexOf = function(num){
	for (let i = 0; i < this.length; i++){
		if (this[i] == num){
			return i
		}
	}
}

const arr = [1, 2, 3]
const arr2 = [0, 8 , 7, 8, 20, 60, 78, 5]

console.log(arr.indexOf(2))
console.log(arr.myIndexOf(2))

console.log(arr2.indexOf(78))
console.log(arr2.myIndexOf(78))



