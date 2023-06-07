//While Loop

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

//for Loop in javascript
// for(let i = 1; i<=10; i++){
//     if(i%2 == 0){
//         console.log(i*5)

//     }else{
//         console.log(i *4)
//     }
// }

//factorial
//how to write factoerial of 5

// function factorialize(num) {
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
let arr = [12, 4, 56,67];
function Largest(arr) {
  let largest = arr[0];
  let secondLargest = Infinity;
  let thirdlargest = Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      thirdlargest = secondLargest
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > thirdlargest && arr[i] !== largest && arr[i] !==secondLargest ) {
        thirdlargest = arr[i];
    }
  }
  return thirdlargest;
}
console.log(Largest(arr));
