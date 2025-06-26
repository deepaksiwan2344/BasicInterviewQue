//settimeout is a function to execute after a some time

//example
// setTimeout(function(){
//     console.log("hi deepak kumar")
// }, 3000); //this code is executed after 3 second

// setTimeout(function(){
//     console.log("hello")
// },1000); //this code is executed after a one second


// var setTime = setTimeout(function () {
//     console.log("hello")
// }, 3000);

// clearTimeout(setTime);

// setTimeout(function(){
//     console.log("hello deepak")
// }, 2000);

// setTimeout(() => {
//     console.log("sjfhsj")
// }, 2000)

// setTimeout(()=>{
//     console.log("hello deepak")
// }, 0)
// console.log("noida")
//this output is
//Because setTimeout  asynchronous nature of setTimeout() function in JavaScript.
// Noida
// hello deeapk

// function y(){
//     setImmediate(()=>{
//         console.log("setimmediate")
//     }, 0)


// }
// y()
// function x(){
//     setTimeout(()=>{
//         console.log("settimeout")
//     }, 0)

// }
// x()



// In summary, setImmediate is used to queue a function to execute immediately after the current event
// loop completes, whereas setTimeout schedules a function to execute after a specified amount of time has
//  elapsed.

// console.log("first")
// setImmediate(()=>{
//     console.log("third")
// }, 1000)
// console.log("second")



setTimeout(()=>{
  console.log("Hello deepak")
},0)

process.nextTick(() => {
  console.log("process.nextTick");
});

