//OOPs
 

// Object-Oriented Programming (OOP) is a programming model(example) that organizes code around objects,
// which are instances of classes or prototypes, enabling the modeling of real-world entities
// with properties and methods.

//OOPS is not a programing laungauge

//three Important words to understant
//1: Class
//2: Object
//3: Inheritance
//4: polymorphism
//5: Abstraction: Abstraction involves hiding the internal details of how an object or function works.
//6: Encapsulation


//Object 
//Example of any man
//1. Properties: Full name, height
//2. Action: walk, eat, sleep



//2.Class: A class is a blueprint for creating objects with shared attributes and behaviors in 
//object-oriented programming.


//3. Inheritance 
//In JavaScript, inheritance is a mechanism that allows one class to inherit 
//properties and methods from another class. 

class Person {
    constructor(name, age){
        this.name= name;
        this.age= age;
    }
    greet(){
        console.log(`my name is ${this.name}`)
    }
}
const person1 = new Person("deepak", 25)
console.log(person1.greet())