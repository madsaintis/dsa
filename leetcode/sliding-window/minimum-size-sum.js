// Problem Statement:
// Minimum Size Subarray Sum

// Given an array of positive integers nums and a positive integer target, 
// return the minimal length of a contiguous subarray [nums[l], nums[l+1], ..., nums[r-1], nums[r]] of 
// which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint, with a sum of 7.

const findMinimumSize = (nums, target) => {
    let sum = 0
    let windowStart = 0
    let minLength = Infinity

    for(let i = 0; i < nums.length ; i++) {
        sum = sum + nums[i]

        while(sum >= target) {
            minLength = Math.min(minLength, i - windowStart + 1)
            sum -= nums[windowStart]
            windowStart++
        }
    }
    return minLength
}

let arr = [2,3,1,2,4,3]
let target = 7
// Expected Output: 2
console.log(findMinimumSize(arr, target))

arr = [1, 1, 1, 1, 1, 1, 1, 1]
target = 8
// Expected Output: 1
console.log(findMinimumSize(arr, target))

arr = [3, 1, 1, 1, 5, 1, 2, 1]
target = 3
// Expected Output: 8
console.log(findMinimumSize(arr, target))

arr = [1, 2, 3, 4, 5]
target = 11
// Expected Output: 1
console.log(findMinimumSize(arr, target))
