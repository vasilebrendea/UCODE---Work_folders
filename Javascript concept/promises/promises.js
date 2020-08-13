// let exemplePromise = new Promise((rezolve, reject) => {
//   let age = 1 + 2;
//   if (age == 2) {
//     rezolve("The age is ok !");
//   } else {
//     reject("Age is more then promise !");
//   }
// });

// exemplePromise
//   .then((message) => {
//     console.log("Success !!! " + message);
//   })
//   .catch((message) => {
//     console.log("Failed !!! " + message);
//   });

// // another exemple with multiple promises

// let getImage1 = new Promise((rezolve, reject) => {
//   rezolve("Get image 1");
// });

// let getImage2 = new Promise((rezolve, reject) => {
//   rezolve("Get image 2");
// });

// let getImage3 = new Promise((rezolve, reject) => {
//   rezolve("Get image 3");
// });

// Promise.all([getImage1, getImage2, getImage3]).then((message) => {
//   console.log(message);
// });
