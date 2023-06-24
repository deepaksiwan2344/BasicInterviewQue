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