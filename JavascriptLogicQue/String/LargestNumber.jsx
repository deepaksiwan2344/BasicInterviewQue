// Leetcode Question 179


let nums = [23,12,34,5]
//Output: "5342312"
console.log(largestNumber(nums))
function  largestNumber(nums) {
    let strNums = [];
    for(let i = 0; i < nums?.length; i++){
        strNums[i] = nums[i] + ""
    }
    for (let i = 0; i < strNums.length - 1; i++) {
        for (let j = 0; j < strNums.length - i - 1; j++) {
            let ab = strNums[j] + strNums[j+1];
            let ba = strNums[j+1] + strNums[j];
            if (ab < ba) {
                let temp = strNums[j];
                strNums[j] = strNums[j+1];
                strNums[j+1] = temp;
            } 
        }   
    }
    if (strNums[0] === "0") return "0";
    let result = "";
    for(let i = 0; i < strNums?.length; i++){
        result += strNums[i]
    }
    return result;
};
