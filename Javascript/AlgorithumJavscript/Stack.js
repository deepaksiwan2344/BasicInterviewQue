//Stack algorithum

// A stack is a linear data structure that follows the Last-In-First-Out (LIFO)
//  principle. It is a collection of elements organized in a sequential manner
//  where the addition and removal of elements occur only at one end called the "top" 
//  of the stack.


//push and pop
//In a given empty array how to element push or pop



let data = [];
let currentSize = data.length;
let max = 5;

function push(newvalue, max){
    if (currentSize > max){
        return -1
    }else{
    data[currentSize] = newvalue
    currentSize += 1
    }
    
}

push(23);
push(23);
push(23);
push(23);
push(23);
push(23);
push(23);
push(23);
push(23);
console.log(data)


//remeove element from a array
function pop(){
    if(currentSize > 0){
        currentSize -= 1;
        data.length =currentSize;
    }

}

pop(23);
pop(23);
console.log("pop", data)


//Application of stack
// In JavaScript, you can use a stack data structure for various purposes, such as managing 
// function calls, tracking history, and solving certain algorithmic problems


/*
 stack example with class

class Stack {
  constructor(maxSize) {
    this.stack = [];
    this.max = maxSize;
  }

  push(value) {
    if (this.stack.length >= this.max) {
      console.log("Stack overflow");
      return;
    }
    this.stack.push(value);
  }

  print() {
    console.log(this.stack);
  }
}

const s = new Stack(5);
s.push(10);
s.push(20);
s.print(); // Output: [10, 20]

*/
