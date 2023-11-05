// Problem Statement:

// Given an array of integers nums and an integer k, 
// find the maximum sum of a subarray containing exactly k elements.

// Example:

// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: 18
// Explanation: The subarray with the maximum sum is [5, 6, 7], with a total sum of 18.

const maxSumSubarrayOfSizeK = (nums, k) => {

    maxSum = 0;
    windowStart = 0;
    windowSum = 0;

    for(let i = 0; i < nums.length; i++) {
        windowSum += nums[i]

        if(i >= k - 1) {
            maxSum = Math.max(maxSum, windowSum)
            windowSum = windowSum - nums[windowStart]
            windowStart++
        }
    }

    return maxSum
}

let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3

console.log(maxSumSubarrayOfSizeK(nums, k))

