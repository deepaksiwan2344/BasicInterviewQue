/*

1. Find the Second Largest Number in an Array (without sorting)
2. Check if a String is a Rotation of Another
3. Detect a Loop in an Array Traversal (Tortoise-Hare logic)
4. Count Pairs with Given Sum
5. Check if a Number is a Power of Two (without using loops)
6. Majority Element in Array (> n/2 times)
7. Find First Repeated Character in a String
Input: "abcac"
Output: 'a'


let arr = [23, 45, 6, 7, 78, 34];

 Note: its time complexity is O(n)

console.log(findThirdSmallest(arr))
function findThirdSmallest(arr) {
  let f1 = Infinity;
  let f2 = Infinity;
  let f3 = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num === f1 || num === f2 || num === f3) continue;
    if (num < f1) {
      f3 = f2;
      f2 = f1;
      f1 = num;
    } else if (num < f2) {
      f3 = f2;
      f2 = num;
    } else if (num < f3) {
      f3 = num;
    }
  }
  return f3 === Infinity ? "No 3rd smallest value" : f3;
}

*/


/*
find fourth smallest num in a given array;

let arr = [23, 45, 6, 7, 78, 34];

console.log(findFourthSmallest(arr))
function findThirdSmallest(arr) {
  let f1 = Infinity;
  let f2 = Infinity;
  let f3 = Infinity;
  let f4 = Infinity;
  for(let i = 0; i < arr.length; i++){
      let num = arr[i]
      if(f1 === num && f2 === num && f3 === num && f4 === num) continue
      if(num < f1){
         f4 = f3;
         f3 = f2;
         f2 = f1;
         f1 = num
      }else if (num < f2){
          f4 = f3;
          f3 = f2;
          f2 = num
      }else if (num < f3){
          f4 = f3;
          f3 = num;
      }else if (num < f4){
          f4 = num
      }
  }
  return f4
  
}

*/

/*

"5" + 1      // "51"  → number 1 is coerced to string, then concatenated
"5" - 1      // 4     → string "5" is coerced to number, subtraction happens
true + 1     // 2     → true becomes 1
false + "1"  // "false1" → false becomes string, concatenation happens
null + 1     // 1     → null becomes 0

*/


/*
Question: Reverse a array without in build function;

let arr = [23,4,5,56,78,9];
console.log(reverseArr(arr))
function  reverseArr (arr){
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while(startIndex < endIndex){
        [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]]
        startIndex++;
        endIndex--
    }
    return arr
}
*/

/*
Input Output
let obj = {
    name: "Deepak",
    age: 23,
    details (){
       return `my name is ${this.name}`
    }
}

let copy = obj.details
console.log(copy()) //output show undefined
because we copy the obj.details but we not context of this show output is undefined we can fixed 
using bind method like

let obj = {
    name: "Deepak",
    age: 23,
    details (){
       return `my name is ${this.name}`
    }
}

let copy = obj.details.bind(obj)
console.log(copy())  output my name is Deepak

*/

/*
const employee = {
  name: "Ravi",
  getName: function () {
    return this.name;
  }
};

const manager = {
  name: "Swati"
};

manager.getName = employee.getName;

console.log(manager.getName()); //output Swati
*/

/*
const a = { value: 10 };
const b = a;
const c = { value: 10 };

//same memory
console.log(a === b); // ? true

//different object in memory
console.log(a === c); // ? false
console.log(JSON.stringify(a) === JSON.stringify(c)); // ? true
*/

/*

let obj = {
    name: "deepak"
}

let obj2 = {
    name: "deepak"
}
//In JavaScript, objects are compared by reference, not by value.
console.log(obj === obj2) //false

console.log(JSON.stringify(obj) === JSON.stringify(obj2))// true

*/

/*
console.log(a);  // What is the output here?

var a = 10;

function test() {
    console.log(a);  // What is the output here?
    var a = 20;
    console.log(a);  // And here?
}

test();
console.log(a);  // And finally here?

its output are
undefined
undefined
20
10
*/

/*
console.log(false == '0'); //true    // ?
console.log(false === '0'); //false    // ?
console.log(null == undefined); //true // ?
console.log(null === undefined); //false // ?
console.log([] == false);   //true    // ?
console.log([] === false);  //false  //
console.log([] + 1); // Output 1
*/

/*
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const fn1 = outer();
fn1();
fn1();
fn1();

const fn2 = outer(); create a new closure and new count
fn2();

//Output
1
2
3
1

*/

/*
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

console.log("End");

//Output
Start
End
Promise 1
Timeout 1

*/

/*
let a = { value: 10 };
let b = a;
let c = { value: 10 };

b.value = 20;

console.log(a.value);   // 20 ? 
console.log(c.value);  // 10 ?
console.log(a === b);  // true ?
console.log(a === c);  //  false?
*/

/*
const user = {
  name: "Deepak",
  age: 25
};

const { name, age, city = "Delhi", age: userAge } = user;

console.log(name);     // Deepak ?
console.log(age);      // 25 ?
console.log(city);     // Delhi ?
console.log(userAge);  // 25 ?

*/

/*
const obj1 = {
  name: "Deepak",
  skills: ["JS", "React"]
};

const obj2 = { ...obj1 };

obj2.name = "Ravi";
obj2.skills.push("Node.js");

console.log(obj1.name);     // Deepak ?
console.log(obj2.name);     // Ravi ?
console.log(obj1.skills);   // Js, React Node.js ?
console.log(obj2.skills);   //  Js, React, Node.js?
console.log(obj1 === obj2); // false ?

*/

/*
console.log(false == 0);         // true ?
console.log(false === 0);        // false ?
console.log(null == undefined);  //  true?
console.log(null === undefined); // false ?
console.log("5" == 5);           // true ?
console.log("5" === 5);          // false ?

*/

/*
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter1 = makeCounter();
const counter2 = makeCounter();
counter1(); // 1 ?
counter1(); //  2?
counter2(); //  1?
counter1(); // 3 ?
counter2(); // 2 ?
*/

/*
console.log([12,34,5] + [34,5]) //output 12,34,534,5
console.log(0.1 + 0.2 === 0.3) //output false
JavaScript uses binary floating-point numbers (IEEE 754 standard), which cannot precisely represent 
some decimal values, like 0.1 and 0.2.
console.log([] + true); Output true

*/
/*
let a = [1, 2, 3];
let b = [1, 2, 3];

console.log(a == b);
console.log(a === b);
//they are two different object in memory
*/

/*
"3" - 1 //output 2 because - is a numeric operator only. JavaScript expects both sides to be numbers.
So it tries to convert the string "3" to number:

"3" + 1 //output + is the string concatenation operator if any operand is a string.

*/

/*

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function countPrimesBetween(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

console.log(countPrimesBetween(20, 278));

*/

/*
//Count Prime Number and its value 
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function countPrimesBetween(start, end) {
    let count = 0;
    let primeNum = []
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primeNum.push(i)
            count++;
        }
    }
    return {
        count: count,
        primeNum: primeNum
    };
}

console.log(countPrimesBetween(1, 20));
*/


/*
let str = "how are you";
let result = "";
let capitalizeNext = true

for (let char of str) {
   if(char === " "){
       result += char;
       capitalizeNext = true
   }else{
       if(capitalizeNext){
           result += char.toUpperCase();
           capitalizeNext = false
           
       }else{
           result += char
           
       }
       
   }
}

console.log(result); output: How Are You

*/

