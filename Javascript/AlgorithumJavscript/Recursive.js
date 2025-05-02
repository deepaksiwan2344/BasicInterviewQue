//Advance recurcive function
 
//sorting a array by recursive function


let array = [2, 4, 6, 8, 10, 1];
let newarray = [];

function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

function sortCheck(array, i = 0, j = 1) {
    if (isSorted(array)) {
        newarray = array.slice();
        return newarray;
    } else if (array[i] <= array[j]) {
        return sortCheck(array, i + 1, j + 1);
    } else {
        [array[i], array[j]] = [array[j], array[i]];
        return sortCheck(array, 0, 1);
    }
}

console.log(sortCheck(array)); // Output: [1, 2, 4, 6, 8, 10]
