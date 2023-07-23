//Linear Search

//TimeComplexity is  o(n)


 let arr = [12,4,5,6,89,40];
 function LinearSearch(arr, value){
     for(let i = 0; i<arr.length; i++){
        if(arr[i] == value){
            arr1.push(i)
        }
     }
     return arr1
 }
 let result = LinearSearch(arr, 40);
 console.log(result);

