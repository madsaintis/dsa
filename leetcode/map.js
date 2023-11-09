function countDivisibleSumPairs(arr, k) {
    const remainderCount = new Map();
    let count = 0;

    for (const num of arr) {
        const remainder = num % k;
        const complement = (k - remainder) % k;

        count += remainderCount.get(complement) || 0;
        remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
    }

    console.log([...remainderCount.entries()]);
    console.log("Count of divisible sum pairs:", count);
}

// Example usage
const arr = [1, 3, 2, 6, 4, 5, 9];
const k = 3;
countDivisibleSumPairs(arr, k);
