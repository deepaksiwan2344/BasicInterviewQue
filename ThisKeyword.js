// The "this" keyword in JavaScript refers to the object that is currently executing the code.
//The this keyword in JavaScript refers to the current execution context or scope.

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
