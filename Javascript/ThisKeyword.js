// The "this" keyword in JavaScript refers to the object that is currently executing the code.
//The this keyword in JavaScript refers to the current execution context or scope.
//3. its value is dynamic and depend on how the function is called, not where it is defined.
//4. this keyword work both in normal and arrow function is different.


const myObject = {
  myProperty: 42,
  myMethod() {
    console.log(this.myProperty);
  },
};


myObject.myMethod(); // Output: 42
const myObject1 = {
  myProperties: 39,
  myMethod1() {
    console.log(this.myProperties);
  },
};
myObject1.myMethod1();


//arrow function 

// let obj = {
//   name: "Deepak",
//   age: 12,
//   fullAddress: () =>{
//     console.log(this.name) //output undefind

//   }
// }

// obj.fullAddress();


'use strict'
let obj = {
    name: "deepak",
    age: 23,
    address: {
         name: "Diwansh",
         age: 37,
         address: function (){
             console.log(this.name)
         }
         
    }
}
obj.address.address()





