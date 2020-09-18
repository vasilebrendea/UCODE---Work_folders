//1. WAF WR the longest sequence of equal numbers; [1,2,2,3] ==> [2,2]

// let arr = [1, 1, 2, 2, 2, 3];
// let multipleNum = arr.filter(
//   (value, index, array) => array.indexOf(value) !== index
// );
// console.log(multipleNum);

// // remove duplicates

// console.log([...new Set(arr)]);

// return [2, 2]

// let arr = [1, 2, 2, 3];

// function findLongestSequence() {
//   let newArray = [];
//   let counter = 0;
//   arr.forEach((val, index) => {
//     if (index === 0 || val !== arr[index - 1]) {
//       counter += 1;
//       newArray[counter] = [];
//     }
//     return newArray[counter].push(val);
//   });
//   return newArray;
// }

// let sequences = findLongestSequence();
// const longestSequence = sequences.sort((a, b) => b.length - a.length);
// console.log(longestSequence.shift());

/*2. you have an array of objects representing the list of directories {
	id,
	name,
	parentId
} 


create a tree structure from the list (like windows explorer)
delete a specific node from tree
search for a specific node (by id) intothe tree
add a new node to a specific node */

// var source = [
//   {
//     id: 1,
//     name: "work",
//     parentid: 0,
//   },
//   {
//     id: 7,
//     name: "games",
//     parentid: 0,
//   },
//   {
//     id: 2,
//     name: "javascript",
//     parentid: 1,
//   },
//   {
//     id: 3,
//     name: "algoritmica",
//     parentid: 2,
//   },
// ];

// function createNode(id, name, parentid) {
//   return {
//     id,
//     name,
//     parentid,
//     children: [],
//   };
// }

// function createDirStructure(list, node, parentid) {
//   var sourceItems = list.filter((el) => el.parentid === parentid);
//   sourceItems.forEach((element) => {
//     var nodeItem = createNode(element.id, element.name, element.parentid);
//     createDirStructure(list, nodeItem, nodeItem.id);
//     node.children.push(nodeItem);
//   });
//   return node;
// }

// function start(list) {
//   var root = createNode(0, "root", 0);
//   createDirStructure(list, root, 0);
//   return root.children;
// }
// start(source);

/* 3. WAF WR the friendly time from a number representing the miliseconds
- just now (<30 sec)
- less than a minute
- x minutes ago (< 45min)
- less than one hour
- x hours ago (< 12 hours)
- less than a day */

// function friendlyTime(value) {
//   if (value < 30000) {
//     console.log("just now");
//   } else if (value < 60000) {
//     console.log("less than a minute");
//   } else if (value < 2700000) {
//     console.log("x minutes ago");
//   } else if (value < 3600000) {
//     console.log("less than one hour");
//   } else if (value < 43200000) {
//     console.log("x hours ago");
//   } else if (value < 86400000) {
//     console.log("less than a day");
//   } else if (value > 86400000) {
//     console.log("That is more then a day !!!");
//   }
// }
// friendlyTime(500000000);

/* 4. search after a lot of regex examples
hint:
  1. list of words
	2. remove double spaces
	3. get the text between strings: ex: test regex e super tare. func('regex','tare') ==> e super
	4. use the same regex for getting the commented text
	5. use regex to capitalize the first letter after dot. ex: imi place regex.       sunt niste treburi faine ==> imi place regex. Sunt niste treburi faine
	6. find all src values of images from a html
	7. use a regex which can be used for password validation.min length = 6,min one upercase, min one special character (!@$%^&**)_+   

searxh on internet after other examples	 */

// function regExp1() {
//   let str = "Vasile  este acasa !";
//   let listOfWords = /\w+/gi;
//   let result1 = str.match(listOfWords);
//   console.log(str, result1);
// }
// regExp1();

// function getTextBitweenStrings() {
//   let str2 = "Vasile este acasa !";
// }

/* 5. Design patterns
- check the singleton pattern and create an example */

// class Settings {
//   constructor() {
//     if (Settings.instance instanceof Settings) {
//       return Settings.instance;
//     }

//     this.settingsObject = {
//       background: "red",
//       version: Math.floor(Math.random() * 4000),
//     };

//     Object.freeze(this.settingsObject);
//     Object.freeze(this);
//     Settings.instance = this;
//   }

//   get(key) {
//     return this.settingsObject[key];
//   }
// }

// const s = new Settings();
// const a = new Settings();
// console.log(s);
// console.log(a);
