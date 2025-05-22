//String, Number and boolean

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Ayush';
//     let age = 21;
//   }


//   sayHi();
// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age);
//   }

//   getAge();

// let x = 0;
// console.log(++x)
// console.log(x)

// function sum(a, b) {
//     return a + b;
//   }

// console.log(sum(1, '2')); //output 12

// String.prototype.giveAyushPizza = () => {
//     return 'Just give Ayush pizza already!';
//   };

//   const name = 'Ayush';
//  console.log( name.giveAyushPizza());

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue; //skip 3
//   console.log(i);
// }

// function sayHi() {
//     return (() => 0)();
//   }
//   console.log(typeof sayHi());

//   let string = "deepak"
//   console.log([...string])

// var a = 10;
// var b = a;
// b = 20;

// console.log(a);
// console.log(b);

// var a = 'Ayush';
// var b = a;
// b = 'Verma';

// console.log(a);
// console.log(b);

// let lang = 'javascript';
// (function(){
//    let lang = 'java';
// })();

// console.log(lang);

// (function(){
//    var lang2 = 'java';
// })();

// console.log(lang2);

// (function(){
//     console.log(typeof this);
//  }).call(10);

// let c = { greeting: 'Hey!' };
// let d;
// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// function getAge(...args) {
//     console.log(typeof  args);
//   }

//   getAge(21);

// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);

// var x
// x = 10;
// console.log(x)

// const person = {
//     name: 'Ayush',
//     age: 21,
//   };
//   let x= [12,34,56]

//   for (let item of x) {
//     console.log(item);
//   }

// let x = [1, 2, 3];
// x.map((num) => {
//   if (typeof num === "number") {
//     console.log(num * 2);
//     return num * 2;
//   }
// });

//console.log([0,12,34]);
// console.log([1] + []);
// console.log([1] + "abc");           (3)
// console.log([1, 2, 3] + [1, 3, 4]); (4)

// for (var i = 2; i < 17; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// let a = 10,
//   b = 20;
// setTimeout(function () {
//   console.log("Ayush");
//   a++;
//   b++;
//   console.log(a + b);
// });
// console.log(a + b);

// let array = [12,34,4,56,78,9,5];
// function findmin(){
//   let min = array[0]
//   for (let i = 0; i < array.length; i++){
//     // console.log(array[i])
//     // console.log("min", min)
//     if(array[i] < min){
//       min = array[i]
//     }
//   }
//   return min;
// }
// const output = findmin(array);
// console.log("output", output)

// function toPounds(kilos) {
//   if (isNaN(kilos)) {
//     return "Not a Number! Cannot be a weight.";
//   }
//   return kilos * 2.2;
// }
// console.log(toPounds("this is a test"));
// console.log(toPounds("100"));

// console.log(18/0);
// console.log(typeof NaN)
// let str = "deepak";
// console.log(...str)

// function createCounter() {
//   let counter = 0;
//   function increment() {
//     counter++;
//     console.log(counter);
//   }
//   return increment;
// }

// const add = createCounter();
// add(); // prints out 1
// add(); // prints out 2
// add(); // prints out 3
// add();
// add();
// add();

//Higher Order functoin
// function runThis(inputFunction) {
//   inputFunction();
// }

// runThis(function() { console.log("Hello world") });

//Higher Order Function
// function Higher(addition){
//   return addition()

// }
// Higher(function(){
//   console.log(23 + 23)
// })

//Callback fucntion example
// function greetName(name) {
//   console.log('Hello ' + name);
// }
// function askName(callback) {
//   let name = "deepak";
//   callback(name);
// }
// askName(greetName);

// var num = 4;
// var num = 10
// console.log(num)

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'Ayush';
//   let age = 21;
// }

// sayHi();

// function getAge() {
//   // 'use strict';
//   age = 21;
//   console.log(age);
// }

// getAge();

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, '2'))

// String.prototype.giveAyushPizza = () => {
//   return 'Just give Ayush pizza already!';
// };

// const name = 'Ayush';

// name.giveAyushPizza();

// let x = 10;

// console.log(typeof typeof x);

// let lang = 'javascript';
// (function(){
//    let lang = 'java';
// })();

// console.log(lang);

// (function(){
//    var lang2 = 'java';
// })();

// console.log(lang2);

// console.log(false == '0');// output true
// console.log(true == '1'); //output true
// console.log(10 == 5+5); // output true
// console.log('1' == '01') //output false

// (function(){
//   console.log(typeof this);
// }).call(10);

// const obj ={
//   name: "deepak",
//   name: "praveen",
//   lastname: "kumar"
// }
// console.log(obj)

// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log('You are an adult!');
//   } else if (data == { age: 18 }) {
//     console.log('You are still an adult.');
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }
// checkAge({ age: 18 });

// const numbers = [1, 2, 3];
// numbers[2] = 40;
// console.log(numbers);

// [1, 2, 3].map(num => {

//   if (typeof num === 'number') return;
//   console.log(num)
//   return num * 2;
// });

// console.log({name: "deepak"} === {name: "deepak"}) //output false
// console.log( typeof{name: "deepak"} ) //object

// const arrTest = [10, 20, 30, 40, 50][1, 3];
// console.log(arrTest);

// const promise = new Promise(res => res(2));
// promise.then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .finally(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//     });

// console.log("hello")
// console.log(Promise.resolve("hello deepak kumar"))
// console.log("test")

//Important
// console.log("Start");
// const fn = ()=>
// new Promise((resolve, reject)=>{
//     console.log(1);
//     resolve(2);
//     console.log(3)
// })
// fn().then((res)=>{
//     console.log(res);

// });
// console.log("end")

// function doSomething(callback) {
//     console.log("Doing something...");
//     callback();
//   }


//   function callbackFunction() {
//     console.log("Callback function called.");
//   }

//   doSomething(callbackFunction);

// function add (callback){
//   console.log("hello")
//   callback();

// }

// function add2 (){
//   console.log("hello deepak kumar");
// }

// add(add2)


function Output(){
    for(var i = 0; i<3; i++){
        setTimeout(()=>console.log(i),2000)
    }
}
Output(); 




