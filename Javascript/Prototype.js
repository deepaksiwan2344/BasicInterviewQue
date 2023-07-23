// JavaScript is a prototype-based language, which means that objects can 
// inherit properties and methods from other objects through a chain of 
// prototypes. 


// let obj = {
//   name: "deepak",
//   age: 23,
// };
// console.log(obj);
// let array = ["deepak"];
// console.log(array);

// function MyPrototype(name, roll) {
//   (this.name = name), 
//   (this.roll = roll);
// }
// let result = new MyPrototype("deepak", 2344);
// console.log(result);

// let obj1 = {
//   name: "deepak",
// };

// let obj2 = {
//   roll: 23,
//   __Proto__: obj1,
// };

// console.log(obj2);

function MyPrototype(name, age){
    this.name =  name,
    this.age = age

}

let result = new MyPrototype("deepak", 24);
let obj = {
    name:"Praveen"
}

let obj2 = {
    roll: 2344,
    __Prototype__: obj

}
console.log("obj2", obj2)

console.log(result)

