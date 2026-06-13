
//Call by Reference: A method of passing arguments where a function receives a reference to the original 
//variable, so changes made inside the function affect the original data.


function change(obj) {
  obj.name = "React";

  obj = {
    name: "Angular",
  };
}

const tech = {
  name: "JavaScript",
};

change(tech);

console.log(tech.name);

function increment(num) {
  num++;
}

let count = 10;

increment(count);

console.log(count); // 10


// var obj = {
//   name: "deepak",
//   lastname: "kumar",
// };

// let obj1 = {
//   name: "deepak",
//   lastname: "kumar",
// };


// console.log(obj == obj1);
// console.log(typeof obj);

// let x = [12, 34, 56, 56];
// let y = [12, 34, 56, 56];
// console.log(x === y);



let obj = {
  name: "deepak",
  lastname: "kumar",
  age: 12
}

let objlength = Object.keys(obj).length;
console.log(objlength)


