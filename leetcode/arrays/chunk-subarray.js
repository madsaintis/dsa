// https://leetcode.com/problems/chunk-array/


/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
// var chunk = function(arr, size) {
//     let result = []
//     let chunk = new Array()

//     for(let i = 0; i< arr.length; i++) {
//         if(chunk.length === size) {
//             result.push(chunk);
//             chunk = []
//         }

//             chunk.push(arr[i])
//     }

//     if(chunk.length !== 0)
//         result.push(chunk)

//     return result
// };

var chunk = function(arr, size) {
    var chunkedArray = [];
    var index = 0;
    while (index < arr.length) {
      chunkedArray.push(arr.slice(index, index + size));
      index += size;
    }
    return chunkedArray;
  }
  