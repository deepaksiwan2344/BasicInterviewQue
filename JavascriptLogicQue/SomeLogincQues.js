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
console.log(copy())  output my name is Deepak;

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

/*
let arr = [23,45,6,78,9, 9];
//output like [23,45,6,78,9]
console.log(result(arr))
function result (arr){
    let obj = {};
    let unique = [];
    for(let value of arr){
        if(!obj.hasOwnProperty(value)){
            obj[value] = true;
            unique.push(value)
        }
        //     or
        //      if(!obj[value]){
        //     obj[value] = true;
        //     unique.push(value)
        // }

    }
    return unique
}

*/

/*
let arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "c" },
];

function getFirstDuplicates(arr) {
  let count = {};
  let first = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let id = arr[i].id;
    if (count[id]) {
      count[id]++;
    } else {
      count[id] = 1;
      first[id] = arr[i]; 
    }
  }
  for (let id in count) {
    if (count[id] > 1) {
      result.push(first[id]);
    }
  }

  return result;
}

console.log(getFirstDuplicates(arr)); // [{ id: 1, name: "A" }]

*/

/*
let arr = [
  { id: 1, name: "X" },
  { id: 2, name: "Y" },
  { id: 3, name: "X" },
  { id: 4, name: "Z" }
];

// Expected output:
// [
//   { id: 1, name: "X" },
//   { id: 3, name: "X" }
// ]
console.log(result(arr))

function result (arr){
    let obj = {};
    let finalOutput = []
    for(let item of arr){
        if(obj[item?.name]){
            obj[item?.name]++
        }else{
            obj[item?.name] = 1
        }
    }

    for(let value of arr){
        if(obj[value?.name] > 1){
            finalOutput.push(value)
        }
    }
    return finalOutput
}

*/

/*
let arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
];

// Expected output:
// [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ]
console.log(result(arr))

function result(arr){
    let obj = {};
    let output = []
    for(let i= 0; i < arr?.length; i++){
        let name = arr[i]?.name;
        if(!obj[name]){
           obj[name] = true;
           output.push(arr[i])
        } 
    }
    
    return output
}

*/

/*
let arr = [
  { id: 1, name: "A", details: { city: "Delhi" } },
  { id: 2, name: "B", details: { city: "Mumbai" } },
  { id: 3, name: "A", details: { city: "Delhi" } } // duplicate of id 1 by value
];

// Remove duplicates based on deep equality.
// Expected Output:
[
  { id: 1, name: "A", details: { city: "Delhi" } },
  { id: 2, name: "B", details: { city: "Mumbai" } }
]

console.log(result(arr))
function result (arr){
    let obj = {};
    let output = []
    for(let i = 0; i < arr?.length; i++){
        let city = arr[i]?.details?.city;
        if(obj[city]){
            obj[city]++
            
        }else{
            obj[city] = 1
            output.push(arr[i])
        }
    }
   
    return output
    
}
*/

/*
let users = [
  { id: 1, name: "Alice", department: { name: "HR" } },
  { id: 2, name: "Bob", department: { name: "IT" } },
  { id: 3, name: "Charlie", department: { name: "HR" } },
  { id: 4, name: "David", department: { name: "Finance" } },
  { id: 5, name: "Eve", department: { name: "IT" } }
];

//expected output
// {
//   HR: 2,
//   IT: 2,
//   Finance: 1
// }

console.log(result(users))
function result (users){
    let obj = {};
    for(let value of users){
        let name = value?.department?.name;
        if(obj[name]){
            obj[name]++
        }else{
            obj[name] = 1
        }
    }
    return obj
}

*/

/*

let arr1 = [
  { id: 1, name: "Alice", details: { age: 25 } },
  { id: 2, name: "Bob", details: { age: 30 } }
];

let arr2 = [
  { id: 2, location: "NY", details: { city: "New York" } },
  { id: 3, name: "Charlie", location: "LA" }
];

let finalArr = [...arr1, ...arr2]
console.log(result(finalArr))
function result (arr){
    let obj = {};
     let output = []
    for(let value of arr){
        let id = value?.id;
        if(obj[id]){
            obj[id]++
        }else{
            obj[id] = 1
            output.push(value)
        }
    }
    return output
}

*/

/*
let words = ["eat", "tea", "tan", "ate", "nat", "bat"];

// expected output
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

console.log(result(words))
function result (arr){
    let obj = {};
    for(let value of arr){
        let sorted = value.split("").sort().join("");
         if(obj[sorted]){
             obj[sorted].push(value)
         }else{
             obj[sorted] = [value]
         }
    }
    return Object.values(obj)
}

*/

/*
let str = "aabccdd";

// expected output
// "c"
// Because 'a', 'b', and 'd' all repeat, but 'c' occurs only once and comes first.

console.log(result(str))

function result (str){
    let obj ={};
   
    for(let value of str){
        if(obj[value]){
            obj[value]++
        }else{
            obj[value] = 1
            
           
        }
    }

    for(let count of str){
        if(obj[count] === 1){
            return count
        }
    }
}

*/

/*
function result(arr, target) {
  arr.sort((a, b) => a - b); // sort the array
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

console.log(result([12, 45, 67, 8, 2], 10)); // [2, 8]

*/


/*
let str = "hello world";
let result = "";
let word = "";

//output olleh dlrow 
for(let i = 0; i <= str?.length; i++){
    if(str[i] === " " || i === str?.length){
        let reveseWord = " ";
       for(let j = word?.length - 1; j >= 0; j--){
            reveseWord += word[j]
       }
       result += reveseWord;
       if(i !== str?.length){
           result += ""
       }
       word = " "
       
    
    }else{
        word += str[i]
    }
    
}

console.log(result); // Output: "olleh dlrow"
*/

/*
let obj = {
  name: "deepak",
  age: null,
  city: "",
  job: "dev"
};
// Output: { name: "deepak", job: "dev" }



let output = {};
for(let key in obj){
    if(obj[key] !== null && obj[key] !== ""){
        output[key] = obj[key]
    }
}
console.log(output);
*/

/*

   
let str = "aaaccdddde";

//output like a3c2d4e1;

let newStr = "";
let count = 1;
for(let i= 0; i < str?.length; i++){
    if(str[i] === str[i + 1]){
        count++
    }else{
        newStr += str[i] + count
        count = 1
    }
    
}
console.log(newStr)
*/

/*
let arr = [
  { id: 3, name: "C" },
  { id: 1, name: "A" },
  { id: 6, name: "A" },
  { id: 2, name: "B" }
];
// Output: Sorted by id
console.log(sort(arr))
function sort (arr){
    for(let i = 0; i <= arr?.length; i++){
        for(let j = 0; j <= arr.length - i - 1; j++){
            if(arr[j]?.id > arr[j + 1]?.id){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                
            }
        }
    }
    return arr
}

*/
/*
let str = "listen";
let str1 = "silent";
console.log(anagram(str, str1))
function anagram (str, str1){
    if(str?.length !== str1?.length) false;
    let obj = {};
    for(let i = 0; i <= str?.length; i++){
        if(obj[str[i]]){
            obj[str[i]]++
        }else{
            obj[str[i]] = 1
        }
    }
    for(let value of str1){
        if(!obj[value]){
            return false
        }else{
            obj[value]--
        }
    }
    return true;
}
*/














