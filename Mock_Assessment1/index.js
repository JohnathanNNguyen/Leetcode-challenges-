'use_strict';

//  * @param {number} n
//  * @return {number}

//  var climbStairs = function(n) {
//   const ary = [1,1]
//     if(n>1){
//       for(let i=2; i<= n; i++){
//         ary[i] = ary[i-1]+ ary[i-2]
//       }
//     }
//     return ary[ary.length - 1]
// };

// console.log(climbStairs(100));

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

// Constraints:

// 0 <= num <= 231 - 1

// Follow up: Could you do it without any loop/recursion in O(1) runtime?

// /**
//  * @param {number} num
//  * @return {number}
//  */

var addDigits = function (num) {
  let number = num;
  let numArray = [];
  const add = (a, b) => a + b;
  function turnToArray(newNumber) {
    return String(newNumber).split('').map(Number);
  }
  while (number >= 10) {
    numArray = turnToArray(number);
    console.log('numArray', numArray);
    number = numArray.reduce(add);
  }
  return number;
};
challenges;
console.log(addDigits(101));

// var addDigits = function(num) {
//   let number = num
//   let numArray = []
//  function turnToArray (newNumber){
//     return String(newNumber).split("").map(Number)
//   }
//   while(number >= 10){
//     numArray = turnToArray(number)
//     number = numArray[0] + numArray[1]
//   }
//   return number
// };
