//Random quick sort

//step
//1. select pivot in random of given array
//random quick sort is similar to quick sort

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[randomIndex];

  const less = [];
  const greater = [];
  const equal = [];

  for (let element of arr) {
    if (element < pivot) {
      less.push(element);
    } else if (element > pivot) {
      greater.push(element);
    } else {
      equal.push(element);
    }
  }

  const sortedLess = quickSort(less);
  const sortedGreater = quickSort(greater);

  return sortedLess.concat(equal, sortedGreater);
}

const unsortedArray = [5, 3, 1, 6, 4, 2];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
