function moveZeroes(nums) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            index++;
        }
    }

    return nums;
}

console.log(moveZeroes([2,0,45,6,7,0,8,7]))

/* Another method */

function moveZeroes(nums) {
    let obj = {
        zero: [],
        nonZero: []
    };
    
    for(let value of nums){
        if(value === 0){
            obj.zero.push(value)
        }else{
            obj.nonZero.push(value)
        }
    }
    return [...obj.nonZero, ...obj.zero]
    
    
}

console.log(moveZeroes([2,0,45,6,7,0,8,7]))