//how to find dublicate element of given element

// const arrnum = [1, 23, 45, 67, 43, 67, 73, 23]
// const dublicate = arrnum.filter((ele, index, arr) => {
//     console.log("index", index)

//     return arr.indexOf(ele) !== index
// }



// )
//console.log(dublicate)


//find a dublicate element in a given array with loop
// function findDublicate(arr){
//     const dublicate = [];
//     for(let i = 0; i<arr?.length; i++){
//         for(let j = i +1;  j< arr.length; j++){
//             if(arr[i] == arr[j] && !dublicate.includes(arr[i])){
//                 dublicate.push(arr[i]);
//             }
//         }
//     }
//  
//    return dublicate

// }
// const number = [1,1,23,6,23,7,7,89,90]
// console.log(findDublicate(number))


var arr = [1,3,3,4,5,2,34,34]
function findDublicate(arr){
    let Dublicate = []
    for(let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] == arr[j] && !Dublicate.includes(arr[i])){
                Dublicate.push(arr[i]);
            }
        }
    }
    return Dublicate
}
console.log(findDublicate(arr))

/********************************Dublicate using while loop *************/
function findDuplicates(array) {
    let duplicates = [];
    let i = 0;
    while (i < array.length) {
        let j = i + 1;
        while (j < array.length) {
            if (array[i] === array[j] && !duplicates.includes(array[i])) {
                duplicates.push(array[i]);
            }

            j++;
        }

        i++;
    }

    return duplicates;
}

console.log(findDuplicates(array));

/*****************************Find Dublicate using Immediatley Invoke function*******/
(function (array) {
    let duplicates = [];
  let i = 0;
  while (i < array.length) {
      let j = i + 1;
      while (j < array.length) {
          if (array[i] === array[j] && !duplicates.includes(array[i])) {
              duplicates.push(array[i]);
          }

          j++;
      }

      i++;
  }

  console.log(duplicates)
})(array)


//find Dublicate 

function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num); // If it's already in `seen`, it's a duplicate
        } else {
            seen.add(num); // Otherwise, add it to `seen`
        }
    }

    return Array.from(duplicates); // Convert the Set to an Array


}

// find Dublicate using object and frequency count
function findDuplicates(arr) {
    let frequency = {}; 
    let duplicates = []; 

    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    console.log("frequent", frequency)

    for (let key in frequency) {
        console.log("key", key)
        if (frequency[key] > 1) {
            duplicates.push(Number(key));
        }
    }
    return duplicates;
}








