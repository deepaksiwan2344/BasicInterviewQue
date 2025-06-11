//Heapsorting

// Build a max heap: Convert the input array into a max heap, where every
// parent node is greater than or equal to its children. This step rearranges
//  the elements of the array to satisfy the max heap property.

// Swap and heapify: Swap the root element (maximum value) of the heap with the
//  last element of the heap region. Reduce the size of the heap by one.
// Heapify the new root to maintain the max heap property.

// Repeat step 2: Repeat the swap and heapify process until the heap region is empty.
//  Each iteration moves the maximum element to the sorted region at the end
//  of the array.
// Reverse the array: After the heap region becomes empty, the array contains
// the sorted elements in reverse order. Reverse the array to obtain the final sorted order.

// Note: Heap sort has a time complexity of O(n log n) in all cases,

//leave node formula of heap sort (n / 2) + 1 to n

let array = [23, 56, 7, 78, 9, 120];
function heapSort(array) {
    const length = array.length;
    // Build a max heap
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
      heapify(array, length, i);
    }
  
    
    // Swap elements and heapify repeatedly
    for (let i = length - 1; i >= 0; i--) {
      // Move current root to the end
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp;
  
      // Heapify the reduced heap
      heapify(array, i, 0);
    }
  
    return array;
  }
  
  function heapify(array, length, rootIndex) {
    let largest = rootIndex;
    let leftChild = 2 * rootIndex + 1;
    let rightChild = 2 * rootIndex + 2;
  
    // Find the largest element among the root and its children
    if (leftChild < length && array[leftChild] > array[largest]) {
      largest = leftChild;
    }
  
    if (rightChild < length && array[rightChild] > array[largest]) {
      largest = rightChild;
    }
  
    // If the largest element is not the root, swap and heapify
    if (largest !== rootIndex) {
      let temp = array[rootIndex];
      array[rootIndex] = array[largest];
      array[largest] = temp;
      heapify(array, length, largest);
    }
  }

  
  
  // Example usage:
  console.log("Original array:", array);
  let sortedArray = heapSort(array);
  console.log("Sorted array:", sortedArray);