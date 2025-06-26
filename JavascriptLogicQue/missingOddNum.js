
//we want to find missing odd number of given array
let arr = [5,7,9,11,15,17]
for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    let next = current + 2;
    // with if else condition

    // if(arr[i + 1] === next) continue;
    // else{
    //     console.log(next)
    //     break
    // }

    // with out else condition
    if(arr[i + 1] !== next){
        console.log(next);
        break;
    }
}


// find missingOdd Number of given arr


function findMissingOddNumbers(arr) {
    let missingCount = 0;
    let missingNumbers = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let current = arr[i];
      let next = arr[i + 1];
      while (current + 2 < next) {
        current += 2;
        missingNumbers.push(current);
        missingCount++;
      }
    }
    return {
      missingCount: missingCount,
      missingNumbers: missingNumbers
    };
  }
  
  // Test the function
  let input = [5, 7, 9, 11, 15, 17];
  let result = findMissingOddNumbers(input);
  console.log(result); // { missingCount: 2, missingNumbers: [13, 15] }
  