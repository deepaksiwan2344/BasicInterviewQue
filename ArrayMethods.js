const arr = ['deepak', 'praveen', 'dewansh'];
const arr1 = ['diwansh']

//concat method join two aray
console.log(arr.concat(arr1));
console.log(arr.join())//output deepak,praveen,dewansh

//slice(startIndex, endIndex)
console.log(arr.slice(1, 3))
//shift(): This method removes the first element from an array and returns it.
console.log("shift",arr.shift());

//unshift(element): This method adds a new element to the beginning of an array
console.log("unshieft",arr.unshift('pradeep'))
//splice(startIndex, deleteCount, newElements)




