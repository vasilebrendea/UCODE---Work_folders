// let PersonC = class {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }
//   getDetails() {
//     return `${this.name} :: ${this.id}`;
//   }
// };

// let fred = new PersonC("Fred", 123);
// console.log(fred.getDetails());

// let EmployyeC = class extends PersonC {
//   constructor(name, id, salary) {
//     super(name, id);
//     this.salary = salary;
//   }
//   getMoreDetails() {
//     return `${this.name} :: ${this.id} :: ${this.salary}`;
//   }
// };

// let bob = new EmployyeC("Bob", 321, 85000);
// console.log(bob.getMoreDetails());

// trasform class in to prototype

// let PersonP = function (name, id) {
//   this.name = name;
//   this.id = id;
// };

// PersonP.prototype.getDetails = function () {
//   return `${this.name} :: ${this.id}`;
// };

// let vasile = new PersonP("Vasile", 321);
// console.log(vasile.getDetails());

// let EmployyeP = function (name, id, salary) {
//   PersonP.call(this, name, id);
//   this.salary = salary;
// };

// Object.setPrototypeOf(EmployyeP, PersonP.prototype);
// EmployyeP.prototype.getMoreDetails = function () {
//   return `${this.name} :: ${this.id} :: ${this.salary}`;
// };

// let daniel = new EmployyeP("Daniel", 456, 100000);
// console.log(daniel.getMoreDetails());
