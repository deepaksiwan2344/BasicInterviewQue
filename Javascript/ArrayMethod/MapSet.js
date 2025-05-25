
//ES6 introduced several new features to JavaScript, including the Set data structure.
//it is a collection of unique value, Set automatically eliminate Dublicates;
/*
new Set does not modify the original array

Basic Properties of Set:
 1.Maintains Insertion Order.
 2. Only stores unique array.
 3. we can Store Primitive and Object Reference
 4. Iterable (can use for...of, forEach, etc.)


Creating a set:
const set1 = new Set(); // empty set
const set2 = new Set([1, 2, 3, 3]); // duplicates removed => {1, 2, 3}

Set Method:
add(value)	Adds a new value to the Set
delete(value)	Removes the specified value
has(value)	Returns true if the value exists
clear()	Removes all values from the Set
size	Returns the number of values


Key Difference from Arrays:
Array: Access by index: arr[1]
Set: No index access — use for...of, or convert to array: Array.from(set)[1]


let array = new Set([23,445,33,23,2,3,34,23])
 array.add(4)
 array.has(47)
 array.delete(445)
 console.log(array)

 */


 
 
 