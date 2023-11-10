// https://leetcode.com/problems/monotonic-array/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isMonotonic = function(nums) {
    
    return nums[0] < nums[nums.length-1] ? decreasing(nums) : increasing(nums)
    
    function increasing (nums) {
        for(let i = 1; i < nums.length; i++) {
            if(nums[i] > nums[i-1])
                return false
        }

        return true;
    }

    function decreasing (nums) {
        for(let i = 1; i < nums.length; i++) {
            if(nums[i] < nums[i-1])
                return false
        }

        return true;
    }
    
};