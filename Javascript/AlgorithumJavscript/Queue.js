//queue is a linear Datastructor which follow
//FIFO  FIRST IN FIRST OUT

let queue = [];
let currentSize = queue.length;
let maxsize = 5

function enqueue(newvalue){
        queue[currentSize] = newvalue;
        currentSize++;
}


function dequeue(){
    for(let i = 0; i < queue.length; i++){
        queue[i] = queue[i + i];
    }
    currentSize--;
    queue.length = currentSize;
}
 
enqueue(23);
enqueue(24);
enqueue(27);
enqueue(20);
dequeue(20)
console.log(queue)

//Aplication of queue
// queues in JavaScript can be used for various purposes, and one common use case is implementing a
//  task queue for managing asynchronous operations. Here's an example of how you can use a queue 
//  in JavaScript to process asynchronous tasks sequentially:

