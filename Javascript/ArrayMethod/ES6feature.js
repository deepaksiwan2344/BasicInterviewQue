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


let somenumber = array.some((number)=>{
    if(number % 2 == 0){
        return number
    }
})
console.log(somenumber)



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




