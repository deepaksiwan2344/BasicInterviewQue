//ForEach loop


// const number = [2,4,67,78,4];
// number.forEach(function(num){
//     console.log("num", num)
// })

//For loop Syntax
//for(initialization, condition, increament){
    //code to be executed
//}


// for(let i = 0; i< number?.length;i++){
//     console.log("[i]",number[i])
// }

// let array = [12,34,56];
// array.forEach(function(arr){
//     console.log(arr)
// })



// array3.forEach((num)=>{
//      console.log(num)

// })


// function findSmallestNumber(arr) {
//     let smallest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < smallest) {
//         smallest = arr[i];
//       }
//     }
  
//     return smallest; 
//   }
  
//   const numbers = [10, 5, 8, 3, 1, 7];
//   const smallestNumber = findSmallestNumber(numbers);
//   console.log("Smallest number: ", smallestNumber); 

// let obj = {a: 12, b: 23, c:28};
// for (let key in obj){
//   console.log(key)
// }

// const arr = [1, 2, 3];
// for (let value of arr) {
//   console.log(value); // Output: 1, 2, 3
// }


// const arr = [1, 2, 3];
// for (let index in arr) {
//   console.log(index); // Output: 0, 1, 2
// }


// const myArray = [10, 20, 30, 40, 50];
// let searchValue = 52;
// let foundValue = null;

// for (let index in myArray) {
//   console.log(myArray[index])
//   if (myArray[index] === searchValue) {
//     foundValue = myArray[index];
//     break; 
//   }
// }


// if (foundValue !== null) {
//   console.log(`Value ${searchValue} found in array.`);
// } else {
//   console.log(`Value ${searchValue} not found in array.`);
// }


// let obj = {a:23, b:47, c:89};
// for(let value in obj){
//   console.log(value)
// }

 //let string = "Deepak";
//  for (let char in string){
//    console.log(string[char])
//  }

//  for(let char = 0; char < string.length; char ++){
//       console.log(string[char])
//  }

//for in iterate over the keys whereas for of iterate over the vlaues
let array = [12,34,56,67];
 for (let index in array){
  //iterate over the keys
  console.log(index)
 }
 
 for (let values of array){
  //iterate over the values
  console.log(values)
 }

 let number = [12,45,35,67,88];
  for(let index in number){ //it return index of a array
    console.log(index)
  }