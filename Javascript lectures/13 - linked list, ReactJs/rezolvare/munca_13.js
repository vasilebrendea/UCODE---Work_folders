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

// function initial(val) {
//   const regex = /[A-Z]/g;
//   const found = val.match(regex);
//   const final = found.join(".");
//   console.log(final);
// }
// initial("Vasile Brendea");

// 4. Convert an array in linked list

// let ll = function convertArr(arr) {
//   let list = null;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     list = {
//       value: arr[i],
//       ref: list,
//     };
//   }
//   return list;
// };
// console.log(ll([10, 20, 30, 40, 50]));

// ??????????????????????????????????????????????????????/

// another way to create linkedList

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // insert first Node
//   insertFirst(data) {
//     this.head = new Node(data, this.head);
//     this.size++;
//   }

//   // insert last
//   insertLast(data) {
//     let node = new Node(data);
//     let current;
//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.size++;
//   }

//   // delete at index
//   deleteAt(index) {
//     if (index > 0 && index > this.size) {
//       return;
//     }
//     let current = this.head;
//     let previous;
//     let count = 0;
//     if (index === 0) {
//       this.head = current.next;
//     } else {
//       while (count < index) {
//         count++;
//         previous = current;
//         current = current.next;
//       }
//       previous.next = current.next;
//     }
//     this.size--;
//   }

//   // reverse list
//   // ??????????????????????????????????????????????????????/
//   // reverse() {
//   //   if (!this.head) {
//   //     return false;
//   //   }
//   //   let prev = null;
//   //   let next;
//   //   while (data) {
//   //     next = data.next;
//   //     data.next = prev;
//   //     prev = data;
//   //     data = next;
//   //   }
//   //   return prev;
//   // }

//   // ??????????????????????????????????????????????????????/

//   // print list
//   print() {
//     let current = this.head;
//     let count = 0;
//     let arr = [];
//     while (count < this.size) {
//       arr.push(current.data);
//       current = current.next;
//       count++;
//     }
//     console.log(arr);
//   }
// }

// const ll = new LinkedList();
// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertFirst(400);

// ll.deleteAt(1);
// ll.print();

// console.log(ll);

// 5. convert a number to a string

// function numberToString(num) {
//   console.log(num);
// }
// numberToString("67");

/* 6. Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
Note: a and b are not ordered! */

// function getSum(a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     if (a === b) {
//       sum = a;
//     } else {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }
// getSum(0, -2);

// ??????????????????????????????????????????????????????
