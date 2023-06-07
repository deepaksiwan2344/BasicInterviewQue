//Hoisting
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
