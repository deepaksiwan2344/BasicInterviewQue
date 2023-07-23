//Slice
//Syntax: array.slice(start, end)



const fruits = ['apple', 'banana', 'orange', 'mango', 'grapes'];
let fruitss = fruits;
console.log("fruitss", fruitss)
// extract a section of the array from index 1 to index 3 (excluding index 3)
const selectedFruits = fruits.slice(3, 5);
console.log(selectedFruits)



//Splice
//Syntax: array.splice(start, deleteCount, item1, item2, ...)

const numbers = [10, 20, 30, 40, 50];
// remove 2 elements starting from index 2 and add 60 and 70
const removedNumbers = numbers.splice(2, 2, 60, 70, 38,38,20);
console.log("numbers", numbers); // output: [10, 20, 60, 70, 50]
console.log("removedNumbers", removedNumbers); // output: [30, 40]

//slice() is used to create a new array with a portion of an existing array,
//splice() is used to add or remove elements from an array, and modifies the original array.


const fruit = ['apple', 'banana', 'mango'];
let fruit1 = fruit
console.log("fruit1", fruit1)

// insert 'orange' at index 2
fruit.splice(2, 1, 'orange', 'Mango');
console.log("fruits", fruit); // ['apple', 'banana', 'orange', 'mango']



