//Create a function myIndexOf that replicates javascript's filter() function

Array.prototype.myFilter = function(cb) {
	const arr = []
	for (let i = 0; i < this.length; i++) {
		let el = this[i]
		if (!!cb(el)) {
			arr.push(el)
		}
	}
	return arr
}


const arr = [1, 2, 3, 4]
const arr2 = ['hello', 'how', 'are', 'you']

console.log(arr.filter(el => el % 2 === 0))
console.log(arr.myFilter(el => el % 2 === 0))

console.log(arr2.filter(word => word.in))
console.log(arr2.myFilter(word => ))