let arr = [1,0,0,1,2,1,0,2,1,2,0];

function sort(arr){
    let obj = {}
    for(let num of arr){
        if(obj[num]){
            obj[num] += 1;
        }
        else
        obj[num] = 1;
    }
    let zeros = obj['0']
    let ones =  obj['1']
    let two = obj['2']
    for(let i=0;i<zeros;i++){
        arr[i] = 0;
    }
    for(let i=zeros;i<zeros+ones;i++){
            arr[i] = 1
    }
    for(let i=zeros+ones;i<arr.length;i++){
        arr[i] = 2
    }
    console.log("arr", arr);
}

sort(arr);
