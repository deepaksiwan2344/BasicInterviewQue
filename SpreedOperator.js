//rest operator is denoted by ...
//Example
// The rest operator is denoted by ... and is used to capture multiple
// arguments into a single array. Here's an example:

// function sum(...numbers) {
//     let result = 0;
//     numbers.forEach(num => result += num);
//     console.log("sum", result)
//     return result;
// }

// console.log(sum(1, 2, 3, 4)); // Output: 10
// function sum(a, b, c) {
//     return a + b + c;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // Output: 6

//Example of spreed Operator

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// let arr4 = [2,4,5,67]
// console.log("arr4", ...arr4)


//The spread operator in JavaScript, denoted by three consecutive dots ..., is used to expand an iterable
//  (e.g. an array or a string)
//  into individual elements.

// let array =[ [24,56,76,76]];
// console.log(...array)

//Destrucring object
// Destructuring is a feature in JavaScript that allows you to extract properties from an object or elements from an
// array and assign them to variables
// let obj={
//     firstname:"praveen",
//     lastname: "kumar"
// };

// const {firstname} = obj
// console.log("firstname", firstname);

// let arr = [object={
//     name: "depesh"
// }]
// const [name] = arr
// console.log("name", name)

// function sum(...numbers) {
//     let result = 0;
//     numbers.forEach(num => result += num);
//     console.log("sum", result)
//     return result;
// }
// console.log(sum(1, 2, 3, 4)); // Output: 10

// let x = 2633;
// let number = x.toString().split('').map(Number)

// function sumofdigit(...number){
//     let result = 0;
//     number.forEach(num=> result +=num);
//     console.log('sum', result)
//     return result
// }
// sumofdigit(...number)

let x = [12, 3, 4, 5, 56, 56, 56, 78];
function sum(x) {
  let sumsigit = 0;
  x.forEach((item)=>{
    sumsigit += item
  })
  return sumsigit
}
console.log(sum(x))


let obj ={
  firstName: "deepak",
  lastName: "kumar",
  age: "25"
}


let {age} = obj; //Destructuring 
console.log("age", age)


let array3 = [23,45,67];

let obj2 = {
  name:"deepak",
  lastname: "kumar"

}
 let {name} = obj2;
 console.log(name)
console.log("obj2", obj2)






















