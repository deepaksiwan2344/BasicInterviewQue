//Advance recurcive function
 
//sorting a array by recursive function



let array = [2,4,6,8,10,1]
let i = 0;
let j = 1 
let newarray = []

function isSorted(array){
    for(let i = 0; i< array.length; i++){
        if(array[i]< array[j]){
            return false
        }
    }
    return true
}



function sortCheck(array){
    if (isSorted(array)){
         newarray = array;
        return 
        
    }
    else if(array[i] < array[j]){
        i++;
        j++
        sortCheck(array)
    }else{
      [array[i],array[j]] = [array[j],array[i]]
      i = 0;
      j = 1
      sortCheck(array)
    }
}

let result = sortCheck(array)
console.log(newarray)
