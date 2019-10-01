
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

function areThereDuplicates(...args) {
	// console.log(args)
    let counter = {}
    //keep track of characters in counter
    for (let i = 0; i < args.length; i++) {
        let char = args[i]
        //if it already exists in the counter, return true
        //otherwise, set the counter at character to true 
         if (counter[char]) {
         	return true
         } else {
         	counter[char] = true
         }
    }
    return false
}

//OR

// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

//OR

// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

//OR

// function areThereDuplicates() {
	//each value in set MUST be unique
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(10, 45, 67, 45))
console.log(areThereDuplicates('f', 'g', 'f', 'd'))
console.log(areThereDuplicates('f', 'g', 'd'))