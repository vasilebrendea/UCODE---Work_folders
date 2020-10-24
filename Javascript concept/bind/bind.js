// // first example

// const person = {
//   name: "Vasile",
//   age: 36,
//   eyeColor: "blue",
//   getAge: function () {
//     return this.age;
//   },
// };

// let withoutBind = person.getAge;
// console.log(withoutBind());

// let withBind = withoutBind.bind(person);
// console.log(withBind());

// // second example

// let person01 = {
//   name: "Vasile",
//   age: 36,
// };

// let person02 = {
//   name: "Daniel",
//   age: 31,
// };

// function sumOfAge() {
//   console.log(this.age + 1);
// }

// let pointTheObject = sumOfAge.bind(person02);
// pointTheObject();

// another example

// let person1 = {
//   age: 36,
//   name: "Iris",
//   eyeColor: "brown",
//   updateAge: function () {
//     return this.age + 2;
//   },
// };

// let person2 = {
//   age: 40,
//   name: "Gabriel",
//   eyeColor: "blue",
//   updateAge: function () {
//     return this.age + 10;
//   },
// };

// let totalAge = function () {
//   return this.age + this.updateAge();
// };

// let fixedTotalAge = totalAge.bind(person2);
// console.log(fixedTotalAge());

//  :) multiple examples means practice ;)

// function callingSound() {
//   console.log(this.sound);
// }

// let thatSound = {
//   sound: "This is the sound !!!",
// };

// callingSound();

// let fixedSound = callingSound.bind(thatSound);
// fixedSound();
