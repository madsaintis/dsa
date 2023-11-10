// Shifting array by n

const shiftArray = (array, n) => {
    console.log(`Shifting array by ${n}`)
    let len = array.length;;
    let newArray = new Array(len);
    for(let i = 0; i < array.length; i++) {
        newArray[(i+n)%len] = array[i];
    }

    return newArray;
}

function rightShiftArray(arr, n) {
    n = n % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, n - 1);
    reverse(arr, n, arr.length - 1);

    function reverse(arr, start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    return arr
}


let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

console.log(arr)
console.log(shiftArray(arr, 3))
console.log(rightShiftArray(arr, 6))