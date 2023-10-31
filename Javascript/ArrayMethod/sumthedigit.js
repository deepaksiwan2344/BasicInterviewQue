//sum the digit in the given number

// let number = 34284384;
// const sumdigit = (number)=>{
//     console.log("number",number.toString())
//     let arr = number.toString().split("").map(Number);
//     console.log("arr", arr)
//     return arr.reduce((acc, cur)=>{
//         return acc + cur
//     })
// }
// console.log(sumdigit(number));

// let digit = 2434;
// const reverse = (digit)=>{
//     let numreverse = digit.toString().split('').reverse().join('')
//     return numreverse
// }
// console.log(reverse(digit))



function sumOfDigits(num) {
    let sum = 0;
    for (let i = 0; i < num.toString().length; i++) {
      sum += parseInt(num.toString().charAt(i));
    }
    return sum;
  }
console.log(sumOfDigits(344))




// let number = 34284384;
// const sumdigit = (number)=>{
//     console.log("number",number.toString())
//     let arr = number.toString().split("").map(Number);
//     return arr.reduce((acc, cur)=>{
//         return acc + cur
//     })
// }
// console.log(sumdigit(number));


// function capitalizeFirstLetter(str) {
//     let words = str.split(" ");
//     console.log(words)
//     for (let i = 0; i < words.length; i++) {
//         console.log("word", words[i].toUpperCase())+ words[i].substr(1)
//       words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     }
//     return words.join(" ");

//   }
  
//   console.log(capitalizeFirstLetter("Hello deepak kumar how are you"));


// function topTwoNumbers(arr) {
//     arr.sort(function(a, b) {
//       return b - a;
//     });
//     return [arr[0], arr[1]];
//   }
//   console.log(topTwoNumbers([3, 6, 1, 8, 4, 9]));

// let number = 12334
// let a = number.toString().split("").map(Number)
// console.log("a", a)

// let sum = a.reduce((acc, cur)=>{
//     return acc +cur
// })

// console.log("sum", sum)
function sumOfDigits(num) {
    let sum = 0;
    for(let i = 0; i< num.toString().length; i++){
        sum += parseInt(num.toString().charAt(i))
    }
    return sum
  }
  
console.log("sdfsd",sumOfDigits(1234567))



