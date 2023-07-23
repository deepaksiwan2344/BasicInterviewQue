//Reverse a String with Stack;


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
console.log(data)
//rmeove element from a array
function pop(){
        lastRemovedItem = data[currentSize - 1]
        currentSize -= 1;
        data.length =currentSize;
        return lastRemovedItem
}
function convertstr(item){
    for(let i = 0; i<item.length; i++){
        push(item[i])

    }
    for(let i =0; i< item.length; i++){
       item[i] = pop()
    }

}



let str = "vikash";
str = str.split('');
convertstr(str)
console.log(str.join(''))







