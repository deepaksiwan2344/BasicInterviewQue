//While Loop **************************************************

// let count = 1;
// while (count <= 10) {
//     console.log(count * 17)
//     count++
// }


// let i = 2;
// while (i <= 10) {
//     if (i % 2 == 0) {
//         console.log(i * 2)
//         i++
//     } else if(i % 2 !== 0) {
//         console.log(i *3)
//         i++
//     }
// }

//do while loop **************************************************

// let i =0;
// do{
//   console.log(i);
//   i++
// }while(i < 20);



//For Loop **********************************************************

//for Loop in javascript
// for(let i = 1; i<=10; i++){
//     if(i%2 == 0){
//         console.log(i*5)

//     }else{
//         console.log(i *4)
//     }
// }



//factorial *******************************************************
//how to write factorial of 5

// function factorialise(num) {
//     if (num < 0)
//           return -1;
//     else if (num == 0)
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }


//  console.log(factorialize(5))
// const factorial = (num)=>{
//     if(num < 0)
//     return -1
//     else if(num == 0)
//     return 1
//     else{
//         return (num* num -1)
//     }

// }

//console.log(factorial(6))


// let n = 20
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//   factorial *= i;
// }

// console.log(factorial);

//Using while loop

// let i = 1;
// let n = 5
// let factorial = 1

// while(i<=n){
//    factorial *= i;
//   i++
// }
// console.log(factorial)

//For In Loop
// const person = {firstname: "deepak", lastname:"kumar", age: 25}

// let text = ""
// for (let x in person){
//      text += person[x] + " "
// }
// console.log(text)

//For of Loop

// const car = ["BMW", "VOLOVO", "MINI"]

// let text = ""
// for(let x of car){
//     console.log("x", x)
//     text += x  + ""
// }

// console.log("text", text)

// Find ThirdLargest Number ***************************************************
let arr = [12, 4, 56,67];
function findThirdLargest(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    } else if (arr[i] > thirdLargest && arr[i] !== largest && arr[i] !== secondLargest) {
      thirdLargest = arr[i];
    }
  }
  
  return thirdLargest;
}

console.log(findThirdLargest(arr));


//for of Loop with index and value **************************************************
let arr3 = [12,34,5,6,7];
function result(arr3){
    for([index,value] of arr3.entries())
    console.log("arrresult", index,value)
    
}
result(arr3)

//For Of Loop ************************************************************************

let array = [23,5,6,78,8];
for(value of array){
  console.log(value) //output 23,5,6,78,8
}

//for in loop ************************************************************************

let arr4 = [34,6,78,90];
for(index in arr4){
  console.log(index)
}


