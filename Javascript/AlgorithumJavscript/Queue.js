//queue 
//FIFO  FIRST IN FIRST OUT

let queue = [];
let currentSize = queue.length;
let maxsize = 5

function enqueue(newvalue){
        queue[currentSize] = newvalue;
        currentSize++;
}

function dequeue(){
    for(let i = 0; i< queue.length; i++){
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

