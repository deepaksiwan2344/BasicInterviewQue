
// We have two kinds of object copies in JavaScript: shallow and deep. In a nutshell, shallow copies are used
//  for “flat” objects and deep copies are used for “nested” objects. By “flat” objects we mean objects that 
//  contain only primitive values. Nested objects mean objects that contain non-primitive values.


//shallowCopy

//In JavaScript, "shallow" typically refers to the copying of objects or arrays.
// const originalObject = {a: 1, b: 2};
// const shallowCopy = {...originalObject};
// shallowCopy.a = 3;
// console.log(originalObject); // Output: {a: 1, b: 2}
// console.log(shallowCopy); // Output: {a: 3, b: 2}
//deepCopy
// const originalObject1 = {a: 1, b: {c: 2}};
// const deepCopy = JSON.parse(JSON.stringify(originalObject1));
// console.log("deepCopy", deepCopy)
// deepCopy.b.c = 7;
// console.log(originalObject1); // Output: {a: 1, b: {c: 2}}
// console.log(deepCopy); // Output: {a: 1, b: {c: 3}}



let obj = {
    name: "deepak",
    lastname: "Kumar"
}

var obj1 =JSON.parse(JSON.stringify(obj));
obj1.name = "depesh"
console.log("obj1", obj1)
console.log("obj", obj)



// Object to copy
// const originalObj = { 
//     name: 'John', 
//     age: 30, 
//     hobbies: ['reading', 'traveling'] 
//   };
  
  // Create a deep copy of the object


//   const copiedObj = JSON.parse(JSON.stringify(originalObj));
//   // Change the value of a property in the copied object
//   copiedObj.name = 'Jane';
  
//   // Change the value of a property in the copied object's array
//   copiedObj.hobbies.push('cooking');
  
//   // Output the original and copied objects
//   console.log('Original Object:', originalObj);
//   console.log('Copied Object:', copiedObj);


//   let array = ["deepak", "praveen", "depesh"];
//   var array2 = array
//   array2.push("dewansh")
//   console.log("original array",array)
//   console.log("change array",array2)

  // Original array
// const originalArr = [1, 2, 3, {name: "John"}];
// // Shallow copy using spread operator
// const newArr = [...originalArr];
// console.log("newarray", newArr)

// // Modify the new array
// newArr[0] = 0;
// newArr[3].name = "Jane";

// console.log(originalArr); // [1, 2, 3, {name: "Jane"}]
// console.log(newArr); // [0, 2, 3, {name: "Jane"}]

// const jsonString = '{"name":"John","age":30,"hobbies":["reading","gaming"]}';

// const obj = JSON.parse(jsonString);
// console.log("obj", obj)


//deep copy and show copy also follow array like object


