//Object in Advance

let data = new Map ([
    ['name', 'deepak'],
    ['age', 23]
])

// data.set('address', 'Noida')
// console.log(data.keys())
// console.log(data.has('name'))
// console.log(data.set(() =>  {}, "this is arrow function"))


// data.forEach((item, index)=>{
//     console.log(item)
// })

for([index, values] of data){
    console.log(values)
}

//difference between {} and new Map() Object
//1. Key type only single and symbols where as in new Map() key is Any data type(object, arrays, number, function)
// Object {}
// let obj = {};
// let key1 = { id: 1 };
// let key2 = { id: 2 };

// obj[key1] = "Value 1"; 
// obj[key2] = "Value 2"; 

// console.log(obj[key1]); // "Value 2" (Overwrites because key1.toString() === key2.toString() === "[object Object]

// new Map()
// let map = new Map();
// let key1 = { id: 1 };
// let key2 = { id: 2 };

// map.set(key1, "Value 1");
// map.set(key2, "Value 2");

// console.log(map.get(key1)); // "Value 1" (Correct behavior)
// For small data, {} is fine.
// For large datasets, Map is better.



/***************Create a function to add dynamic key and value in a object ***********/
function customObjAdd (obj, newProperties){
    for(let key in newProperties){
        console.log(newProperties.hasOwnProperty(key))
        if(newProperties.hasOwnProperty){
            obj[key] = newProperties[key]
        }
    }
    return obj
}

let user = {
   name: "Deepak",
   age: 23
}
console.log(customObjAdd(user, {city: "", location: "Sector: 66"}))


/*
let obj = {
    name: "Deepak",
    age: 25
}

obj.city = "Noida";
let obj2 = obj;
//here obj2 point the same memory of obj1 show name of the value change to pradeep
obj2.name = "Pradeep",
obj2.address = "Uttar Pradesh"

console.log(obj);//{ name: 'Pradeep', age: 25, city: 'Noida', address: 'Uttar Pradesh' }
console.log(obj2)//{ name: 'Pradeep', age: 25, city: 'Noida', address: 'Uttar Pradesh' }

*/

/*
let obj = {
    name: "Deepak",
    age: 25
}

obj.city = "Noida";
let obj2 = {...obj};
{...obj} can be written on also JSON.parse(JSON.stringify(obj));
//here obj2 point the diffrent memory location of obj1 show name of the value change to pradeep
obj2.name = "Pradeep",
obj2.address = "Uttar Pradesh"

console.log(obj);//{ name: 'Deepak', age: 25, city: 'Noida' }
console.log(obj2)//{ name: 'Pradeep', age: 25, city: 'Noida', address: 'Uttar Pradesh' }

*/

/*
Note: call,bind and apply method
let obj = {
    name: "Deepak",
    age: 25,
    details: function(){
        console.log(`my name is ${this.name}`);
    }
};

// call method invokes the function with a specific `this` context
obj.details.call({ name: "Pradeep" }); // Output: my name is Pradeep

let obj = {
    name: "Deepak",
    age: 25,
    details: function() {
        console.log(`my name is ${this.name}`);
    }
};

// bind method is similar to call, but bind returns a function
let bindObj = obj.details.bind({ name: "Pradeep" });
bindObj(); // Output: my name is Pradeep



*/

/*
let obj = {
    a: 1,
    b: 3,
    sum(){
        return `${this.a} + ${this.b}`
    }
    
}
let obj2 = obj.sum;
console.log(obj2()) 
output undefined + undefined


*/

/*
let obj = {
    a: 1,
    b: 3,
    sum(){
        return `${this.a} + ${this.b}`
    }
    
}
let obj2 = obj.sum.bind(obj)
console.log(obj2())

//output 1 + 3

let obj = {
    a: 1,
    b: 3,
    sum(){
        return this.a + this.b
    }
    
}

let obj2 = obj.sum.bind(obj);
console.log(obj2())
//output 4

*/

//In object we can not use loop like for 
//we can ony use for in loop for the key 










