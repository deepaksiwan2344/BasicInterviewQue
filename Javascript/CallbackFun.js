/*
Callback function:
A function that is passed as an argument to another function and is executed later.

Example:
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
function sayBye() {
  console.log("Bye!");
}
greet("Deepak", sayBye);
Another example of callback Function
setTimeout(callback, 4000)
function callback(){
    console.log("hello deepak kumar")
}
*/