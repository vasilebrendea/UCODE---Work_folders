//1.take a look at javascript proxy

// var handler = {
//   get(target, key) {
//     return key in target ? target[key] : 37;
//   },
// };

// var p = new Proxy({}, handler);
// // var p = {};
// p.a = 1;
// p.b = undefined;

// console.log(p.a, p.b);
// console.log("c" in p, p.c);

// // exemplu nr. 2

// let validator = {
//   set: function (obj, prop, value) {
//     if (prop === "age") {
//       if (typeof value !== "number" || Number.isNaN(value)) {
//         console.log("Age must be a number");
//       } else if (value < 0) {
//         console.log("Age must be a positive number");
//       }
//     }
//     obj[prop] = value;

//     return true;
//   },
// };

// let person = new Proxy({}, validator);
// person.age = "gghhfdgd";

//2.swap 2 elements (a&b)

// using destructuring assignment

// let a = 1;
// let b = 2;

// function swap1(a, b) {
//   return [b, a];
// }
// console.log(([a, b] = swap1(a, b)));

// let a;
// let b;

// [a, b] = [1, 2, 3];

// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// using temporary variable

// function swap(a, b) {
//   let temp = a;
//   a = b;
//   b = temp;
//   return [a, b];
// }
// console.log(swap(2, 3));

// 3.preventdefault vs stoppropagation.

// const youtubeLink = document.getElementById("youtubeLink");
// const cb = document.getElementById("cb");

// youtubeLink.addEventListener("click", function (e) {
//   if (!cb.checked) {
//     e.preventDefault();
//   }
// });

// and

// const box = document.getElementById("box");
// const myBtn = decoment.getElementById("myBtn");

// box.addEventListener("click", function () {
//   this.style.backgroundColor = "red";
// });

// myBtn.addEventListener("click", function (e) {
//   e.stopPropagation();
// });

// 5.get the 8786545^8909985 % 37

// let a = (8786545).toString(2);
// let b = (8909985).toString(2);

// let c = 8786545 ^ 8909985;
// console.log(c);

// console.log(parseInt(a, 2));
// console.log(parseInt(b, 2));

// let xOr = parseInt("11110011011010000", 2);
// console.log(xOr);
// let final = xOr % 37;
// console.log(final);

// 6. linked list
// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   addNode() {}

//   deleteHead() {}

//   deleteTail() {}
// }

// class Node {
//   constructor(val, prev, next) {
//     this.val = val;
//     this.prev = prev || null;
//     this.next = next || null;
//   }
// }

// Links for learning JavaScript, CSS, ReactJs.

// 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript
// 2. https://www.w3schools.com/js/default.asp
// 3. https://www.youtube.com/
// 4. https://www.udemy.com/
// 5. https://www.skillshare.com/
// 6. https://stackoverflow.com/
// 7. https://sass-lang.com/guide
// 8. https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// 9. https://css-tricks.com/snippets/css/complete-guide-grid/
// 10. https://www.codewars.com/
// 11. https://reactjs.org/

// 7. design pattern chain and factory method and abstract factory

// function Developer(name) {
//   this.name = name;
//   this.type = "Developer";
// }

// function Tester(name) {
//   this.name = name;
//   this.type = "Tester";
// }

// function EmployeeFactory() {
//   this.create = (name, type) => {
//     switch (type) {
//       case 1:
//         return new Developer(name);
//         break;
//       case 2:
//         return new Tester(name);
//         break;
//     }
//   };
// }

// function say() {
//   console.log("Hi, I am " + this.name + " and I am a " + this.type);
// }

// const employeeFactory = new EmployeeFactory();
// const employees = [];

// employees.push(employeeFactory.create("Patrick", 1));
// employees.push(employeeFactory.create("John", 2));
// employees.push(employeeFactory.create("Ana", 2));
// employees.push(employeeFactory.create("Tim", 1));

// employees.forEach((emp) => {
//   say.call(emp);
// });
