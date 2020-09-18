// 1. please waf prototype whcj implements the map BUT not returns another instance of the array; mymap

// function multipleWithThenSelf(array) {
//   const newModifiedArray = array.map(function (element) {
//     return (element = element * element);
//   });
//   console.log(newModifiedArray);
// }
// multipleWithThenSelf([1, 2, 3]);

// // prototype function ////////

// Array.prototype.myMap = function (callback) {
//   let array = [];
//   for (let i = 0; i < this.length; i++) {
//     let counter = callback(this[i]);
//     array.push(counter);
//   }
//   return array;
// };

// let array = [1, 2, 3];
// array = array.myMap(function (el) {
//   return (el = el * el);
// });
// console.log(array);

// 2. Please write a system for a store.

// const store = {
//   shelf1: {
//     color: "blue",
//     lightIntensity: 50,
//     type: {
//       sport: 2,
//       toys: 0,
//       jewelry: 0,
//       clothes: 0,
//       presentation: 0,
//     },
//     sumOfProducts: function () {
//       let sum = 0;
//       for (let el in store.shelf1.type) {
//         sum += store.shelf1.type[el];
//       }
//       return sum;
//     },
//     allowedProductNumbers: 10,
//   },

//   shelf2: {
//     color: "blue",
//     lightIntensity: 50,
//     type: {
//       sport: 0,
//       toys: 0,
//       jewelry: 0,
//       clothes: 0,
//       presentation: 0,
//     },
//     sumOfProducts: function () {
//       let sum = 0;
//       for (let el in store.shelf2.type) {
//         sum += store.shelf2.type[el];
//       }
//       return sum;
//     },
//     allowedProductNumbers: 10,
//   },
// };

// let product = {
//   cost: 20,
//   profit: 7,
//   get price() {
//     return this.cost + this.profit;
//   },
//   code: Math.random(),
//   type: "sport",
// };

// let changeColorAndLiteIntensity = function (col, int) {
//   for (let key in store) {
//     store[key].color = col;
//     store[key].lightIntensity = int;
//   }
//   console.log(
//     "The color of shelfs was change at " +
//       store.shelf1.color +
//       " and the lite intensity was change at " +
//       store.shelf1.lightIntensity
//   );
// };
// changeColorAndLiteIntensity("yellow", 30);

// let addProduct = function (product, number) {
//   for (const selfs in store) {
//     let spaceLeft =
//       store[selfs].allowedProductNumbers - store[selfs].sumOfProducts();
//     if (spaceLeft >= number) {
//       for (const types in store[selfs].type) {
//         if (types === product.type) {
//           store[selfs].type[types] += number;
//         }
//       }
//     } else {
//       console.log("We have no more space in shelfs !");
//     }
//   }
// };
// addProduct(product, 9);

// let sumAllProductFromAllShelf = function () {
//   let sumShelf = 0;
//   for (let key in store) {
//     let sum = store[key].sumOfProducts();
//     sumShelf += sum;
//   }
//   console.log("Sum of products from all shelfs is " + sumShelf);
// };
// sumAllProductFromAllShelf();

// console.log("Sum of products from shelf1 is " + store.shelf1.sumOfProducts());
// console.log("Sum of products from shelf2 is " + store.shelf2.sumOfProducts());

// console.log(store);
