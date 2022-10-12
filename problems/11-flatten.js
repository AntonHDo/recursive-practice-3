/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]

understand :
take single array with any number nested array
return array with nested on 1 lvl

plan:
if array = array[0], return array
else
***********************************************************************/

function flatten(arr) {

  if (arr === []) {
    return []
  }
  return flatten(arr.pop()) + arr
}

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;