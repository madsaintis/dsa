/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let blue = 0, white = 0, red = 0;

    for(let i = 0; i < nums.length; i++) {
        nums[i] === 0 ? ++red : nums[i] === 1 ? ++white : ++blue
    }

    for(let i = 0 ; i < nums.length; i++) {
        if(red !== 0) {
            nums[i] = 0
            --red
        }

        else if(white !== 0) {
            nums[i] = 1
            --white
        }

        else {
            nums[i] = 2
            --blue
        }
    }

};