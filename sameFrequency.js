
//frequency counter: if two numbers have the same friequencyof numbers

//sameFrequency(182, 281) -> true
// sameFrequency(456, 789) -> false
// sameFrequency(1234, 123) -> false
function sameFrequency(first, second){
    //convert to array
    //compare array length
    let arr1 = first.toString().split("")
    let arr2 = second.toString().split("")
    if(arr1.length !== arr2.length){
        return false;
    }
    //iterate through array 
    for (let i = 0; i < arr1.length; i++){
        let num = arr1[i]
    //check if number is in arr2
        if(!(arr2.includes(num))){
            return false;
    //if num is in arr2, remove num and continue
        } else {
           let numToRemove = arr2.indexOf(num)
           arr2.splice(numToRemove, 1)
        }
        
    }
    return true
}

//OR

// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;
  
//   let countNum1 = {};
//   let countNum2 = {};
  
//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }
  
//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }
  
//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }
 
//   return true;
// }
