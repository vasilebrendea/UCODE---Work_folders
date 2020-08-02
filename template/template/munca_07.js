// 1. WAF WR 6 random numbers out of 49

// let generate6Numbers = {
//   numbers: [],
// };

// function generatingNumbers() {
//   for (let i = 0; i < 6; i++) {
//     let generateNumbers = Math.floor(Math.random() * 49 + 1);
//     generate6Numbers.numbers.push(generateNumbers);
//   }
// }
// generatingNumbers();

// console.log(generate6Numbers.numbers);

// 2. simulate a 6/49 game. you have the winning 6 numbers and n tickets. return the tickets which has 1 winning number, 2 , .... 6

// let ticketOfNumbers = {
//   name: "Vasile",
//   numbers: [2, 3, 22, 31, 49, 37],
// };

// let game6_49 = {
//   numbersFromTicket: [],
//   ramdomNumbers: [],
//   winnigTicket: "",
// };

// function tickets() {
//   ticketOfNumbers.numbers.map(function (num) {
//     if (num > 0 && num <= 49) {
//       game6_49.numbersFromTicket.push(num);
//     } else {
//       console.log("The numbers must be from 1 to 49 !!!");
//     }
//   });
// }
// tickets();

// function generatingNumbers() {
//   for (let i = 0; i < 6; i++) {
//     let generateNumbers = Math.floor(Math.random() * 49 + 1);
//     game6_49.ramdomNumbers.push(generateNumbers);
//   }
// }
// generatingNumbers();

// function winnigTicket() {
//   let winningNumbers = [];
//   game6_49.numbersFromTicket.map(function (win) {
//     game6_49.ramdomNumbers.map(function (random) {
//       if (win == random) {
//         winningNumbers.push(win);
//         console.log("The winning numbers are " + winningNumbers + " !!!");
//         console.log(
//           "The winning ticket belongs to " + ticketOfNumbers.name + "."
//         );
//         game6_49.winnigTicket = ticketOfNumbers.name;
//       }
//     });
//   });
// }
// winnigTicket();
// console.log(game6_49);

//3. Create a chat. you have one chat room with many users.

// let allMessages = [];

// class newUser {
//   constructor(name, msg) {
//     this.name = name;
//     this.userMessages = [msg];
//   }
//   addMessage(message) {
//     this.userMessages.push(message);
//   }
// }

// function pushUser(usr) {
//   allMessages.push(usr);
// }

// function seeUser(userName) {
//   allMessages.map(function (element) {
//     if (userName === element.name) {
//       console.log(element.name + " messages are :");
//       console.log(element.userMessages);
//     }
//   });
// }

// function displayAllMessages() {
//   let allMsgArr = [];
//   allMessages.forEach(function (element) {
//     allMsgArr.push(...element.userMessages);
//     element.allUsersMessages = allMsgArr;
//   });
// }

// const user1 = new newUser("Vasile", "a");
// pushUser(user1);
// user1.addMessage("b");

// const user2 = new newUser("Daniel", "c");
// pushUser(user2);
// user2.addMessage("d");
// user2.addMessage("hello");

// const user3 = new newUser("Adi", "de");
// pushUser(user3);
// user3.addMessage("are");

// seeUser("Adi");

// displayAllMessages();
// console.log(allMessages);

// 4. you have an array; please return all pairs of numbers with sum equal n
// ex: [1,3,2,6,5], 7 ==> [[1,6],[2,5]]

// function sumPairOf(arr, num) {
//   let array = [];
//   arr.map((el) => {
//     arr.map((element) => {
//       if (el + element === num) {
//         array.push([el, element]);
//       }
//     });
//   });
//   console.log(array);
// }

// sumPairOf([1, 3, 2, 6, 5], 7);

// 5. please design a matrix of n/n numbers containing random numbers between (0, n)
