// In JavaScript, a class is a type of object constructor that defines a set of properties
// and methods that can be used to create new objects of that type.
//how to create class in javascript
//A class is a blueprint for creating objects with shared properties and methods.



class Car {
  getModule() {
    return "car Module is 2023";
  }
}

let carObj = new Car();
console.log("carObj", carObj);
let module = carObj.getModule();
console.log(module);


class Scoter {
  constructor(brand, price) {
    (this.brand = brand), (this.price = price);
  }
  getModule() {
    return "old module";
  }
}

let ScoterObj = new Scoter("new", 20000);
console.log(ScoterObj.getModule());


class product {
  constructor(rice, price) {
    (this.rice = rice), (this.price = price);
  }
}
let allproduct = new product("newrice", 30);
console.log("allproduct", allproduct);

class car {
  constructor(brand, price, modle) {
    (this.brand = brand), (this.price = price), (this.codle = modle);
  }
}

let carproperty = new car("good", 300, "old");
console.log(carproperty);

class motercycle {
  modle() {
    return "all old modle";
  }
}
let obj = new motercycle();
console.log("obj", obj.modle());
