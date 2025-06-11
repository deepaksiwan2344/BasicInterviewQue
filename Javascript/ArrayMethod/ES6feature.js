//Arrow function
//BlockScope(let,const)
//Template Literals
//Destructuring Assignment
//Default Parameters
// function add(a = 12, b =27){
//     return a + b
// }
// console.log(add())
//Rest and Spread Operators
//Classes
//Modules
//Promises
//for in, for of Loop is also es6 features
//In array(find,filter, includes, findIndex,every,some, slice, splice)

// note some and every return boolian



//example of every array Method
let array = [2,4,6,8,10,12,27];

// let evenNumber = array.every((number)=>{
//     if(number % 2 == 0){
//         return number
//     }
// })
// console.log(evenNumber)


let someNumber = array.some((number)=>{
    if(number % 2 == 0){
        return number
    }
})
console.log(someNumber)

// let FindIndex = array.findIndex((element, index)=>{
//      return element > 8
// })
// console.log(FindIndex)

// const obj = {
//     name: "deepak",
//     age: 23,
//     address: "Noida"

// }

// const {name} = obj
// console.log("name", name)

// let arr = [12,45,667,78,9];
// for(let index in arr){
//     console.log(index)
// }

// for(let value of arr){
//     console.log(value)
// }



/*
Promise and async await
Promise: A Promise represents a value that may be available now, later, or never.

Example of Promise:
function fetchData (){
    let obj = {
        name: "deepak",
        age: 13
    }
    return new Promise((resolve, reject)=>{
        if(obj.hasOwnProperty("name")){
            resolve("promise is success")
        }else{
            reject("promise is failed")
        }
    })
}

fetchData().then((item)=>{
    console.log(item)
}).catch((err)=>{
    console.log(err.toString(
        ))
})


Both Promise and async/await work well for API calls —
but async/await is generally better for:
cleaner code,

easier error handling,
and better readability, especially for multiple sequential calls.

 Summary:
Promise is the core concept.
async/await is a syntactic shortcut for working with promises more easily.
You cannot use await without a promise.
Under the hood, async/await uses promises.

*/




