// In JavaScript, a class is a type of object constructor that defines a set of properties
// and methods that can be used to create new objects of that type.

//how to create class in javascript
class Car{
    getModle(){
        return "car Modle is 2023"
    }
}
let carObj = new Car();
let modle = carObj.getModle();
console.log(modle)

class Scoter{
    constructor(brand, price){
        this.brand = brand,
        this.price = price
    }
    getModle(){
        return "old modle"
    }

}

let  ScoterObj = new Scoter('new', 20000);
console.log(ScoterObj.getModle())

class product{
    constructor(rice, price){
    this.rice = rice,
    this.price = price
    }
}
let allproduct = new product('newrice', 30)
console.log("allproduct", allproduct)


