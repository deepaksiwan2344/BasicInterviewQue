//call
// call() and apply() are used to invoke a function with a specific context, which means you can set the
// this value to any object you want. 
//call() and bind() are both methods in JavaScript used to control the value of the this keyword in a function,
const person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  const anotherPerson = {
    name: "Jane",
    age: 25
  };
  
  person.greet.call(anotherPerson);


  //bind
  const personbind = {
    name: "John",
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  const anotherPersonbind = {
    name: "Jane",
    age: 25
  };
  
  const bindGreet = personbind.greet.bind(anotherPersonbind);
  bindGreet();