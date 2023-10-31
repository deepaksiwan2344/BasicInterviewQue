//Random Method

let ran = Math.random();
console.log(ran)

//print random value between 1 to 10;

function random(min, max){
    return Math.floor(Math.random() * (max  - min) + min)
    
}
console.log(random(1, 11));
