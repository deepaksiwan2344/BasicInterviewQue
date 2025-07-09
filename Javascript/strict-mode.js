
//strict-mode
//Using strict mode helps catch and prevent certain types of errors, 
//strict-mode catch common coding mistakes in javascript

'use strict'
function foo(a, a) { // Throws a SyntaxError: Duplicate parameter name not allowed in strict mode
    return a + a;
  }
  
console.log(foo(12, 12))

// function add(){
//     console.log(this)




// }
// console.log(add())



