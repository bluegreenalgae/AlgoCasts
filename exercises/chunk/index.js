// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
// set chunk size

// if array.length is longer than chunk size: create new subarray
if (array.length > size) {
  var newArray = [];
  for (i = 0; i < size; i++) {
    newArray.push(array[i]);
    var iCount = i;
    if (iCount > size) {
      var newArray[iCount] = [];
    }
  }

} else {
  return array;
}
// insert item into new subarray until subarray.length is equal to chunk size, then create new subarray


}

module.exports = chunk;
