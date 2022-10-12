/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/


function isSorted(arr) {
  if (arr[0] > arr[1]) {
    return false
  }
  if (arr.length === 2) {
    return true
  }
  return isSorted(arr.slice(1))

}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false

// [1, 2, 4, 4, 5] = 0th loop
//[2, 4, 3, 5] = 1st loop, sliced off 0th index but first condition failed, length is !==2
//[4, 3, 5] = 2nd loop sliced off 0th index, 4 greater than 3 so false, length !==2
//[4,5] = third loop, fails first conditon, length === 2 ==> true
// [5]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
