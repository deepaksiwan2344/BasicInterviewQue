//how to find max and min value in given array




// const arrNumber = [1,3,5,6,7,8,90]
//console.log(Math.max(...arrNumber))
//console.log(Math.min(...arrNumber))


//how to find second largest value in given array
const secondlargestNum = [1, 3, 5, 6, 7, 8, 90, 100]
const sort = secondlargestNum.sort(function (a, b) {
    return b - a

})
//console.log(sort[1]) //second largest values in a given array
//console.log(sort.length)


//how to find second smallest values in a given array;
const arr1 = [12, 34, 56, 78, 92, 23];
function findsecondsmallest(arr1) {
    let smallest = Infinity
    let secondSmallest = Infinity
    for (let i = 0; i < arr1?.length; i++) {
        if (arr1[i] < smallest) {
            secondSmallest = smallest
            smallest = arr1[i]
            //console.log(smallest)

        } else if (arr1[i] < secondSmallest) {
            secondSmallest = arr1[i]
            //console.log(secondSmallest)
        }
    }
    return secondSmallest
}
const secondSmallest1 = findsecondsmallest(arr1)
// console.log(secondSmallest1)

//find sum of given array

const arr2 = [2, 34, 56, 48]
function findArraysum(arr2) {
    let sum = 0
    for (let i = 0; i < arr2?.length; i++) {
        // console.log("allarray", arr2)
        sum += arr2[i]

    }
    return sum
}
const totalsum = findArraysum(arr2)
//console.log(totalsum)

//total sum using reduce method
const sum = (arr2) => {
    return arr2.reduce((pre, cur) => {
        return pre + cur
    })

}

const totalvalue = sum(arr2)
//console.log(totalsum)


// function isPrime(n) {
//     if (n < 2 || (n > 2 && n % 2 === 0)) {
//         return false;
//     }
//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         console.log("n", n)
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const numbers = [3, 4, 5, 7, 6, 9, 11, 13, 24];
// for (let i = 0; i < numbers.length; i++) {
//     const n = numbers[i];
//     if (isPrime(n)) {
//         console.log(n + " is prime");
//     }
// }



//how to find prime number
// function isPrime(n) {
//     if (n < 2 || (n > 2 && n % 2 === 0)) {
//         return false
//     }
//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// const number = [1, 34, 2, 3, 7, 8, 11]
// for (let i = 0; i < number?.length; i++) {
//     const n = number[i]
//     if (isPrime(n)) {
//         console.log("all", n)
//     }
// }


//In a given string how to find vowel



// function isVowel(c) {
//     return ['a', 'e', 'i', 'o', 'u'].includes(c.toLowerCase());
// }
// const str = 'hello world';
// for (let i = 0; i < str.length; i++) {
//     const c = str[i];
//     if (isVowel(c)) {
//         console.log(c + " is a vowel");
//     }
// }



//swape number in javascript
// let a= 12;
// let b= 34;
// let temp = a
// a = b
// b= temp
// console.log("a", a)
// console.log("b", b)


// method Swape number in javascript

// let c = 23;
// let d = 45;

// [c, d] = [d, c]
// console.log("c", c)
// console.log("d", d)




//wrire a fibonanci serires using swape 
// let a = 0;
// let b = 1;

// for (let i = 0; i < 15; i++) {
//     var temp = a + b
//     a = b;
//     b = temp
//     console.log(temp)
// }
//Fibonaci series without swape

// function fibonacci(n) {
//     let fib = [0, 1];
//     for (let i = 2; i <= n; i++) {

//         fib[i] = fib[i - 1] + fib[i - 2];
//     }

//     return fib;
// }

// console.log(fibonacci(15));


// let fib = [0, 1];
// for (let i = 2; i <= 16; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
// }

// console.log(fib)

// function fibonacci(n){
//     let fib = [0,1]
//     for (let i =2; i<=n; i++){
//         fib[i] = fib[i -1] + fib[i -2]
//     }
//     return fib
// }
// console.log(fibonacci(8))


// function isPrime(n) {
//     if (n < 2 || (n > 2 && n % 2 === 0)) {
//         return false;
//     }
//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         console.log("n", n)
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const numbers = [3, 4, 5, 7, 6, 9, 11, 13, 24];
// for (let i = 0; i < numbers.length; i++) {
//     const n = numbers[i];
//     if (isPrime(n)) {
//         console.log(n + " is prime");
//     }
// }



const numsum = [12,34,56,43,7,784];
function totalsum1 (sumsum){
    let sum = 0
    for(let i = 0; i < numsum.length; i++){
        sum += numsum[i];
    }
    return sum

}

console.log(totalsum1(numsum))

console.log(global)






