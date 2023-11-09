// Insertion Sort - Time complexity O(n^2), Space Complexity O(1)

// Insertion sort is a comparison sorting algorithm that 
// repeatedly selects the smallest (or largest, depending on sorting order) 
// element from the unsorted section and 
// moves it to the beginning (or end).


// Insertion Sort for sorting in ascending order

const insertionSort = (arr) => {
    let current;
    let j;

    console.log("Before sorting")
    displayArrayElements(arr);

    for (let i = 1; i < arr.length; i++) {
        current = arr[i];
        j = i - 1;
        
        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
          arr[j + 1] = arr[j];
          j--;
        }

        arr[j + 1] = current;
    }

    console.log("After sorting")
    displayArrayElements(arr);
}

let array = [8, 4, 1, 5, 9, 2];
insertionSort(array);

// Function to display array content
function displayArrayElements (arr) {
    let string = "";

    for(const nums of arr)
        string += nums + ', '

    string = string.trim();
    string = string.slice(0, string.length - 1)
    console.log(string + '\n')
}