// Selection Sort - Time complexity O(n^2), Space Complexity O(1)

// Selection sort is a comparison sorting algorithm that 
// repeatedly selects the smallest (or largest, depending on sorting order) 
// element from the unsorted section and 
// moves it to the beginning (or end).


// Selection Sort for sorting in descending order
const selectionSort = (arr) => {
    let largestIndex;
    let temp;

    console.log("Before sorting")
    displayArrayElements(arr);
    for(let i = 0; i<arr.length; i++) {
        largestIndex = i;
        for(let j = i+1; j<arr.length; j++) {
            if(arr[j] > arr[largestIndex])
                largestIndex = j;
        }

        if(i !== largestIndex) {
            temp = arr[i];
            arr[i] = arr[largestIndex];
            arr[largestIndex] = temp;
        }
    }

    console.log("After Sorting")
    displayArrayElements(arr);
}

let array = [1,2,3,4,5,6,7,8];
let array2 = [11, 25, 12, 22, 64];

selectionSort(array);
selectionSort(array2);


// Function to display array content
function displayArrayElements (arr) {
    let string = "";

    for(const nums of arr)
        string += nums + ', '

    string = string.trim();
    string = string.slice(0, string.length - 1)
    console.log(string + '\n')
}


