/* 1. Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/

// function squareNum(array) {
//   let sum = 0;
//   let i = array.length;
//   while (i--) sum += Math.pow(array[i], 2);
//   return sum;
// }

// console.log(squareNum([1, 2, 3]));

/* 2. Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/

// function countPositivesSumNegatives(arr) {
//   let a = [];
//   let counter = 0;
//   let sumOfNegatives = 0;
//   arr.forEach((element) => {
//     if (element > 0) {
//       counter = counter + 1;
//     } else if (element < 0) {
//       sumOfNegatives += element;
//     }
//   });
//   if (counter && sumOfNegatives !== 0) {
//     a.push(counter, sumOfNegatives);
//   }
//   console.log(a);
// }
// countPositivesSumNegatives([1, 2, -1, -2]);

/* 3. The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H */

function initial(val) {
  const regex = /[A-Z]/g;
  const found = val.match(regex);
  const final = found.join(".");
  console.log(final);
}
initial("Vasile Brendea");

// 4. Convert an array in linked list

// function convertArr(arr) {
//   let list = null;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     list = {
//       value: arr[i],
//       ref: list,
//     };
//   }
//   return list;
// }
// console.log(convertArr([10, 20, 30, 40, 50]));
