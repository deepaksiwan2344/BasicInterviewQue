function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i]; // The element to be inserted
      let j = i - 1;
  
      // Shift elements of arr[0..i-1], that are greater than current, to one position ahead
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the current element into the right position
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [29, 10, 14, 37, 13];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [10, 13, 14, 29, 37]
  