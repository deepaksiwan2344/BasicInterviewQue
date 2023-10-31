//Reverse array with recursion function 

 let array = [2,4,4,56,7,1];
 function customReverse(array, start, end){
    if(start <= end){
        temp = array[start];
        array[start] = array[end];
        array[end] = temp
        customReverse(array, start + 1, end - 1)
    }
    return array
 }

 console.log(customReverse(array, 0, array.length - 1))


 //reverse array using for Loop

 let arr = [23,56,7,8,45,67,89]

 function reversearr(arr){
     let len = arr.length;
     let min = 0
     let mid = Math.floor( (min + len)/ 2);
     console.log("mid", mid)
     for(let i = 0; i < mid; i++){
         temp = arr[i];
         arr[i] = arr[len - 1 - i]
         arr[len - 1 - i] = temp
     }
     return arr
 }
 
 console.log(reversearr(arr))
 
 
 


 
