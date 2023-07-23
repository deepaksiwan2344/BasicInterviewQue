// const additon = function (num1, num2) {
//     return num1 + num2

// }

// console.log(additon(34, 38))


//Arrow function in javascript

//Before Arrow function
// Hello = function () {
//     return "Hello deepak"
// }

// console.log(Hello())

//After Arrow function

// Hello1 = () => {
//     return "Hello Deepak Kumar"
// }

// console.log(Hello1())

//Arrow function in javascript
// const create = () => {


// }


//difference between arrow function and normal function
function result(a, b) {
    console.log(arguments)
    return a + b

}
console.log(result(23, 45))

const result1 = (a,b)=>{
    //console.log(arguments)
    return a + b

}
console.log(result1(23, 56))

//second difference In arrow function constructure is not use but normal function constructure is use


// function car (name){
//     this.brand = name
// }

 const car = (name)=>{
    this.brand = name
 }
const carData = new car('maruti')
console.log(carData) //car is not a constructor

//Arrow function 
// It provides a more compact and expressive way to create functions compared to
//  traditional function expressions.




