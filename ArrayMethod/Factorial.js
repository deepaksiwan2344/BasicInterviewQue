

// function factorial(num) {
//     if(num === 0){
//         return 1
//     }
//     return num * factorial(num - 1)
//   }
//   console.log(factorial(5))

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
console.log(factorial(6))
