// Encapsulation in JavaScript refers to the bundling of data and related
// functions (methods) into a single entity.

const car = {
    _color: "blue",

    //Public Method
    setColor: function(color){
        this._color = color
    },
    getColor: function(){
        return this._color
    }

}

console.log(car.getColor());

car.setColor("red")
console.log("setMethod",car.getColor())