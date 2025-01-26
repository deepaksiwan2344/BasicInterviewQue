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

  //different detween call() and bind()
  //1. call( immediately invokes the function) where as bind not immediately invoked

  let obj = {
    name: "deepak",
    age: 23,
    address: function (){
        console.log(`my name is ${this.name}`)
    }
}
 let result =  obj.address.bind({name: "pradeep"})
 console.log(result())

 //apply method is similar to call and bind but instead of passing individual argument we pass array or array like object

 function introduce(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person2 = { name: "Deepak" };

introduce.apply(person2, ["Hello", "!"]); 

//Why we used call, bind and apply
//1.Borrowing method: You can borrow methods from one object or prototype and apply to another
//2.When working with function dynamically


