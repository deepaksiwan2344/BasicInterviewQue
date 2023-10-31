//basic interview question link
//https://testbook.com/interview/javascript-logical-interview-questions

let countouter = 0;
(function immediate() {
  if (countouter === 0) {
    let count = 1;
    console.log("count", count); //output = 1
  }
  console.log("countouter", countouter); // output = 0
})();

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // What is logged?
  }, 1000);
}


function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}



const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

var num = 8;
var num = 10;
console.log(num);

function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Ayush";
  let age = 21;
}
sayHi();

function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}
getAge();

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

//In Javascript 
//there are only 7 built-in types: null, undefined, boolean, number, string, object, and symbol. 

const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);

//Note ************************************************************
function foo1()
{
  return  // This line is automatically terminated with a semicolon
  {
      bar: "hello"
  };
}

console.log(foo1())  //output undefined

function foo1()
{
  return{
      bar: "hello"
  };
}

console.log(foo1()) //output {bar: "Hello"}
// ******************************************************************************
//https://www.toptal.com/javascript/interview-questions
//https://www.fullstack.cafe/blog/javascript-code-interview-questions
console.log(1 < 2 < 3); //output true
console.log(3 > 2 > 1); // false



