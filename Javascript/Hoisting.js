//Hoisting
//two type of hositing in javascript
// 1. Variable Hoisting
// 2.function Hoisting

//In Javascript Hoisting is a default behavier of moving all declaration  to the top 
//of its scope
 
//Variable Hoisting
console.log(x); // Output: undefined
var x = 5;


console.log("y", y) //Cannot access 'y'before initialization
let y


//Function Hoisting
sayHello(); // Output: "Hello"
function sayHello() {
  console.log("Hello");
}

sayGoodbye();
var sayGoodbye = function() {
  console.log("Goodbye!"); //show error because function exprestion is not hoisting
};


/************************************Note */
//Arrow functions are not hoisted in JavaScript, so you cannot call an arrow function before 
//it is defined.

// Note: normal function are fully hoisting 

// Arrow functions in JavaScript are not hoisted because they are function expressions,
//  not function declarations.







