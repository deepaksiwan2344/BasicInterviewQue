//Linear Search

//TimeComplexity is  O(n)

 let arr = [12,4,5,6,89,40];
 function LinearSearch(arr, value){
    let arr1 = []
     for(let i = 0; i<arr.length; i++){
        if(arr[i] == value){
            arr1.push(i)
            
        }
     }
     return arr1

 }
 let result = LinearSearch(arr, 40);
 console.log(result);


//  The efficiency of linear search, binary search, and jump search depends on the size and 
//characteristics of the data set you are working with. Each algorithm has its own advantages and disadvantages:

// Linear Search:
// Advantages:
// Simple and easy to implement.
// Works on both sorted and unsorted arrays.

// Disadvantages:
// Time complexity is O(n), where n is the number of elements in the array. 
//This means that linear search can be slow for large data sets, especially when the target
// element is towards the end of the array.

// Binary Search:
// Advantages:
// Efficient for sorted arrays.
// Time complexity is O(log n), where n is the number of elements in the array. 
//This makes binary search significantly faster than linear search for large data sets.

// Disadvantages:
// Requires the array to be sorted beforehand.
// Not suitable for dynamic arrays where elements are frequently inserted or deleted,
// as maintaining the sorted order can be costly.

// Jump Search:
// Advantages:
// Efficient for large sorted arrays.
// Combines the benefits of both linear and binary search.
// Time complexity is O(√n), where n is the number of elements in the array. 
//This makes jump search faster than linear search and more efficient than binary search for certain data sets.

// Disadvantages:
// Requires the array to be sorted beforehand.
// Jump size needs to be carefully chosen for optimal performance.
// Which one is better?

// For small data sets or unsorted arrays, linear search may be sufficient due to its simplicity.
// For large sorted arrays, binary search is generally the best choice due to its efficient time 
//complexity of O(log n).
// Jump search can be a good alternative to binary search for very large arrays,
// especially when the size of the array is unknown or when memory access is expensive, 
//as it performs fewer comparisons than binary search for the same number of elements.

