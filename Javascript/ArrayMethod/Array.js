//Array Method

// push(): Adds one or more elements to the end of an array and returns the
//  new length of the array.

// pop(): Removes the last element from an array and returns that element.

// shift(): Removes the first element from an array and returns that element.

// unshift(): Adds one or more elements to the beginning of an array and
//  returns the new length of the array.

// concat(): Combines two or more arrays and returns a new array.

// slice(): Returns a shallow copy of a portion of an array 
// into a new array.

// splice(): Changes the contents of an array by removing, replacing, 
// or adding elements.

// forEach(): Executes a provided function once for each array element.

// map(): Creates a new array with the results of calling a provided 
// function on every element in the array.

// filter(): Creates a new array with all elements that pass the test
// implemented by the provided function.

// reduce(): Applies a function to an accumulator and each element
//  in the array to reduce it to a single value.

let array = [[2, 3, 5, [12,4,5,]], 23, 4];

let singlearray  = [].concat(...array);
let finalarr = [].concat(...singlearray)

