// const number = [3,7,23,56,76,]

// let Filter = number.filter((num)=>{
//         return num % 2 === 0
// })

// console.log(Filter)


//or
// const number = [3,7,23,56,76,]
// let Filter = number.filter(function(num){
//         return num % 2 === 0
// })


// console.log(Filter)
//Filter Using Loop
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18];

// const evenNumbers = [];

// for(let i = 0; i<numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         evenNumbers.push(numbers[i])
//     }
// }
// console.log(evenNumbers)

//Filter Using while Loop
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18];
// const evenNumbers = [];


// let i = 0
// while(i < numbers.length){
//     console.log(numbers[i])
//     if(numbers[i] % 2 === 0){
//         evenNumbers.push(numbers[i])
        
//     }
//     i++
// }




// console.log(evenNumbers)
//Syntax
//if number is an array then number.filter(argument).map();


const numbers = [1, 2, 3, 4, 5, 6];
const filteredAndMappedNumbers = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);
console.log(filteredAndMappedNumbers);


const number = [1, 2, 3, 4, 5, 6];
const mappedAndFilteredNumbers = number
  .map(num => num * 2)
  .filter( num =>num % 2 === 0)
  

console.log(mappedAndFilteredNumbers);