
//Map Function with Loop
const numbers = [1,4,46,65,75,]
const squres = []
for(let i = 0; i<numbers.length; i++){
    squres.push(numbers[i] * numbers[i])

}
console.log(squres)

//Simple Map Funcition
const number = [2,4,5,6,9]
let squire = number.map((num1)=>{
       return num1 * num1   
})

console.log(squire)

/*
difference between map and reduce method in Javascript
reduce method in Java script can be return any data type depending upon  how to use it
reduce method return like object, array, number
where as map method return always array


*/


