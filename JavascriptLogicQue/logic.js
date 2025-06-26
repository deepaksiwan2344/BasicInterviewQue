// You are given an array of objects representing people's names and their ages.
// Write a function that takes the array as input and returns an object where the keys
// are age groups ("child", "teen", "adult", "senior") and the values are arrays containing
// the names of people in that age group. Assume the age groups are defined as follows:

// "child" for ages 0-12
// "teen" for ages 13-19
// "adult" for ages 20-64
// "senior" for ages 65 and above

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 7 },
  { name: "David", age: 70 },
  { name: "Eve", age: 14 },
  { name: "Frank", age: 40 },
];

function ourResult(people) {
  let obj = {
    child: [],
    teen: [],
    adult: [],
    senior: [],
  };
  people.forEach((item) => {
    if (item.age <= 12) {
      obj.child.push(item.name);
    } else if (item.age >= 13 && item.age <= 19) {
      obj.teen.push(item.name);
    } else if (item.age >= 20 && item.age <= 64) {
      obj.adult.push(item.name);
    } else {
      obj.senior.push(item.name);
    }
  });
  return obj;
}
// console.log(ourResult(people))

/****************************Question2***********************************/
//   You are given an array of objects representing books.
// Each book has a title, author, and category property. Write a function that takes the array of books and a
// category as input and returns an array containing the titles of all the books in that category.
// If there are no books in the given category, return an empty array.

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction" },
  { title: "1984", author: "George Orwell", category: "Science Fiction" },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
  },
  { title: "Pride and Prejudice", author: "Jane Austen", category: "Classic" },
];

// function getByCategoryTitle (books, category ){
//    let result = []
//    let type = category
//    books.forEach((item)=>{
//       if(item.category === type){
//           result.push(item.title)
//       }

//    })
//    return result
// }

// console.log(getByCategoryTitle(books, "Fiction"))

function getTitleByCategory(books, category) {
  let result = [];
  let type = category;
  for (let i = 0; i < books.length; i++) {
    console.log(books[i].category);
    if (books[i].category === type) {
      result.push(books[i].title);
    }
  }
  return result;
}


// console.log(getTitleByCategory(books, "Fiction"))
/****************************Question3***********************************/
//    You are tasked with implementing a simple login system. Write a function called login that takes a username
//     and password as input and returns a message indicating whether the login was successful or not.

// You are given a predefined array of objects representing user credentials.
// Each user object contains a username and password property.




const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];

function userLogin(username, password) {
  let user = users.find((user) => user.username === username);
  if (user) {
    if (user.password === password) {
      return "Login Successfully";
    } else {
      return "Invalid Password";
    }
  } else {
    return "User Not Found";
  }
}

// console.log(userLogin("user2", "password3"));

/************************Question4 **************************************** */
// you are given an array of strings representing words. Write a function that takes the array of words as
// input and returns an object where the keys are the words and the values are the frequency of each word in the array.


const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
function wordFrequency(arr) {
  const frequency = {};
  for (let words of arr) {
     if(frequency[words]){
       frequency[words]++
     }else{
       frequency[words] = 1
     }
  }
  return frequency;
}
// console.log(wordFrequency(words));


/*************************Question5 ************************************/
// You are given an array of numbers. Write a function that takes the array of numbers as input
//  and returns an array containing only the unique numbers from the original array, preserving 
//  their original order.

const numbers = [1, 2, 3, 4, 4, 5,25,25, 6, 6, 7, 8, 9, 9];

// function getUniqueNumbers(arr) {
//   return arr.filter((num, index)=> arr.indexOf(num) === index)
// }

// console.log(getUniqueNumbers(numbers));

// second Method *******************

// function getUniqueNumbers (arr){
//   let uniqueArr  = []
//   let unique = {}
//   for(let num of arr){
//     if(!unique[num]){
//        uniqueArr.push(num)
//        unique[num] = true
//     }

//   }
//   return uniqueArr
// }
// console.log(getUniqueNumbers(numbers))

/* ******************************Question 6 *******************************/
//Write a function to reverse a sentence like if
// let sentence = "what is your name" then its 
// output is "name your is what"


function reverseWords(sentence) {
  const words = [];
  let word = '';
  for (let char of sentence) {
      if (char !== ' ') {
          word += char;
      } else {
          words.push(word);
          word = '';
      }
  }
   
  words.push(word);
  //console.log("words", words)
 // console.log("word", word)
  
  let reversedSentence = '';
  for (let i = words.length - 1; i >= 0; i--) {
      reversedSentence += words[i];
      if (i > 0) {
          reversedSentence += ' '; 
      }
  }
  
  return reversedSentence;
}

//console.log(reverseWords('JavaScript is awesome')); 


/************************************Question 7******************************** */
// Given an array of integers, return indices of the two numbers such that they add up to a
//  specific target. You may assume that each input would have exactly one solution, and you may not 
//  use the same element twice.

// function twoSum(nums, target) {
//   const obj = {};
//   for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];

//       if (obj.hasOwnProperty(complement)) {
//           return [obj[complement], i];
//       }
//       obj[nums[i]] = i;
//   }
//   throw new Error("No two sum solution");
// }

// const nums = [2, 7, 11, 15];
// const target = 18;
//console.log(twoSum(nums, target)); // Output: [0, 1]


/*
function allPairs(arr, target) {
    let obj = {};
    let results = [];

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (obj.hasOwnProperty(complement)) {
            results.push([obj[complement], i]);
        }
        obj[arr[i]] = i;  
    }

    return results;
}

let arr = [2, 3, 4, 6, 10, 6, 7];
console.log(allPairs(arr, 10));


[ [ 2, 3 ], [ 2, 5 ], [ 1, 6 ] ]


*/

/***************************** Question 8 ************************************* */
// Given an array of integers nums, find all the elements that appear more than once in the array.

function findDuplicates(nums) {
  const frequency = {};
  const duplicates = [];
  for (let num of nums) {
      frequency[num] = (frequency[num] || 0) + 1;
  }

  for (let num in frequency) {
      if (frequency[num] > 1) {
          duplicates.push(parseInt(num));
      }
  }

  return duplicates;
}

function findDublicate(arr){
  let frequency = {}
  let dublicate = []
  for(let num of arr){
      if(frequency[num]){
          frequency[num]++
      }else{
          frequency[num] = 1
      }
  }
  for(let num in frequency){
     // console.log(frequency[num])
      if(frequency[num] > 1)
      dublicate.push(Number(num))
  }
  return dublicate
}
let arr = [23,4,5,5,6,6,78,9];
console.log(findDublicate(arr))

const num = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(num)); // Output: [2, 3]


// duplicate numbers and their counts
function findDuplicatesWithCount(nums) {
  const frequency = {};
  const duplicates = {};

  for (let num of nums) {
      frequency[num] = (frequency[num] || 0) + 1;
  }
  
  for (let num in frequency) {
      if (frequency[num] > 1) {
          duplicates[num] = frequency[num];
      }
  }

  return duplicates;
}

console.log(findDuplicatesWithCount([23, 4, 4, 5, 45, 45, 4, 4, 59, 50]));




/* In the given string find sum of number */
//let str = "dee23456p2aksfsd3443";

function result() {
    let count = [];
    let string = "";

    for (let value of str) {
        if (!isNaN(value)) {
            count.push(Number(value));
        } else {
            string += value;
        }
    }
    
    return {count, string}
}

console.log(result()); 


// In a given multiple array find a single array

let array = [
  {name: "deepak"},
  [{age: 23}, {address: "Noida"}, [{name: "Dewansh"}]],
  
  ];

function flattenArray(arr) {
  let result = [];
  for(let value of arr){
     if(Array.isArray(value)){
         result.push(...flattenArray(value))
     }else{
         result.push(value)
     }
  }
  return result
} 

console.log(flattenArray(array));


// let array = [23,4,5,5,56,39];

// console.log(array.indexOf(4))

// function removeDublicate(array){
//     let dublicate = []
//     for(let i = 0; i < array?.length; i++){
//          if(dublicate.indexOf(array[i]) === -1){
//              dublicate.push(array[i])
//          }
//     }
//     return dublicate
// }

// console.log(removeDublicate(array))


//I have a a multiple object in a array , find single object in a given multiple Obj;


// let arr = [
//   {name: "Deepak", age: 23},
//   {name1: "Deepak", age1: 27}
//   ]
  
//   function combineObj (arr){
//       let finalObj = {};
//       for(let obj of arr){
//           for(let key in obj){
//               finalObj[key] = obj[key]
//           }
//       }
//       return finalObj;
      
//   }
//  console.log(combineObj(arr))


/****************Validate Id Address *****************/
function isValidIPAddress(ip) {
  const parts = ip.split(".");
  console.log(parts)

  // IPv4 should have exactly 4 parts
  if (parts.length !== 4) {
      return "Not valid";
  }

  for (let part of parts) {
      // Check part is numeric
      if (part === "" || isNaN(part)) {
          return "Not valid";
      }

      // Convert to number and check range
      const num = Number(part);
      if (num < 0 || num > 255) {
          return "Not valid";
      }

      // No leading zeros (e.g., "01" is not allowed)
      if (part.length > 1 && part.startsWith("0")) {
          return "Not valid";
      }
  }

  return "Valid";
}
let ip = "300.168.1.1"; 


console.log(isValidIPAddress(ip))


let x = 0.1 + 0.2;
let y = 0.3;
console.log(x)
console.log(x == y); //output false because 
// This is because of floating point precision error in JavaScript (and most programming languages).
//JavaScript uses binary (base-2) floating point numbers (IEEE 754 standard).



// const arr = [1, 2, 3];
// arr.forEach((num) => num * 2);
// console.log(arr); output [1,2,3] because forEach does return and not modify original array


//let arr = ["apple", "banana", "mango"]
//let output = arr.slice(1)
//console.log(output)
//slice method in javascript is a method to extract the portion of a array without modify the origin array


/*function printPrimeUpTon(n){
  for(let i = 0; i <= n; i++){
      if(isPrime(i)){
          console.log(i)
      }
  }
}

function isPrime(num){
  if(num <= 2) return false;
  for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % 2 === 0) return false
  }
  return true
}

printPrimeUpTon(20)*/


/*const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];

function result (users){
    let obj = {}
    for(let i = 0; i < users?.length; i++){
        let role = users[i]?.role
        if(!obj[role]){
            obj[role] = []
        }
        
        obj[role].push(users[i])
        
    }
    return obj
    
}*/

/*const grouped = users.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }
  acc[user.role].push(user);
  return acc;
}, {});

console.log(grouped);

*/

/* const arr = [
  ["name", "Deepak"],
  ["age", 27]
];

let obj = Object.fromEntries(arr);
console.log(obj)

Another method
let obj = arr.reduce((acc, [key, value])=>{
  acc[key] = value
  return acc
}, {})


let obj ={}
for(let value of arr){
    if(Array.isArray){
        obj[value[0]] = value[1]
    }
} */


   /* const arr = [
      ["name", "Deepak"],
      ["age", 27],
      {address: "Noida"}
    ];
    
    let obj ={}
    for(let value of arr){
        if(Array.isArray(value)){
            obj[value[0]] = value[1]
        }else if(typeof value === "object" && !Array.isArray(value)){
            obj = {...obj, ...value}
        }
    }
    console.log(obj)
    */



  /*  let obj = { '5': 1, '6': 2, '23': 1, '45': 2 }
//output like [5,6,6,23,45,45]

let result = []
for(let key in obj){
    let count = obj[key]
    for(let i = 0; i < count; i++){
        result.push(Number(key))
    }
}
console.log(result) */



 /* function sumOfEven (n){
  let sum = 0
  for(let i = 0; i <=n; i++){
      if(i % 2 === 0){
          sum = sum + i
      }
  }
  return sum
}
console.log(sumOfEven(20))

*/

 /*function convertToRoman(num) {
  const romanMap = [
    { value: 1000, symbol: 'M' },
    { value: 900,  symbol: 'CM' },
    { value: 500,  symbol: 'D' },
    { value: 400,  symbol: 'CD' },
    { value: 100,  symbol: 'C' },
    { value: 90,   symbol: 'XC' },
    { value: 50,   symbol: 'L' },
    { value: 40,   symbol: 'XL' },
    { value: 10,   symbol: 'X' },
    { value: 9,    symbol: 'IX' },
    { value: 5,    symbol: 'V' },
    { value: 4,    symbol: 'IV' },
    { value: 1,    symbol: 'I' }
  ];

  let result = '';
  for (const { value, symbol } of romanMap) {
      console.log(value)
    if(num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

console.log(convertToRoman(60))
*/

/*
function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];
        if (next > current) {
            total += next - current;
            i++; 
        } else {
            total += current;
        }
    }
    return total;
}

console.log(romanToInt("MMMDCCXLIX"))


*/


/*
let arr = [12,3,4,5,56,78,9,2];
function result (arr){
    let even = [];
    let odd = []
    let e = 0;
    let o = 0
    for(let i = 0; i < arr?.length; i++){
         if(arr[i] % 2 === 0){
             even[e] = arr[i]
             e++
             
         }else{
            odd[o] = arr[i]
            o++
         }
    }
    return  output =  {
        even: even,
        odd: odd
    }
}
console.log(result(arr))
*/


/*
function reverseAfterPosition(arr, m) {
    let start = m + 1;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp
        start++;
        end--;

         //another way
        //  if(start < end){
        // [arr[start], arr[end]] = [arr[end], arr[start]]
        // start++
        // end--
    }
       
    

    return arr;
}

let ARR = [1, 2, 3, 4, 5, 6, 23, 4];
let M = 3;

console.log(reverseAfterPosition(ARR, M)); 

*/

/*
Note: do while loop
function reverseAfterPosition(arr, m) {
    let start = m + 1;
    let end = arr.length - 1;
    do{
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
        
    }while(start < end)
    return arr
}

let ARR = [1, 2, 3, 4, 5, 6, 23, 4];
let M = 3;

console.log(reverseAfterPosition(ARR, M)); 

*/

/*
const arr = [
  { name: "diwnash" },
  8,
  23,
  "hello",
  "deepak",
  { name: "pradeep", age: 23 }
];

function result(arr) {
    let obj = [];
    let str = [];
    let num = [];

    let objIndex = 0;
    let strIndex = 0;
    let numIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];

        if (typeof val === "number") {
            num[numIndex] = val;
            numIndex++;
        } else if (typeof val === "object" && val !== null && !Array.isArray(val)) {
            obj[objIndex] = val;
            objIndex++;
        } else if (typeof val === "string") {
            str[strIndex] = val;
            strIndex++;
        }
    }

    return {
        obj: obj,
        num: num,
        str: str
    };
}

console.log(result(arr));

*/

/*********************Using Switch Statement *********************/
 /* const arr = [
  { name: "diwnash" },
  8,
  23,
  "hello",
  "deepak",
  { name: "pradeep", age: 23 }
];

function result(arr) {
    let obj = [];
    let str = [];
    let num = [];
    let objIndex = 0;
    let strIndex = 0;
    let numIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
       switch (typeof val){
           case "number":
               num[numIndex++] = val;
               break;
            case "string":
                str[strIndex++] = val;
                break;
            case "object":
                if(val !== null){
                    obj[objIndex++] = val;
                }
               break;
       }
    }
    return {
        obj: obj,
        num: num,
        str: str
    };
}

console.log(result(arr));

*/

/*
let a ={
  name: "deepak"
}
let b = {
  ...a
}
b.name = "pradeep"
console.log(a)

In that case, the spread operator only copies the reference to the nested object,
not the actual nested object itself. So changes to nested properties will affect 
both objects. If we need to avoid that, we would use deep copy techniques like structuredClone()
or libraries like Lodash’s cloneDeep()."

*/

/*

Note: Custom Split Function 

for single character
function customSplit(str, delimiter) {
    const result = [];
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
        if (str[i] === delimiter) {
            result.push(temp);
            temp = '';
        } else {
            temp += str[i];
        }
    }
    result.push(temp);
    return result;
}

console.log(customSplit("abc def ghi", " "));

*/

/*

For multiple character

function customSplit(str, delimiter) {
    const result = [];
    let temp = '';
    let i = 0;
    let index = 0
    const dLen = delimiter.length;
    while (i < str.length) {
        let isMatch = true;
        for (let j = 0; j < dLen; j++) {
            if (str[i + j] !== delimiter[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            result[index++] = temp;
            temp = '';
            i += dLen; 
        } else {
            temp += str[i];
            i++;
        }
    }
    result[index] = temp; 
    return result;
}

console.log(customSplit("123.233.//231", ".//"));

*/

/*

let arr = [23, 45, 6, 7, 84];
function result(arr) {
let firstSmallest = arr[0];
let secondSmallest = arr[1]
if (secondSmallest < firstSmallest){
    [secondSmallest, firstSmallest] = [firstSmallest, secondSmallest]
}
   for(let i = 2; i < arr.length; i++){
       if(arr[i] < firstSmallest){
         secondSmallest = firstSmallest;
         firstSmallest = arr[i]
       }else if (arr[i] < secondSmallest &&  arr[i] !== firstSmallest ){
           secondSmallest = arr[i]
           
       }
   }
  console.log(secondSmallest)
}

result(arr);
*/


/*
Note is a given two sorted array create a function to merge both array with sorted

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8, 9];

console.log(mergeSortedArr(arr1, arr2))
function mergeSortedArr (arr1, arr2){
    let result = [];
    let i = 0; 
    let j= 0;
    while(i < arr1?.length && j < arr2?.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++
        }else{
            result.push(arr2[j]);
            j++
        }
    }
    return result.concat(arr1.slice(i), arr2.slice(j))
}
*/

/*

const employees = [
  { name: 'Alice', salary: 60000, department: 'Engineering' },
  { name: 'Bob', salary: 48000, department: 'Engineering' },
  { name: 'Charlie', salary: 52000, department: 'Sales' },
  { name: 'David', salary: 49000, department: 'Sales' },
  { name: 'Eva', salary: 70000, department: 'HR' },
  { name: 'Frank', salary: 30000, department: 'HR' },
  { name: 'Grace', salary: 55000, department: 'Marketing' }
];

function getDepartmentsWithHighAvgSalary(employees) {
  const departmentStats = {};
  for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    const dept = emp.department;

    if (!departmentStats[dept]) {
      departmentStats[dept] = { totalSalary: 0, count: 0 };
    }

    departmentStats[dept].totalSalary += emp.salary;
    departmentStats[dept].count += 1;
  }
  
  

  // Step 2: Filter and build final result using average salary
  const result = {};

  for (let dept in departmentStats) {
    const totalSalary = departmentStats[dept].totalSalary;
    const count = departmentStats[dept].count;
    const average = totalSalary / count;

    if (average > 50000) {
      result[dept] = totalSalary;
    }
  }
  return result;
}
console.log(getDepartmentsWithHighAvgSalary(employees));

*/

/*
const str = "engineers are energetic";

console.log(result(str));

function result(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === ' ') continue; 
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    let maxChar = '';
    let maxCount = 0;
    console.log(obj)

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === ' ') continue;
        if (obj[char] > maxCount) {
            maxCount = obj[char];
            maxChar = char;
        }
    }

    return maxChar;
}

*/

/*
Find First Non-Repeating Character in a given string

const input = "xxyz";

console.log(result(input))
function result (str){
    let obj = {}
for(let value of input){
    if(obj[value]){
        obj[value]++
    }else{
        obj[value]= 1
    }
}

for(let i = 0; i < str.length; i++){
    let ch = str[i];
    if(obj[ch] === 1){
        return ch
    }
    
}
return null
}
*/

/*
const input = "xxyyyyz";

// Find First more Repeating Character in a given string
// its output is y

console.log(result(input))
function result (str){
    let obj = {};
    for(let value of str){
        if(obj[value]){
            obj[value]++
        }else{
            obj[value] = 1
        }
    }
    
    let maxChar = "";
    let maxCount = 0
  for(let char of str){
      if(obj[char] > maxCount){
          maxCount = obj[char];
          maxChar = char
      }
  }
  return {
      maxChar: maxChar,
      maxCount: maxCount
  }
   
}

*/

/*
Find MIssing Number in a given array;
const arr = [3, 0, 1];

console.log(result(arr))
function result (arr){
    let n = arr.length
   let expectedSum = (n *(n + 1)/2)
   let totalSum = 0
   for(let value of arr){
       totalSum += value
       
   }
   return  expectedSum - totalSum

}

*/

/*

Find the Longest Consecutive Character Streak

function longestStreak(str) {
  if (str.length === 0) return { char: null, count: 0 };

  let maxChar = str[0];
  let maxCount = 1;

  let currentChar = str[0];
  let currentCount = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      currentCount++;
    } else {
      currentChar = str[i];
      currentCount = 1;
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      maxChar = currentChar;
    }
  }

  return { char: maxChar, count: maxCount };
}

*/










    









  
  





