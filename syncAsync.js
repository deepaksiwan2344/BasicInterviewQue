//synchronous = happens at the same time.
// console.log("before")
// const result = add(2,6);
// console.log("after");
// function add (a,b)
// {
//  return  a+b
// }
// console.log(add(3,6))

//Asynchronous = does not happens at the same time.
console.log("Before");
setTimeout(() => {
  const result = add(2, 3);
  console.log("Result:", result);
}, 2000);
console.log("After");

function add(a, b) {
  return a + b;
}



// Note that asynchronous code does not always involve a delay.
// Asynchronous operations can include things like AJAX requests, file I/O, and database queries, 
// which can take an unpredictable amount of time to complete.


setTimeout(()=>{
     console.log("Hello deepak")
})