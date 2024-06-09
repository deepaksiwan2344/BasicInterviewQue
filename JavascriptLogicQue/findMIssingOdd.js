
//we want to find missing odd number of given array

let arr = [5,7,9,11,15,17]
for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    let next = current + 2;
    // with if else condition

    // if(arr[i + 1] === next) continue;
    // else{
    //     console.log(next)
    //     break
    // }

    // with out else condition
    if(arr[i + 1] !== next){
        console.log(next);
        break;
    }
}


