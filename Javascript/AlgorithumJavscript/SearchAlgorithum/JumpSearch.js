//Jump Search

function jumpSearch(array, target) {
    const length = array.length;
    const blockSize = Math.floor(Math.sqrt(length)); // Set the block size for jumping
    console.log("blockSize", blockSize)
  
    let prev = 0; // Previous index
    let step = Math.min(blockSize, length) - 1; // Step size for jumping

    console.log("step", step)
  

    
    // Jumping to the block containing the target element
    while (array[Math.min(step, length) - 1] < target) {
      prev = step;
      step += blockSize;
  
      if (prev >= length) {
        return -1; // Target element is not present in the array
      }
    }
  
    // Performing linear search within the block
    while (array[prev] < target) {
      prev++;
  
      if (prev === Math.min(step, length)) {
        return -1; // Target element is not present in the array
      }
    }
  
    // Checking if the target element is found
    if (array[prev] === target) {
      return prev; // Return the index if the element is found
    }
  
    return -1; // Target element is not present in the array
  }
  
  // Example usage:
  let array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  let target = 23;
  
  let index = jumpSearch(array, target);
  console.log("Index of", target + ":", index);