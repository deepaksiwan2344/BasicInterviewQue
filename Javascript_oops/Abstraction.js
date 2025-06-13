
/*Abstraction is the concept of hiding internal details and showing only the essential features of an object.
 example of Abstraction




class Shape {
  constructor(name) {
    this.name = name;
  }
  calculateArea() {
    throw new Error("Abstract Method");
  }

  displayInfo() {
    return `this is a ${this.name}`;
  }
}


class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}


const circle = new Circle(5)
console.log(circle.calculateArea())
console.log(circle.displayInfo())

*/

/*
class Car {
    #engineStarted = false;
    engineStart(){
        this.#engineStarted = true
        console.log("engine Started")
    }
    drive(){
        if(this.#engineStarted){
            console.log("car is starting")
        }else{
            console.log("car is not starting")
        }
    }
}

const myCar = new Car();
console.log(myCar.engineStart())
console.log(myCar.drive())
Here: #engineStarted is hidden from outside access.

*/


 
