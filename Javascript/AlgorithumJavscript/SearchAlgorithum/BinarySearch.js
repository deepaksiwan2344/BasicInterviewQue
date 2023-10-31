//Binary Search
//Binary Search work only on sorted array
//Divide & Conquerer Technique
//find the index of given number is a sorted array 7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];




//algorithum
// min =0,
// element = 1
// max = array.length;
// minIndex = (min + max)/2 => (0+14) => 7 (index), element = 8
// if(arary[minIndex] < Number(7))
// minIndex+1




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