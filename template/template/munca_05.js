// 1. WAF wr the distinct elements from an array

// function distinctElements(value, index, thisArg) {
//   return thisArg.indexOf(value) === index;
// }
// var elements = [1, 2, 4, "a", "c", 2, "c"];
// var distinctEl = elements.filter(distinctElements);
// console.log(distinctEl);

//sau //

// var array = [1, 2, 4, "a", "c", 2, "c"];
// var distinctElement = array.filter(
//   (value, index, thisArg) => thisArg.indexOf(value) === index
// );
// console.log(distinctElement);

// 2. implement a navigation back and forth mechanism

// var array1 = [1, 2, 4, "a", "c", 2, "c"];

// function backAndForth(direction) {
//   if (direction === "forth") {
//     for (let i = 0; i < array1.length; i++) {
//       setTimeout(function () {
//         console.log(array1[i]);
//       }, 1000 * i);
//     }
//   }
//   if (direction === "back") {
//     array1.reverse();
//     for (let i = 0; i < array1.length; i++) {
//       setTimeout(function () {
//         console.log(array1[i]);
//       }, 1000 * i);
//     }
//   }
// }
// backAndForth("forth");

// 3. WAF which writes to the console the current date, after 2 seconds

// var time = setInterval(function () {
//   console.log(new Date());
// }, 2000);
// clearInterval(time);

// 4. WAF which writes to the console the current date, after x seconds

// function getTimeOver1(timer) {
//   setInterval(function () {
//     console.log(new Date());
//   }, timer);
// }
// getTimeOver1(4000);

// 5.having an array of nummbers, print the current date to the console after x seconds

var printCurrentDate = (arr) =>
  arr.map((el) => setTimeout(() => console.log(new Date()), el * 1000));
printCurrentDate([1, 5, 6]);

// 6. implement double click. WAF WHICH prints to the console "double click" in case the function was triggered twice in a specific interval

// 7. count haw many calls of a function has been made in a specific interval

// var countFunct = 0;
// function numberOfTimes() {
//   countFunct++;
//   if (countFunct > 10) {
//     clearInterval(timeout);
//   }
//   console.log(countFunct);
// }
// var timeout = setInterval(numberOfTimes, 1000);

// 8.WAF which returns the sum of elements from an array. (recursively)

// let sumOfElements = (element) =>
//   element <= 0 ? 0 : element + sumOfElements(element - 1);

// console.log(sumOfElements(3));

// from an array //////////////////////////////////////////////////

// var sum = (array) => (array.length === 0 ? 0 : array[0] + sum(array.slice(1)));

// console.log(sum([1, 2, 3]));

// 9. WAF which calculate the n!   --recursion

// function factorial(number) {
//   if (number > 0 && number <= 1) {
//     return 1;
//   }
//   return number * factorial(number - 1);
// }
// console.log(factorial(4));

//10. WAF which returns the longest word from a proposition. use regular expression; we didn't learn but do a search

// function findLongestWord(string) {
//   var stringSplit = string.split(" ");
//   stringSplit.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   console.log(stringSplit[0]);
// }
// findLongestWord("I learn programming at Ucode");

// another way

// function findLongWord(string) {
//   var strSplit = string.split(" ");
//   var longestword = "";
//   for (word of strSplit) {
//     if (word.length > longestword.length) {
//       longestword = word;
//     }
//   }
//   console.log(longestword);
// }
// findLongWord("I learn programming at Ucode");

// use Regex

// function longWordWithRegex(string) {
//   let regex = /([^A-Z a-z])+/g;
//   let text = string.replace(regex, "").split(" ");
//   let longestText = "";
//   for (word of text) {
//     if (word.length > longestText.length) {
//       longestText = word;
//     }
//   }
//   console.log(longestText);
// }
// longWordWithRegex("I learn programming at Ucode");
