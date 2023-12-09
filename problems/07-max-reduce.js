/*

Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.

Examples:

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

*/
//  go through arr via reduce
//  set variable for max
// start at 0 index
// if num is greater than max make number = max
let maxWithReduce = function(nums) {
let max = 0;
  nums.reduce(function(acc,num){
    if (num > max){
      max = num;
    }
  });
  return max;
};
console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = maxWithReduce;
} catch (e) {
  module.exports = null;
}
