// 1. WAF which sort an array of objects by age;

// let arrayOfObjects = [
//   {
//     name: "Vasile",
//     age: 35,
//   },
//   {
//     name: "Daniel",
//     age: 31,
//   },
// ];

// console.log(arrayOfObjects.sort((a, b) => a.age - b.age));

// 2. WAF which sort an array of objects by a property passed as a parameter;

// function sortArrayOfObject(arrayOfObjects2) {
//   arrayOfObjects2.sort((a, b) => a.age - b.age);
// }

// sortArrayOfObject(
//   (arrayOfObjects2 = [
//     {
//       name: "Vasile",
//       age: 35,
//     },
//     {
//       name: "Daniel",
//       age: 31,
//     },
//   ])
// );
// console.log(arrayOfObjects2);

// 3. WAF which sort an array of objects by a property and ascendent/descendent passed as a parameter;

// let array3 = [
//   {
//     name: "Vasile",
//     age: 35,
//   },
//   {
//     name: "Daniel",
//     age: 31,
//   },
//   {
//     name: "Adi",
//     age: 40,
//   },
// ];

// function sortArray(arr, order) {
//   if (order == "ascendent") {
//     array3.sort((a, b) => a.age - b.age);
//   } else {
//     array3.sort((a, b) => b.age - a.age);
//   }
// }

// sortArray(array3, "ascendent");
// console.log(array3);

// 4. WAF WR the distinct values from an array

// function distinctValue(value, index, self) {
//   return self.indexOf(value) === index;
// }

// let arr = [1, 2, 2, 2];
// let distinctArr = arr.filter(distinctValue);
// console.log(distinctArr);

// 8. sort a object by key;

// let anaAppointment = {
//   zanzi: { test: 1 },
//   ana: 10,
//   balet: "duminica",
// };

// function sortObject() {
//   let newArray = [];
//   for (key in anaAppointment) {
//     newArray.push(key);
//   }
//   console.log(newArray.sort());
// }
// sortObject();

// 9. sort an array of numbers by number of 1 from binary representation
