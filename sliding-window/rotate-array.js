// Problem Statement:
// Rotate Array

// Given an array, rotate the array to the right by k 
// steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:

// [7,6,5,4,3,2,1]
// [5,6,7,4,3,2,1]
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const rotate = (nums, k) => {
    k = k % nums.length;
    let countRotated = 0;
    for (let start = 0; countRotated < nums.length; start++) {
        let current = start;
        let prev = nums[start];
        do {
            const next = (current + k) % nums.length;
            const temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            countRotated++;
        } while (start !== current);
    }
}

// Example usage:
let arr1 = [1,2,3,4,5,6,7];
rotate(arr1, 3);
console.log(arr1); // Output: [5,6,7,1,2,3,4]