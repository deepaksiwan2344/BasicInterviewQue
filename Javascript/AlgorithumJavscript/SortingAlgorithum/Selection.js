//Selection sorting

// Start with an unsorted array of elements.
// Set the current position as the first element (position 0).
// Find the smallest element in the unsorted portion of the array.
// Swap the smallest element with the element at the current position.
// Move the current position one step to the right.
// Repeat steps 3-5 until the entire array is sorted.

//Selection sort has a time complexity of O(n^2),

function SelectionSort(array){
    for (let i = 0;i< array.length; i++){
        let min = i;
        for(let j = i + 1; j < array.length; j++){
            console.log(array[j])
            if(array[j] < array[min]){
                min = j;
                
            }
        }
        if(i !== min){
            temp = array[i];
            array[i] = array[min]
            array[min] = temp
        }
    }
    return array
}

let array = [23,5,67,8,90,1]
let sort = SelectionSort(array);
console.log(sort)