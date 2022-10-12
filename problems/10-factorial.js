/***********************************************************************
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`. Assume the value of `num` is greater
than or equal to 1.

A factorial is the number get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120

Examples:

factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
***********************************************************************/

function factorial(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}
console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120


// 5 * 24factorial 5-1 = 5 * 4 =       // factoria 5 is 5 x factorial 4   5 x 24 = 120
// 4 * 6factorial 4-1 = 4 * 3 =       // factorial 4 is 4 x factorial 3  4 x 6 = 24
// 3 * 2 = 6 factorial 3-1 = 3 * 2 =    // factorial 3 is 3x factorial 2  3x2 = 6
// 2 * factoria 2-1 = 1                 // factorial 2 is 2x1
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = factorial;
