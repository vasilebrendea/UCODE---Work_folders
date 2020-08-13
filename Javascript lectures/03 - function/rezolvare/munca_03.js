/*

// += operator
debugger;

function add(x) {
    return x + 1;
}

var addAsArrow = x => x + 1;
var xplus1 = addAsArrow(3);



//FUNCTIONS --------------------
//anonymous
var anonim = function (x) {
    x = x + 1;
    return x;
}
//arrow function


var addAsArrow1 = x => {
    x = x + 1;
    return x;
};
xplus1 = addAsArrow1(3);

debugger;




////////////////////////////////

//filter
// 1 2 3 4 5
function getProductsSmallerThanX0(products, price) {
    var newProducts = products.filter(function (el) {
        return el < price;
    })

    // return products.filter(el => el< price);

    return newProducts;
}
function getProductsSmallerThanX1(products, price) {

    var checkIsSmallerThanPice = function (el) {
        return el < price;
    }
    var newProducts = products.filter(checkIsSmallerThanPice)

    return newProducts;
}

function getProductsSmallerThanX2(products, price) {

    var checkIsSmallerThanPice = function (el) {
        return el < price;
    }
    return products.filter(checkIsSmallerThanPice)
}

const smallProducts = getProductsSmallerThanX2([1, 20, 5, 6, 29], 20);
console.log('produse<20 ', smallProducts);

function getProductsSmallerThanXWithFunctionAsParamater(products, conditionFunction) {
    return products.filter(conditionFunction)
}

function checkIsSmallerThanPice(el) {
    return el < 20;
}


const smallProducts1 = getProductsSmallerThanXWithFunctionAsParamater([1, 20, 5, 6, 29], checkIsSmallerThanPice);
console.log('produse<20 ', smallProducts1);

function getProductsSmallerThanXWithFunctionAsParamater1(products, conditionFunction) {
    return products.filter(conditionFunction)
}

//START -- ASTA FACEM MAI TARZIU; odata cu closure
// function checkIsSmallerThanPice1(el, price) {
//     return el<price;
// }

// const smallProducts1 = getProductsSmallerThanXWithFunctionAsParamater1([1,20,5,6,29],checkIsSmallerThanPice);
// console.log('produse<20 ', smallProducts1);
//END -- ASTA FACEM MAI TARZIU; odata cu closure


function getProductsSmallerThanX2ArrowFct(products, price) {
    return products.filter(el => el < 20)
}

const smallProductsArrwFct = getProductsSmallerThanX2ArrowFct([1, 20, 5, 6, 29], 20);
console.log('produse<20 ', smallProductsArrwFct);


var prods = [2, 4, 6, 9, 87].filter(el => el < 20);
console.log(prods);

//map

[1, 2, 3].map(el => el + 10)
[1, 2, 3].map(function (el) {
    return el + 20;
});


//reduce



//forEach

//for

//function; different types

console.log(add(3)); */

// ------------------------------------- EXERCITIU 3 ------------------------------------//

// // 1. WAF which prints to the console element by element from array

// const array1 = ["Vasile", "Grigore", "Mircea"];

// // forEach
// array1.forEach(function (name) {
//   console.log(name);
// });

// array1.forEach((name) => console.log(name));

// // map
// array1.map(function (item) {
//   console.log(item);
// });

// array1.map((item) => console.log("Huning" + " " + item));

// //reduce
// const names = array1.reduce(function (total, name) {
//   return total + ", " + name;
// });
// console.log(names);

// // 2. WAF which receive an array of numbers and returns the sum of elements from array

// var array2 = [1, 2, 3, 4, 5, 6];

// // reduce
// const sumOfNumbersWithReduce = array2.reduce(function (
//   accumulator,
//   currentValue
// ) {
//   return accumulator + currentValue;
// },
// 0);

// console.log(sumOfNumbersWithReduce);

// // forEach
// var sum = 0;

// const sumOfNumberWithForEach = array2.forEach(function (item) {
//   sum += item;
// });
// console.log(sum);

// // map
// var sum2 = 0;

// const sumOfNumbersWithMap = array2.map(function (numbers) {
//   sum2 += numbers;
// });
// console.log(sum2);

// // 3. WAF WR the sum of even (%2 ===0) from an array

// var array3 = [11, 12, 13, 14, 15, 16];

// // use filter and reduce
// const evenNumbers = array3.filter(function (item) {
//   if (item % 2 === 0) {
//     return true;
//   }
// });

// var sumOfEven = evenNumbers.reduce((total, item) => total + item, 0);
// console.log(sumOfEven);

// // use filter and forEach
// var sumForEach = 0;

// evenNumbers.forEach(function (numbers) {
//   sumForEach += numbers;
// });
// console.log(sumForEach);

// // use filter and map
// var sumMap = 0;

// evenNumbers.map(function (numbers) {
//   sumMap = sumMap + numbers;
// });
// console.log(sumMap);

// // 4. WAF WR the sum of first n elements from an array

// var array4 = [11, 12, 13, 14, 15, 16];

// // use slice
// var firstTreeElements = array4.slice(0, 3);

// // reduce
// var sumOfFirstTreeElements = firstTreeElements.reduce(function (total, item) {
//   return total + item;
// }, 0);
// console.log(sumOfFirstTreeElements);

// // forEach
// var sum5 = 0;

// firstTreeElements.forEach(function (item) {
//   sum5 += item;
// });
// console.log(sum5);

// //map
// var sum6 = 0;

// firstTreeElements.map(function (numbers) {
//   sum6 += numbers;
// });
// console.log(sum6);

// // 5. what's the differecnce between slice and splice functions?

// // 6. WAF which returns an array of n elements; ex: createEmptyArray(3) ==> [0,0,0]

// var emptyArray = [0, 0, 0];
// //console.log(emptyArray.fill(3));
// function fillNumber(numbers) {
//   var newArray = numbers.fill(3);
//   console.log(newArray);
// }
// fillNumber(emptyArray);

// // 7. WAF with 2 parameters (min, max) WR a random number between min and max

// function randomNumbers(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomNumbers(3, 7));

// // 8. WAF WR with parameter n which returns an array of random n numbers  between min and max

// var newArray = [0];
// var randomNum = Math.floor(Math.random() * 10) + 1;
// var modifiedArray = newArray.fill(randomNum);
// console.log(newArray);

// // 9. WAF (write a function) (arr1, arr2) which concatenate 2 arrays

// var baieti = ["Vasile", "Marius", "David", "Aris"];
// var fete = ["Mariana", "Andreea", "Adela"];

// // use concat()
// function grupUcode(arrays) {
//   var concatArrays = arrays.concat(baieti);
//   console.log(concatArrays);
// }
// grupUcode(fete);

// // use forEach

// // use reduce
// fete = baieti.reduce(function (total, item) {
//   total.push(item);
//   return total;
// }, fete);
// console.log(fete);

// // use map

// // 10; use ternary operator over a numeric value n; if n< 18 will return true otherwise false;

// var age = 15;

// if (age >= 18) {
//   console.log("Can drink beer !");
// } else {
//   console.log("Can drink just Juice !");
// }

// // 11. sort an array of numbers  ascendent

// var numbersArray = [8, 4, 12, 38, 1, 110, 6];
// numbersArray.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbersArray);

// // 12. sort an array of numbers  descendent

// var numbersArray = [8, 4, 12, 38, 1, 110, 6];
// numbersArray.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbersArray);

// // 13.   WAF which receive as input parameter a boolean value; ascendent; if ascendent is true, it will return the array sorted ascendent otherwise descendent

// var numbersArray2 = [8, 4, 12, 38, 1, 110, 6];

// function booleanValue(value) {
//   if (value === "ascendent") {
//     numbersArray.sort(function (a, b) {
//       return a - b;
//     });
//     console.log(numbersArray);
//   } else if (value === "descendent") {
//     numbersArray.sort(function (a, b) {
//       return b - a;
//     });
//     console.log(numbersArray);
//   } else {
//     console.log(numbersArray2);
//   }
// }
// booleanValue("ascendent");

// // 14. WAF which receive a string and returns the sum of charcodes of each character from string

// var myName = "dani";
// var myNameArray = myName.split("");
// // console.log(myNameArray);
// var sumOfItems = 0;

// var sumOfCharcodes = myNameArray.forEach(function (numberFrom) {
//   var test = numberFrom.charCodeAt();
//   // console.log(test);
//   sumOfItems += test;
// });
// console.log(sumOfItems);

// function sumCharCodeIn(string) {
//   var stringToArray = string.split("");
//   var sum = 0;
//   stringToArray.forEach(function (char) {
//     var code = char.charCodeAt();
//     sum += code;
//   });
//   console.log(sum);
// }
// sumCharCodeIn("Vasile");

// // 15. WAF which receive an array of numbers and returns a string representing the fromCharCode ...

// var array5 = [66, 114, 101, 110, 100, 101, 97];

// function fromCharCodeToString(array) {
//   array.forEach(function (number) {
//     var numberToString = String.fromCharCode(number);
//     console.log(numberToString);
//   });
// }
// fromCharCodeToString(array5);

// // 16. WAF which receive a string and character; the response will be the reversed initial string without character: ex; removeChar('alabalaportocala') => 'lblportocl'

// function statusDoor(f) {
//   var modifiedDoor = "The door is " + f + " !";
//   console.log(modifiedDoor);
// }
// statusDoor("close");

// function toogle(door) {
//   if (door === "open") {
//     console.log("The door is " + door + " !");
//   } else if (door === "close") {
//     console.log("The door is " + door + " !");
//   } else {
//     console.log("The door is locked !");
//   }
// }
// toogle("open");
