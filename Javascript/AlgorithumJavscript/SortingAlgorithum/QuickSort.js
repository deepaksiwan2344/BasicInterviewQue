//Approach

//Pivot and partition
// pivot means select one number of given array
//partition means devide into two part




function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      console.log(arr[i]);
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
  
}
let arr = [23, 4, 5, 6, 67, 8];
console.log(quickSort(arr));
