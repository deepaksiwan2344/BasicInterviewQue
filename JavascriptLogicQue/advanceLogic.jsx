
/*
function deepMerge(target, source) {
  const result = {};
  for (let key in target) {
    if (
      typeof target[key] === 'object' &&
      target[key] !== null &&
      !Array.isArray(target[key])
    ) {
      // If same key exists in source and both are objects → merge recursively
      if (source.hasOwnProperty(key) &&
          typeof source[key] === 'object' &&
          source[key] !== null &&
          !Array.isArray(source[key])
      ) {
        result[key] = deepMerge(target[key], source[key]);
      } else {
        result[key] = target[key];
      }
    } else {
      result[key] = target[key];
    }
  }

  // Add remaining properties from source
  for (let key in source) {
    if (!result.hasOwnProperty(key)) {
      result[key] = source[key];
    }
  }

  return result;
}
  
const a = { user: { name: "Alice", address: { city: "Paris" } } };
const b = { user: { age: 30, address: { zip: 75001 } } };

const result = deepMerge(a, b);

console.log(result);

*/



/*
const input = {
  name: "Alice",
  address: {
    city: "Paris",
    coordinates: {
      lat: 48.8566,
      lng: 2.3522
    }
  },
  age: 30
};

// expected output 
// {
//   "name": "Alice",
//   "address.city": "Paris",
//   "address.coordinates.lat": 48.8566,
//   "address.coordinates.lng": 2.3522,
//   "age": 30
// }

console.log(flatObj(input))
function flatObj (input, prefix="", obj= {}){
    for(let key in input){
        let value = input[key]
        let newKey = prefix ? `${prefix}.${key}`: key
        if(typeof value === "object" && value !== null && !Array.isArray(value)){
             flatObj(value, newKey, obj)
        }else{
            obj[newKey] = value
        }
    }
    return obj
}
*/

/*
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob" }
];

// expected output
// [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ]


let result = users.filter((item, index, self) => index === self.findIndex(u => u?.id === item?.id))
console.log(result)

*/

/*
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// expected output
// {
//   1: { id: 1, name: "Alice" },
//   2: { id: 2, name: "Bob" },
//   3: { id: 3, name: "Charlie" }
// }

let obj = {};
for(let value of users){
    let id = Number(value?.id);
    if(Number(id)){
        obj[Number(id)] = value
    }
    
    
}
console.log(obj)
*/

/*
const words = ["listen", "silent", "enlist", "rat", "tar", "art", "hello"];

// expected output
// [
//   ["listen", "silent", "enlist"],
//   ["rat", "tar", "art"],
//   ["hello"]
// ]

console.log(result(words))
function result (words){
    let obj  = {}
    for(let value of words){
        let sort = value.split("").sort().join("");
        if(obj[sort]){
            obj[sort].push(value)
        }else{
            obj[sort] = [value]
        }
    }
    return Object.values(obj)
   
}

*/

/*

let arr = [2,2,34,34,2,56,67,7,7,7]
// expected output
// {
//   '2': [ 2, 2, 2 ],
//   '7': [ 7, 7, 7 ],
//   '34': [ 34, 34 ],
//   '56': [ 56 ],
//   '67': [ 67 ]
// }

console.log(result(arr))
function result (arr){
    let obj  = {}
    for(let value of arr){
        if(obj[value]){
            obj[value].push(value)
        }else{
            obj[value] = [value]
        }
    }
    return obj
   
}
*/


/*
const input = {
  "user.name": "Alice",
  "user.address.city": "Paris",
  "user.address.zip": 75001,
  "age": 30
};

// expected output
// {
//   user: {
//     name: 'Alice',
//     address: {
//       city: 'Paris',
//       zip: 75001
//     }
//   },
//   age: 30
// }

console.log(unflattenObject(input));

function unflattenObject(flatObj) {
  const result = {};

  for (let key in flatObj) {
    const keys = key.split(".");
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      const part = keys[i];

      if (i === keys.length - 1) {
        current[part] = flatObj[key];
      } else {
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    }
  }

  return result;
}

*/


/*
Note: Polyfills
Polyfill is a piece of JavaScript code that adds support for modern JavaScript features in older browsers that 
do not natively support them.

Example of polyfills

if(!Array.prototype.myMap){
    Array.prototype.myMap = function (callback){
        let result = [];
        for(let i = 0; i< this.length; i++){
            result.push(callback(this[i], i, this))
        }
        return result
    }
}

let arr = [34,67,8,4];
const even = arr.myMap((num)=> num * 2);
console.log(even)

*/



/*
//polyfills of filter
if(!Array.prototype.myFilter){
     Array.prototype.myFilter = function (callback){
         let result = [];
         for(let i= 0; i < this?.length; i++){
             if(callback(this[i], i, this)){
                 result.push(this[i])
             }
         }
         return result
     }
}
let arr = [2,345,4, 5]

let result = arr.myFilter((item) => item > 3);
console.log(result)

*/

/*
if(!Array.prototype.myInclude){
    Array.prototype.myInclude =  function (value){
        for(let i = 0; i< this?.length; i++){
            if(value === this[i])
            return true
        }
        return false
    }
}

let arr = [34,56,78,90];

console.log(arr.myInclude(56)) //true
console.log(arr.myInclude(67)) //false
*/


/*
 let arr = [2,3,4,5,6];
//  in the above arr we want to 2 print after 2 sec 3 print after 5 sec and 4 print after 9 sec and show on

let delay = 0;
for(let i = 0; i < arr?.length; i++){
    delay += i + 2;
    setTimeout(()=> {
         console.log(arr[i])
    }, delay * 1000)
}

*/

/*

let arr = [23,45,67,8,2]
for(var i = 0; i < arr?.length - 1; i++){
    setTimeout(()=> {
         console.log(` index ${i} and value is ${arr[i]}`)
    }, 1000)
}

//output 
//  index 4 and value is 2
//  index 4 and value is 2
//  index 4 and value is 2
//  index 4 and value is 2

*/
