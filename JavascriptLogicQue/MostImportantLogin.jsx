
/*
let arr = [1, 3, 2, 1, 4, 1, 3, 3, 3]
//Output: 3 (appears 4 times)

let obj = {};
let mostCount = 0;
    let mostFrequent = null;
for(let value of arr){
    if(obj[value]){
        obj[value]++
    }else{
        obj[value] = 1
    }
    
    if(obj[value] > mostCount){
        mostCount = obj[value];
        mostFrequent = value
    }
}


console.log(mostFrequent)

*/
/*
let arr1 = [23, 45, 67, 8, 9, 8];
let arr2 = [8, 9, 23, 4, 5, 6, 8];

//expected output [ 23, 8, 9 ]

console.log(result(arr1, arr2)); 
function result(arr1, arr2) {
    let output = [];
    for (let i = 0; i < arr1.length; i++) {
        let found = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                found = true;
                break;
            }
        }
        if (found) {
            let isDuplicate = false;
            for (let k = 0; k < output.length; k++) {
                if (output[k] === arr1[i]) {
                    isDuplicate = true;
                    break;
                }
            }

            if (!isDuplicate) {
                output[output.length] = arr1[i];  
            }
        }
    }

    return output;
}
*/
















