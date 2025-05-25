/*

1. Find the Second Largest Number in an Array (without sorting)
2. Check if a String is a Rotation of Another
3. Detect a Loop in an Array Traversal (Tortoise-Hare logic)
4. Count Pairs with Given Sum
5. Check if a Number is a Power of Two (without using loops)
6. Majority Element in Array (> n/2 times)
7. Find First Repeated Character in a String
Input: "abcac"
Output: 'a'


let arr = [23, 45, 6, 7, 78, 34];

 Note: its time complexity is O(n)

console.log(findThirdSmallest(arr))
function findThirdSmallest(arr) {
  let f1 = Infinity;
  let f2 = Infinity;
  let f3 = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num === f1 || num === f2 || num === f3) continue;
    if (num < f1) {
      f3 = f2;
      f2 = f1;
      f1 = num;
    } else if (num < f2) {
      f3 = f2;
      f2 = num;
    } else if (num < f3) {
      f3 = num;
    }
  }
  return f3 === Infinity ? "No 3rd smallest value" : f3;
}

*/


/*
find fourth smallest num in a given array;

let arr = [23, 45, 6, 7, 78, 34];

console.log(findFourthSmallest(arr))
function findThirdSmallest(arr) {
  let f1 = Infinity;
  let f2 = Infinity;
  let f3 = Infinity;
  let f4 = Infinity;
  for(let i = 0; i < arr.length; i++){
      let num = arr[i]
      if(f1 === num && f2 === num && f3 === num && f4 === num) continue
      if(num < f1){
         f4 = f3;
         f3 = f2;
         f2 = f1;
         f1 = num
      }else if (num < f2){
          f4 = f3;
          f3 = f2;
          f2 = num
      }else if (num < f3){
          f4 = f3;
          f3 = num;
      }else if (num < f4){
          f4 = num
      }
  }
  return f4
  
}

*/