//THere are two scope in javascript local scope and global scope

//Global scope refers to a functions and variable that are accessible in anyware
//what is function scope in javascript

// function myFunction() {
//     var x = 10;
//     console.log(x);
//   }
//   myFunction();
//console.log(x);  x is not defined;




// {
//   let  x = 12;
//   console.log(x)
// }
// console.log("x", x) //x is not defined

// function Scope(){
//   let x = 12;
//   console.log(x)
// }
// Scope()

// const scope = () => {
//   let y = 19
//   if (y % 2 === 0) {
//     console.log("even")


//   }
//   console.log("odd")
// }
// scope()


// var string = "deepak";
// function myFunction(){
//   console.log(this.string);
// }
// myFunction();

// const obj = {
//   myage :23,
//   myname(){
//     console.log(this.myage)

//   }
// }
// obj.myname()

// const obj = {
//   myage:24,
//   myaname(){
//     console.log("this", this.myage)
//   }
// }
// obj.myaname();
 var a = 10;
function Scope(){
  if(true){
    var b = 20;
    console.log(b)

  }
  console.log(b)
}
Scope();

function scope(){
   let x = 10;
   if(x > 9){
     console.log("x is grater than 9")
     const p =10; // block scope
     let r =20; //block scope;
     let w = 30
   }
   console.log("p", p) //p is not defined because p is block scope
   console.log("r", r) //p is not defined because p is block scope
   console.log("w", w) //its  output is 30 because it is functional scope
}
scope()













//What is Lexical scope and Scope chain ?
//Lexical scope

// function foo(){
//   let x = 12;
//   console.log(x);
// }
// foo();
//console.log(x)// output x is not definded.



//Scope chain 
const x = 10;
function foo() {
  console.log(x);
}
function bar() {
  const x = 20;
  foo();
}

bar();






