// In JavaScript, a callback function is a function that is passed as an argument to 
// another function and is intended to be called or executed later, usually after some 
// asynchronous operation or event has completed.




// function greeting(name, callback) {
//   console.log("Hello, " + name + "!");
//   callback();
// }



// function sayGoodbye() {
//   console.log("Goodbye!");
// }


// greeting("John", sayGoodbye);
// function greeting(callback){
//   console.log("hello")
//   callback()
// }
// function sayGoodbye(){
//   console.log("good")
// }
// greeting(sayGoodbye)


function add(callback){
  console.log("hello deepak");
  callback()
}

function add1(){
  console.log("hi")
}
add(add1)




