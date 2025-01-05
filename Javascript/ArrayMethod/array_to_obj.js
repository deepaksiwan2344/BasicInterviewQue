//convert Array to object

 let array= ["deepak", "pradeep", "vivek"]

// function changeobj(){
//     let obj = {}
//     for(let i = 0; i< array.length; i++){
//         obj[array[i]] = array[i] 
//     }
//     return obj
// }
// console.log(changeobj(array ))

function changeobj1(){
    let obj = {}
    for(let value of array){
        obj[value] = value
    }
    return obj
}
console.log(changeobj1(array))

//Array to object using Reduce function
//array.reduce(callback, initialValue)

let arr = ["a", "b", "c"]
let obj = arr.reduce((a, it)=> {
    a[it] = it
;
return a
}, {})


// let str = "deepak";
// let arr = str.split("")
// let obj = {}
//  for(let i = 0; i < arr?.length; i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]++
//     }else{
//         obj[arr[i]] = 1
//     }
//  }
//  console.log(obj)

// let str = "deepak";

// function objResult (){
//     let obj = {}
//   for(let value of str){
//       if(obj[value]){
//           obj[value]++
//       }else{
//           obj[value] = 1
//       }
//   }
//   return obj
// }
//  console.log(objResult(str))