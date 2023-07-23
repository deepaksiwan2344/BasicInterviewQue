//Recursive function 



//example without condition 
function  add(){
    console.log("deepak")
    add() 
}
add();


//example of  termination condition

function add(n){
      if(n < 10){
        console.log("hello ")
        add(n + 1)
      }
}
add(n);



