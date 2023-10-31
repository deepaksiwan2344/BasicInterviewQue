// Abstract Example


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

class Cricle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Cricle(5)
console.log(circle.calculateArea())
console.log(circle.displayInfo())


 
