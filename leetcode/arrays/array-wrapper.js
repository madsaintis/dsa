// https://leetcode.com/problems/array-wrapper/description/

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    let total = 0;
    for(let i = 0; i < this.nums.length; i++) {
        total += this.nums[i];
    }
    return total
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return '[' + this.nums.join(',') + ']';
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */