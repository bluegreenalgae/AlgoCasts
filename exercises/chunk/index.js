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
  // create empty array to hold chunks
  const chunked = [];

  // for each element in unchuncked array
  for (let element of array) {
    // retrieve last element in chuncked
    const last = chunked[chunked.length - 1];

    // if last element does not exist or equals chunked size
    if (!last || last.length === size) {
      // push a new element in to chunked with current element
      chunked.push([element]);
    } else {
      // else add the current element to current chunked
      last.push(element);
    }
  }

  return chunked;
}

module.exports = chunk;
