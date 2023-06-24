// slice() is used to create a new array containing a portion of the original array.
// The original array is not modified.
// Syntax: array.slice(startIndex, endIndex)


// splice() is used to modify the original array by removing or adding elements.
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ... itemX)



//Slice Method
//  const number = [2,4,7,9,12]
 
//  let silce = number.slice(1,4) //Otput [4,7]
 
//   console.log(silce)


//Splice Method
const numbers = [1, 2, 3, 4, 5];

const removed = numbers.splice(2, 2, 6, 7) //Otput [3,4]
console.log(removed)

// const originalArray = [1, 2, 3, 4, 5];
// originalArray.splice(1, 2, 6, 7); // removes 2 elements starting from index 1 and inserts 6 and 7
// console.log(originalArray); // Output: [1, 6, 7, 4, 5]


// let y = [1,23,45,67,45,67,8];
// console.log(y.slice(1,5))

// console.log(global)




