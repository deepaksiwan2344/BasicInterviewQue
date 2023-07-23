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
 
