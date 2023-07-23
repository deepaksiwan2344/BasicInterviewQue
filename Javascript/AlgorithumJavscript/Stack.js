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