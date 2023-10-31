//Bubblesort

// Start with an unsorted array of elements.
// Compare each element with its adjacent element.
// If the adjacent element is smaller (or larger) than the current element, swap them.
// Repeat this process for each pair of adjacent elements in the array, moving from the beginning to the end.
// Bubble sort has a time complexity of O(n^2),

function Bubblesort(array) {
  const length = array.length;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
let array = [4, 0, 0, 0, 1, 1, 2, 2, 3];
let sort = Bubblesort(array);
console.log(sort);

//Note
//link to understand sorting   https://visualgo.net/en
