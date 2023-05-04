//Q.4. Write a program in JS to check whether a number is prime or not?

function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(7)); 
  console.log(isPrime(20)); 

 
