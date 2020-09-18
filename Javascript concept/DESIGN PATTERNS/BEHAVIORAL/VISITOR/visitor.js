// function Employee(name, salary) {
//   this.name = name;
//   this.salary = salary;
// }

// Employee.prototype = {
//   getSalary: function () {
//     return this.salary;
//   },

//   setSalary: function (val) {
//     this.salary = val;
//   },

//   accept: function (visitorFunction) {
//     visitorFunction(this);
//   },
// };

// const vasile = new Employee("Vasile", 15000);
// console.log(vasile.getSalary());

// function ExtraSalary(emp) {
//   emp.setSalary(emp.getSalary() * 2);
// }

// vasile.accept(ExtraSalary);
// console.log(vasile.getSalary());
