//Higher order function
// array and filer does not modifies the original array

//map, filter and find are example of Higher Order Function
//higher order function is a function that pass an argument as function in javascript map and filter is example of higher order function

let array = [23,45,67,8];

let double = array.map(function(number){
    return number * number
})
console.log(double)

let arr = [23,4,56,7,8];

function even (x){
    return x % 2 === 0

}

let evenNumber = arr.filter(even)
console.log(evenNumber)

