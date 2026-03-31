//leetCode 3Sum question number 15

let nums = [-1,0,1,2,-1,-4]
 
 console.log(threeSum(nums))

function  threeSum(nums) {
    let res = [];
    nums.sort((a, b) => a - b); // Step 1: sort array

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                // skip duplicates
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
};
