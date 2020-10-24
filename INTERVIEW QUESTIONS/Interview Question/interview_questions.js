// 1. FizzBuzz simple question solution

// first method

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// second method

// for (let i = 1; i <= 100; i++) {
//   let output = "";
//   if (i % 3 === 0) {
//     output += "Fizz";
//   }
//   if (i % 5 === 0) {
//     output += "Buzz";
//   }

//   if (output == "") {
//     output = i;
//   }
//   console.log(output);
// }

// 2. check Palindrome strings

// function checkPalindrome(str) {
//   return str == str.split("").reverse().join("");
// }
// console.log(checkPalindrome("anna"));

// 3. fibonaci sequence

// function fibonaci(num) {
//   let a = 1,
//     b = 0,
//     temp;

//   while (num >= 0) {
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }
//   console.log(b);
// }
// fibonaci(9);

// var fib = [];

// fib[0] = 0;
// fib[1] = 1;
// for (var i = 2; i <= 10; i++) {
//   fib[i] = fib[i - 2] + fib[i - 1];
//   console.log(fib[i]);
// }

// 4. first caracter to UpperCase :)

// function UpperFirstCaracter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(UpperFirstCaracter("anna"));

/////////////// or ///////////////////

// function firstCharact(str) {
//   let firstChar = str.charAt(0).toUpperCase();
//   console.log(str.replace(str.charAt(0), firstChar));
// }
// firstCharact("ana are mere");

// 5. twoSum

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let y = i + 1; y < nums.length; y++) {
//       if (nums[i] + nums[y] === target) {
//         console.log([i, y]);
//       }
//     }
//   }
// };
// twoSum([2, 7, 11, 15], 9);

// another way

// const twoSum = (nums, target) => {
//     const prevNums = {};
//     for (let i = 0; i < nums.length; i++) {
//       let currentNum = nums[i];
//       let setNum = target - currentNum;
//       let index2 = prevNums[setNum];
//       if (index2 != null) {
//         console.log([index2, i]);
//       } else {
//         prevNums[currentNum] = i;
//       }
//     }
//   };
//   twoSum([1, 2, 4, 7, 9], 13);

// 6. reverse integer

// var reverse = function (x) {
//   let number =
//     Math.sign(x) * parseInt(x.toString().split("").reverse().join(""));
//   let Min = 0 - Math.pow(2, 31);
//   return number < Math.pow(2, 31) && number > Min ? number : 0;
// };

// 7. eliminate vowels from a string

// function deleteVovels(str) {
//   let charat = str.toLowerCase().split("");
//   let withoutVowels = [];
//   for (let i = 0; i < charat.length; i++) {
//     if (
//       charat[i] === "a" ||
//       charat[i] === "e" ||
//       charat[i] === "i" ||
//       charat[i] === "o" ||
//       charat[i] === "u"
//     ) {
//       continue;
//     } else {
//       withoutVowels.push(charat[i]);
//     }
//   }
//   console.log(withoutVowels.join(""));
// }
// deleteVovels("Vasile is at home!");

/////////////////// or ////////////////////////

// function deleteVovels(str) {
//   console.log(str.replace(/[aeiou]/gi, ""));
// }
// deleteVovels("Vasile is at home!");

// 8. Roman to integer

// var romanToInt = function (s) {
//   const keys = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let arr = [];

//   for (i = 0; i < s.length; i++) {
//     if (keys[s[i]] < keys[s[i + 1]]) {
//       arr.push(keys[s[i + 1]] - keys[s[i]]);
//       i++;
//     } else {
//       arr.push(keys[s[i]]);
//     }
//   }
//   console.log(arr);

//   console.log(arr.reduce((total, next) => (total += next)));
// };

// romanToInt("MCMXCIV");

// 9. longest comon prefix !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var longestCommonPrefix = function (strs) {};

// 10. remove duplicates from an array of numbers

// var removeDuplicates = function (nums) {
//   return Array.from(new Set(nums));
// };

// console.log(removeDuplicates([1, 1, 2]));

// 11. create a hexadecimal color from a random number

// function color() {
//   return "#" + Math.random().toString(16).substring(2, 8);
// }
// console.log(color());

// 12. Remove duplicates

// let removeDuplicates = (arr) => {
//   return [...new Set(arr)];
// };
// console.log(removeDuplicates([1, 2, 1, 2, 3]));

// 13.Get the Middle Character (CodeWars)

// const middleChar = (str) => {
//   let middleArr = Math.floor(str.length / 2);
//   if (str.length % 2 === 0) {
//     return str[middleArr - 1] + str[middleArr];
//   } else {
//     return str[middleArr];
//   }
// };
// console.log(middleChar("A"));

// 14. String repeat
