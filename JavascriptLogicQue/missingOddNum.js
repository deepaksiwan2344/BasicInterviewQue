
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



let arr1 = [5, 7, 9, 19, 21];
let missingCount = 0;


let missingNumber = []

for (let i = 0; i < arr1.length - 1; i++) {
    let current = arr1[i];
    let next = arr1[i + 1];
    while (current + 2 < next) {
        current += 2;
        missingNumber.push(current)
        missingCount++;
    }
}
console.log(missingCount);
console.log(missingNumber)