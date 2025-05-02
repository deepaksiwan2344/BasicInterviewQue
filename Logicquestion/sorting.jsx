//sort the array without using double loop

let array = [2, 4, 6, 8, 10, 1, -90, -9];
for(let i = 0; i < array?.length - 1; i++){
    if(array[i] > array[i+ 1]){
        [array[i], array[i+ 1]] = [array[i+1], array[i]]
        i = -1
    }
}

console.log(array);

//Another way is element in given array is already sort then there is no need to swapped them(Optimize the code)
function result(arr) {
    let swapped = true; 
    for (let i = 0; i < arr.length && swapped; i++) {
      swapped = false; 
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
        console.log("swapped")
        swapped = true; 
        i = -1; 
      }
    }
  
    return arr;
  }
  
  let arr = [12,34,56,78,90];
  console.log(result(arr));


//another way to sorting the array

function result(arr1) {
    let n = arr1.length;
    let isSorted;
    for (let i = 0; i < n; i++) {
      isSorted = true; 
      for (let j = 0; j < n - i - 1; j++) { 
        if (arr1[j] > arr1[j + 1]) {
          [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]]; 
          isSorted = false; 
        }
      }
      if (isSorted) break; 
    }
  
    return arr1;
  }
  
  let arr1 = [23, 4, 5, 6, 7, 45];
  console.log(result(arr1)); 
  
  
