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

function twoSum(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (obj.hasOwnProperty(complement)) {
          return [obj[complement], i];
      }
      obj[nums[i]] = i;
  }
  throw new Error("No two sum solution");
}

const nums = [2, 7, 11, 15];
const target = 18;
//console.log(twoSum(nums, target)); // Output: [0, 1]


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


// In a geven multiple array find a single array

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


    









  
  





