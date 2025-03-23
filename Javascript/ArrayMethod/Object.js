//In JavaScript, an object is a data type that stores data in key-value pairs.

// function sumByKey(arr, key) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i][key];
//     }
//     return { [key + "Total"]: sum };
//   }



//   const data = [  { name: "John", age: 25, salary: 50000 },  { name: "Jane", age: 30, salary: 60000 },  { name: "Bob", age: 35, salary: 70000 }];
//   console.log(sumByKey(data, "salary")); 

const data = [  { name: "John", age: 25, salary: 50000 },  { name: "Jane", age: 30, salary: 60000 },  { name: "Bob", age: 35, salary: 70000 }]; 
function  totalsalary(arr, key){
    let sum = 0
    for(let i = 0; i < arr?.length; i++){
        console.log("arr[i]", arr[i][key])
        sum += arr[i][key] //dynamic access salary

    }
    console.log("sum", sum)
    return sum
}

console.log(totalsalary(data, "salary"))

//convert array into object

// const arr = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
// let obj = Object.fromEntries(arr1);
// console.log("obj", obj)


// const obj ={
//     a: "one",
//     b: "two",
//     a: "three"
// }

// console.log("obj", obj)

// const a = {};
// const b= {key: "b"};
// const c ={key:"c"};


// a[b] = 123
// a[c] = 234

// console.log(a[b]);

//what is json.stringfy and jsonparse

const user = {
    name: "deepak", 
    age: 23
}
const jsonobj = JSON.stringify(user)
console.log("jsonobj", jsonobj)
console.log("user", JSON.parse(jsonobj))




// console.log([..."deepak"])
// what destructuring in object
//Example of nested object
// const user={
//     name:"deepak",
//     age:"23",
//     fullname:{
//         name:"deepak",
//         lastname:"kumar"
//     }
// }





// const {fullname: {name}} = user
// console.log(name)


//console.log({a:1} == {a: 1}) //output false



// const value = {number: 10}
// const multiply = (x = {...value})=>{
//     console.log((x.number *= 2));
// };
//  multiply()
//  multiply(value)

//How to deep copy / clone an object

// let user= {
//     name: "deepak",
//     age: 23

// }
// const objclone =   Object.assign({}, user)
// console.log(user)


// const obj = {
//     firstname: "deepak",
//     lastname: "kumar",
//     getData(){
//        console.log(obj.firstname)
//     }
// }

// obj.getData();

//nested Object

// const nestedObj ={
//     details:{
//         name: "pappu",
//         lastname: "kumar"
//     }
// }
// console.log(nestedObj.details.name)


// console.log("this", this)

// console.log(this)
// let employeeId ={
//     id: 12,
//     name: "deepak",
//     age:24,

// }

// for(obj in employeeId){
//     console.log("obj", obj)
// }

// let employeearay = Object.values(employeeId)
// console.log(employeearay);

//Bind
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };

// const logFullName = function () {
//     console.log(this.fullName());
// };



// const logJohnsFullName = logFullName.bind(person);

// logJohnsFullName(); // Output: "John Doe"


//Bind Method

// In JavaScript, bind() is a method that creates a new function with the same body as an
//  existing function, but with a fixed this value and optionally some predefined arguments. The bind() method is called on a function and takes one or more arguments.

let object ={
    firstname: "deepak",
    lastName: "kumar",
    fullname: function (){
        return this.firstname + " "+ this.lastName;
    }
};
const logFullName1 = function(){
    console.log(this.fullname());
}
const logdeepakfullname = logFullName1.bind(object)
console.log(logdeepakfullname())


//Note  difference between call and bind method

//1. Calls the function immediately where as bind() return a new function for later use

//Note: Apply Method
//Arguments are passed as an array (instead of individual arguments like in call()).


// let student1 = {
//     name: "Deepak",
//     getDetails: function (age, city){
//         return `My name is ${this.name} and age is ${age} and city is ${city}`;
//     }
// }

// let result = student1.getDetails.apply(student1, [26, "Noida"]);
// console.log(result);

//Note Where we need call(), bind() and apply()
// 1. Borrowing methods from one object to another.
// 2.Explicitly setting the this value in a function.
// 3.Controlling function execution.











