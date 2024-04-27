
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

// function outerfunction (){
//     var string = "deepak kumar"
//     function innerfunction(){
//         console.log(string)
//     }
//     return innerfunction
// }

// const result =  outerfunction();
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




function outerfunctoin (){
    let x  = 23;
    function innerfunction(){
        console.log("x", x)
    }
    return innerfunction
}
const result = outerfunctoin();
console.log(result())
//console.log("variable", x)