//Recursive function
//A recursive function is a function that calls itself as a part of its execution process.

//example without condition
function add() {
  console.log("deepak");
  add();
}
add();

 //example of  termination condition

 
function add(n) {
  if (n < 10) {
    console.log("hello ");
    return add(n + 1);
  }
}
add(n);
