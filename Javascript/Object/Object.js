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







