
// A closure is a feature in JavaScript that allows a function to remember the variables
// in its outer lexical scope, even after the outer function has returned.
// This means that the inner function has access to the outer function's variables,
// even if the outer function is no longer in memory.
// Here's an example of a closure in action:



// function outer() {
//     var x = 10;
//     function inner() {
//         console.log(x);
//     }
//     return inner;
// }



// var innerFn = outer();
// innerFn(); // Output: 10

// function outerFunction (){
//     var string = "deepak kumar"
//     function innerFunction(){
//         console.log(string)
//     }
//     return innerFunction
// }

// const result =  outerFunction();
// result();

// const outer1 =()=>{
//     let string = "prakash"
//     function inner(){
//         console.log(string)
//     }
//     return inner
// }

// const result2 = outer1();
//  console.log(result2())




function outerFunction (){
    let x  = 23;
    function innerFunction(){
        console.log("x", x)
    }
    return innerFunction
}
const result = outerFunction();
console.log(result())
//console.log("variable", x)


//Note:
// Closures provide powerful capabilities in JavaScript programming.
//1. Data Encapsulation (Private varaible)
//2. Memoization (Performance Optimization)

/*

let a = 23;
function add (){
    function result (){
        console.log(a)
    }
    return result
    let a = "deepak"
}
let output = add();
console.log(output())

its output show like 
ReferenceError: Cannot access 'a' before initialization
because:
When a variable is declared inside a scope with the same name as an outer variable,
it overrides (or hides) the outer one within that scope.

*/

/*
Note: Closures are one of the most powerful features in JavaScript. 
Closures allow you to create private variables that cannot be accessed 
directly from outside a function.



function secretCounter() {
  let count = 0; // private

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const counter = secretCounter();
counter(); // Count: 1
counter(); // Count: 2


*/


