// 1. write a function to return the n character from a string

var string = "Vasile";
var nCharacter = string.charAt(2);
console.log(nCharacter);

function nChar(n) {
  var str = "Vasile";
  console.log(str.charAt(n));
}
nChar(2);

// 2. WAF (write a function), with 1 parameter x ,  WR (which returns) the char code of character from position x

var parameter = "x";
var charParameterAt = parameter.charCodeAt(0);
console.log(charParameterAt);

function charCode(str) {
  var charParAt = str.charCodeAt(1);
  console.log(charParAt);
}
charCode("axa");

function removeChar(str) {
  let newString = str.slice(1, str.length);
  console.log(newString);
}
removeChar("Tests");

// 3. WAF with 2 params x and y, WR the sum of charcodes from position x and y
var firstParameters = "x";
var lastParameters = "y";
var firstParametersChar = firstParameters.charCodeAt(0);
var lastParametersChar = lastParameters.charCodeAt(0);
console.log(firstParametersChar + lastParametersChar);

// 4. WAF with 2 params, input (string), x(number), WR the same string with the character from position x as uppercase;

function concatStr(name) {
  var changeCaracter = name.slice(1, 6);
  var finalName = "V".concat(changeCaracter);
  console.log(finalName);
}
concatStr("vasile");

// 5. WAF, (string 1, string 2), WR the indexof string 2 within string 1;

function indexOf(str1, str2) {
  var n = str1.indexOf(str2);
  console.log(n);
}
indexOf("Vasile", "s");

// 6. WAF, (string 1, string 2), WR the last indexof string 2 within string 1;

function indexOf(str1, str2) {
  var n = str1.lastIndexOf(str2);
  console.log(n);
}
indexOf("Brendea Vasile Vasile", "Vasile");

// 7. WAF, (string) , WR the first 2 characters

function sliceStr(string) {
  var n = string.slice(0, 2);
  console.log(n);
}
sliceStr("Vasile Brendea");

// 8. WAF, (string), WR the characters from position 1 and -1 (previous character from last one)

function negativeSliceValue(newStr) {
  var newN = newStr.slice(-3, -1);
  console.log(newN);
}
negativeSliceValue("Vasile");

// 9. WAF, (string, start, end), WR the characters between (start and end)

function subString(anotherString) {
  var anotherN = anotherString.substring(4, 7);
  console.log(anotherN);
}
subString("Ana are mere!");

// 10. WAF (string1, string2), to replace the string2 within string1;

function replaceStr(firstString, secondString) {
  var replaceString = firstString.replace("Vasile", secondString);
  console.log(replaceString);
}
replaceStr("Vasile", "Brendea");

// 11. WAF(string), WR true if the length is even. (%2 === 0)

function lengthIsEven(str1) {
  var strLength = str1.length;
  var ressEven = strLength % 2 === 0;
  console.log(strLength, ressEven);
}
lengthIsEven("Vasile");

// 12. WAF(string1, s2), WR the sum of lengths of s1 and s2;

function sumOfLength(s1, s2) {
  var s1Length = s1.length;
  var s2Length = s2.length;
  var sumOfLength = s1Length + s2Length;
  console.log(sumOfLength);
}
sumOfLength("masina", "skoda");

// 13. WAF(string1, s2), WR true if s1 starts with s2;

function startWith(s3) {
  var startString = s3.startsWith("Skoda");
  console.log(startString);
}
startWith("Skoda Fabia");

// 14.WAF(string, number) to remove the character from position number using slice

function removeCharacter(badString) {
  var deletingNumber = 6;
  var repareString = badString.slice(0, deletingNumber);
  console.log(repareString);
}
removeCharacter("Vasilee");

// 15.WAF (string, string) WR the number of aparition of string 2 whithin string1.

function numberString(stringNumele) {
  var numberOfCaracter = stringNumele.match(/e/g);
  console.log(numberOfCaracter.length);
}
numberString("Brendea");

// 16. create an array

var newArray = ["skoda", "dacia", "ford", "opel"];
console.log(newArray);

// 17. WAF to add a string into array

var addArray = newArray.concat("renault");
console.log(addArray);

// 18. WAF (arr, string) to add string into array on position 0;

var array1 = ["mazda", "volvo", "mercedes"];
var stringForArray = "bmw";
var addInArray = array1.unshift(stringForArray);
console.log(array1);

// 19. WAF (arr, number) to add the number into array

var array2 = ["mazda", "volvo", "mercedes"];
var numberForArray = 4;
var addNumberInArray = array2.unshift(numberForArray);
console.log(array2);

// 20; WAF (arr) WR the last element from array

var array3 = ["mazda", "volvo", "mercedes"];
var lastElementFromArray = array3.slice(2, 3);
console.log(lastElementFromArray);

// 21; WAF (string) WR the characters from string as array

var myName = "Vasile";
console.log(Array.from(myName));

// 22. WAF (arr) WR the reversed array

var array4 = ["mazda", "volvo", "mercedes"];
var reverseArray = array4.reverse();
console.log(reverseArray);

// 23. WAF (string) to return the inversed string. ex: abc ==> cba

var myNewName = "Vasile";
var newString = myNewName.split("").reverse().join("");
console.log(newString);

// 24. WAF (arr, x) to remove the value from position x from array

var array5 = ["mazda", "volvo", "mercedes"];
var removeArray = 1;
var removeArrayPosition = array5.splice(removeArray);
console.log(removeArrayPosition);

// 25. WAF (arr, x) WR true if there is any value equal x into the array

var array6 = [1, 2, 3, 4, 5];
var numberInArray = 4;
var findNumberInArray = array6.includes(numberInArray);
console.log(findNumberInArray);

// 26. WAF (arr, y) WR an array containing all the values except y

var array7 = ["mazda", "volvo", "mercedes"];
var newRemoveArray = 1;
var newArray7 = array7.splice(newRemoveArray, 1);
console.log(array7);

// 27. WAF (arr) of numbers which returns the sorted array;

var array8 = ["mazda", "volvo", "mercedes"];
var sortArray = array8.sort();
console.log(array8);

// 28. WAF (arr) WR the rotated array (1 time)

var array9 = ["mazda", "volvo", "mercedes"];
var rotateArray9 = array9.reverse();
console.log(rotateArray9);

// 29. WAF (arr) of numbers WR another array which contains the squared values; [1,2,3] ==> [1,4,9]

var array10 = [1, 2, 3];
var modifiedArray = array10.splice(1, 2, 4, 9);
console.log(array10);

// 30. WAF (r: number) WR the  surface of a circle having the raduis equal r;

var radius = { r: 6 };
var areaOfCircle = Math.PI * radius.r * radius.r;
console.log(areaOfCircle);

// 31. WAF (arr) which prints to the console the value from the array (one by one)

var array11 = ["mazda", "volvo", "mercedes"];
var printsToConsole = array11.join(" ");
console.log(printsToConsole);

// 32. WAF writeToConsole(value) which prints the value to the console;

function writeToConsole(value) {
  console.log(value);
}
writeToConsole(3);

// 33. WAF (arr1, arr2) which returns another array with elements from arr1 and arr2;

var array11 = ["mazda", "volvo", "mercedes"];
var array12 = ["skoda", "dacia", "ford", "opel"];
var concatArrays = array11.concat(array12);
console.log(concatArrays);

// 34; WAF (arr, position) (arr) contains strings, which replace the element from position x with the inversed value; ex: ['ana', 'xy'], 1 ==> ["ana", "yx"]

var array13 = ["skoda", "dacia", "ford", "opel"];
var reversed = array13[3];
var stringReversed = reversed.split("").reverse().join("");
var newArray13 = array13.splice(3, 1, stringReversed);
console.log(array13);

// 35. WAF: (arr, value) WR the position of value into the array

var array14 = [1, 2, 3, 4, 5];
var valueFromArray14 = 2;
var findIndex = array14.indexOf(valueFromArray14);
console.log(findIndex);

// 36. WAF (n) which returns an array with n elements

var createArray = new Array(2);
console.log(createArray);

// 37. WAF(string) WR string withowt spaces. ex: "    a    bcd   xyzt    " ==> "abcdxyzt";

var stringWithSpace = "    a    bcd   xyzt    ";
//var stringWithoutSpace = stringWithSpace.trim();
var newStringWithoutSpace = stringWithSpace.replace(/ /g, "");
console.log(newStringWithoutSpace);

// 38. WAF (X) which returns true if x is array

var emtyArray = [];
console.log(Array.isArray(emtyArray));

// 39. WAF (y) which returns true if y is string;

var verifyString = "Vasile";
console.log(typeof verifyString === "string");

// 40. WAF (string, number) which returns the string + number

var string3 = "copii";
var number3 = 2;
console.log(number3 + " " + string3);

// 41. WAF WR the inverse value; suppose you have a door; write a function which toggle the state door. isOPEN/isClosed

function statusDoor(f) {
  var modifiedDoor = "The door is " + f + " !";
  console.log(modifiedDoor);
}
statusDoor("close");

// 42. WAF WR the number of miliseconds of your life;

var totalMiliseconds = Date.now();
var dateOfBirth = new Date(1984, 4, 17);
var diferenceMiliseconds = dateOfBirth.getTime();
var milisecondsAge = totalMiliseconds - diferenceMiliseconds;
console.log(milisecondsAge);

// 43. WAF WR current date + 2h

var date = new Date();
date.setHours(date.getHours() + 2);
console.log(date);

// 44. WAF WR day of the week of the current date

var date2 = new Date();
console.log(date2.getDay());

// 45. WAF WR 	 the difference between 2 dates

var date3 = new Date();
var date4 = new Date(2020, 7, 23);
//var date4 = date3.setDate(date3.getDate() + 2);
console.log(date4.getDate() - date3.getDate());
