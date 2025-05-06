//sorting number in a array
//const numbers = [5, 321, 9, 10, 263,23,23,78];

//Sorting in ascending
// let sort = numbers.sort(function(a,b){
//     return a-b
// })

// console.log(sort);


//Sorting in ascending
// let sortd = numbers.sort(function(a, b){
//     return b-a
// })

// console.log(sortd)

//sorting array string in a array
// let str = ["deepak, count", "mukesh", "praveen"]
// console.log(str)


// In a javascript for a number sorting sort not work proper for sorting  a number we use compare function like
// above example



// let a = [1, 3, 4, 45, 65];
// let b = a;
// c = b;
// c.push(9);
// console.log(...b);
// console.log(...b);
// console.log(...c);

// let arr8 = [2, 5, 6, 7, 23, 45];
// let arr9 = arr8
//   .map((curlem) => {
//     return curlem * 2;
//   })
//   .filter((curfil) => {
//     return curfil > 10;
//   });

// console.log(arr9);
// //accumulator
// const totalsum = arr8.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// const average = totalsum / arr8.length;
// console.log("average", average);




// let array = [12, 34, 4, 40, 50, 2];
// console.log("min", Math.min(...array));

// const arr = [3, 6, 1, 24, 224];
// console.log(Math.min(...arr))
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }

// console.log(min);

// let array = [12, 56, 45, 78, 89, 90,34];
// function findSecondSmallest(arr) {
//   let smallest = Infinity;
//   let secondSmallest = Infinity;
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = arr[i];
//     } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
//       secondSmallest = arr[i];
//     }
//   }
  

//   // If no second smallest number is found, return null
//   if (secondSmallest === Infinity) {
//     return null;
//   }
//   return secondSmallest;
// }

// console.log(findSecondSmallest(arr))
// let number = 232434;
// let a = number.toString().split("").map(Number);
// let sum = a.reduce((acc, cur) => {
//   return acc + cur;
// });

// console.log(sum)

//let a = [23,45,566,778,32]
// let sum = a.reduce((acc, cur)=>{
//   return acc + cur

// })
// console.log(sum)

// let sorting = a.sort(function(a,b){
//    return b - a
// })
// console.log(sorting)


// function findMissingOddNumber(arr) {
//   let totalSum = 0; // Initialize total sum to 0
//   let arraySum = 0; // Initialize array sum to 0



//   Calculate the total sum of odd numbers from 1 to n
//   for (let i = 1; i <= arr.length + 1; i += 2) {
//     totalSum += i;
//   }

//   // Calculate the sum of numbers in the array
//   for (let i = 0; i < arr.length; i++) {
//     arraySum += arr[i];
//   }

//   // The difference between the total sum and the array sum
//   // will be the missing odd number
//   const missingOddNumber = totalSum - arraySum;
//   return missingOddNumber;
// }

// // Example usage
// const numbers = [1, 3, 5, 9,  11]; // Odd numbers from 1 to 11 with 1 number missing
// const missingOdd = findMissingOddNumber(numbers);
// console.log("Missing odd number:", missingOdd);



// const data = [
//   { name: "deepak", amount: 2000 },
//   { name: "depesh", amount: 3000 },
//   { name: "deepak", amount: 5000 },
//   { name: "depesh", amount: 1000 },
//   { name: "deepak", amount: 1000 }
// ];

// const deepakTotalAmount = data.reduce((totalAmount, currentObj) => {
//   if (currentObj.name === "deepak") {
//     return totalAmount + currentObj.amount;
//   }
//   else if(currentObj.name === "depesh"){
//     return totalAmount + currentObj.amount;

//   }
//   return totalAmount;
// }, 0);





// console.log("TotalAmount of deepak and depesh",deepakTotalAmount); // Output: 8000
//let array = [12,4,56,76,3];

// let map = array.map((item, i)=>{
//   console.log("item", item)
// })

// let find = array.find(item=> item>60
 
// )


// let filter = array.filter((item)=> item >10)
// console.log("find", find) //find does not return an array
// console.log("filter", filter)//filter return an array




let arr = [12,4,5,56,7]
function sort(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j]> arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
    
}
sort(arr)

// above code we can also write in like
function sort2 (arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j]> arr[j + 1]){
                [arr[j] = arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
    
}
console.log("sort2",sort2(arr))


//sorting using while loop
function sorting(arr) {
    let i = 0;
    while(i < arr.length - 1){
        if(arr[i] > arr[i + 1]){
            [arr[i], arr[i + 1] ]= [arr[i + 1], arr[i]]
            i = 0
        }else{
            i++
        }
        
    }
    return arr
 }



