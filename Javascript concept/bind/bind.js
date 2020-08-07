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
