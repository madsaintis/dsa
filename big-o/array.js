// Search for value function

const searchArray = (array, target) => {
  for (const [index, value] of array.entries()) {
    if (value === target) return index;
  }
};

// Update array on index n

const updateArray = (array, index, newValue) => {
  array[index] = newValue;
};

// Insert new element to index n

const insertElementIntoArray = (array, index, newValue) => {
  console.log(`Inserting ${newValue} into index ${index}.`);
  let arr = new Array(array.length + 1);
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      arr[i] = newValue;
    } else {
      arr[i] = array[j];
      j++;
    }
  }
  return arr;
};

// Delete an element from array in index n

const deleteElementFromArray = (array, index) => {
  console.log(`Deleting element from index ${index}.`);

  let arr = new Array(array.length - 1);
  let k = 0;
  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      continue; // Skip the element at the index we want to delete
    }
    arr[k] = array[i]; // Assign the element to the new array
    k++; // Increment the index for the new array
  }
  return arr;
};

// Initialize array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //  O(1)

// Traversing array or display - O(n)

for (const property of arr) {
  console.log(`${property}`);
}

// Search for a value - O(n)

let target = 5;
console.log(`${target} is in index ${searchArray(arr, target)}`);

// Update an index O(1)

let newValue = 3;
let targetIndex = 9;
updateArray(arr, targetIndex, newValue);
console.log(arr);

// Insert new element at index n

newValue = 10;
targetIndex = 5;
arr = insertElementIntoArray(arr, 5, newValue);
console.log(arr);

// Delete an element from array at index n
targetIndex = 3;
arr = deleteElementFromArray(arr, targetIndex);
console.log(arr);

// let map = new Map()
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
//
// const object = { a: 1, b: 2, c: 3 };
// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// for (const property of map) {
//   console.log(`${property}: ${object[property]}`);
// }
