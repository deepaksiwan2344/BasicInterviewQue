//Binary Search
//Binary Search work only on sorted array
//Divide & Conquerer Technique
//find the index of given number is a sorted array 7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


//algorithm
// min =0,
// element = 1
// max = array.length;
// minIndex = (min + max)/2 => (0+14) => 7 (index), element = 8
// if(array[minIndex] < Number(7))
// minIndex+1

//its time complexity is O(log n)
//Note: O(log n) is mush faster than O(n)


function BinarySearch(array, number) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      if (array[mid] === number) {
        return mid; 
      } else if (array[mid] < number) {
        min = mid + 1; 
      } else {
        max = mid - 1; 
      }
    }
    return -1; 
  }
  
  let result = BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
  console.log(result); 

  //Binary search using for loop
function BinarySearch(arr, target){
  for(let left = 0; right = arr.length - 1; left <= right){
      let mid = Math.floor((left + right) / 2)
      if(arr[mid] === target) return mid
      else if(arr[mid] < target) left = mid + 1
      else  right = mid - 1
  }
  return -1
}

let arr = [23,45,67,89,200, 456];
console.log(BinarySearch(arr, 200))


