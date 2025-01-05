//Advance recurcive function
 
//sorting a array by recursive function


let array = [2, 4, 6, 8, 10, 1];
let i = 0;
let j = 1;
let newarray = [];


function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) { // Use array.length - 1 to avoid out-of-bounds comparison
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}


function sortCheck(array) {
    if (isSorted(array)) {
        newarray = array?.slice(); 
        return;
    } else if (array[i] <= array[j]) {
        i++;
        j++;
        sortCheck(array);
    } else {
        [array[i], array[j]] = [array[j], array[i]];
        i = 0;
        j = 1;
        sortCheck(array);
    }
}
sortCheck(array);
console.log(newarray);