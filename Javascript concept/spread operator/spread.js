// visit web-pages for more information
// https://www.notion.so/The-Spread-Operator-b7608512fbd844ec9f27f31740fb7298

// let x = [1, 2, 3];
// let y = [...x];

// console.log(y);

// //or

// function func(...arg) {
//   console.log(arg);
// }
// func(x);

// // or

// let temperatures = [22, 18, 32, 10, 8, 27, 15];
// //console.log(Math.min(temperatures));
// console.log(Math.min(...temperatures));
// //console.log(Math.min.apply(null, temperatures));

// // or

// let workers = ["vasile", "cristina", "grigore", "alin"];
// let newWorkers = ["silviu", "robert"];
// let newTeam = [workers, newWorkers];
// console.log(newTeam);
// let newTeam2 = [...workers, ...newWorkers];
// console.log(newTeam2);

// //or

// let oldWorkers = ["vasile", "cristina", "grigore", "alin"];
// let newTeam3 = oldWorkers;
// let addYoungWorker = newTeam3.push("silviu");
// console.log(newTeam3);
// //modified de oldWorkers var. to
// console.log(oldWorkers);

// // with spread operator

// let oldWorkers1 = ["vasile", "cristina", "grigore", "alin"];
// let newTeam4 = [...oldWorkers1];
// let addYoungWorker1 = newTeam4.push("silviu");
// console.log(newTeam4);
// // the oldWorkers1 var. was not change
// console.log(oldWorkers1);
