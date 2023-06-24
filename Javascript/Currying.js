//Currying
// Currying is a technique used in functional programming where a function that takes multiple arguments
// is transformed into a series of functions that take one argument each.
// In JavaScript, currying can be achieved using closures.

// function sum (num1){
//     //console.log(num1);
//     return function(num2){
//        // console.log(num1, num2)
//        return function (num3){
//         console.log(num1, num2, num3)
//        }
//     }
// }
// sum(5)(6)(8);
//In Other View
// const totalsum = (num1)=> (num2)=> (num3)=>console.log(num1 + num2+ num3)

// totalsum(12)(34)(45)


function multiply(a){
    return function(b){
        return function(c){
            return a * b *c
        }
    }
}

const multipleby3 =  multiply(4)
const multipleby7 = multipleby3(7)
console.log(multipleby7(5))

function addition (a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}


const addition1 = addition(3);
const addition2 = addition1(9);
console.log("addition", addition2(4))

function multiple(p){
   return  function multiple1(q){
     return function multiple2(r){
        return p*q*r
     }
        
   }
}
const resultMultiple = multiple(7);
const resultMultiple2 = resultMultiple(2);
console.log(resultMultiple2(5))

function add1(a){
    return function add2(b){
        return function add3(c){
            return function add4(d){
                return  a+ b+c +d;
            }
        }
    }
}
const addi1 = add1(423);
const addi2 = addi1(53);
const addi3 = addi2(8234);
console.log(addi3(89))

function addition(a){
    return function add1(b){
        return function add1(c){
            return a+b+c;

        }
    }
}
console.log(addition(23)(12)(34))





