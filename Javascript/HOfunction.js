//Higher order function
// array and filer does not modifies the original array

//map, filter is a example of Higher Order Function
//higher order function is a function that pass an argument as function in javascript map and filter is example of higher order function

let array = [23,45,67,8];

let double = array.map(function(number){
    return number * number
})
console.log(double)

