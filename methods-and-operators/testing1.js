// function assertEqual(actual, expected, testName) {
//   if (actual === expected) {
//     console.log("passed");
//   } else {
//     console.log(
//       "FAILED [" +
//         testName +
//         '] Expected "' +
//         expected +
//         '", but got "' +
//         actual +
//         '"'
//     );
//   }
// }
//failed test
// function multiplyByTwo(n) {
//   return n * 2 + 1;
// }

// var actualOne = multiplyByTwo(2);
// var expectedOne = 4;
// var testNameOne = "It doubles 2 to 4";

// assertEqual(actualOne, expectedOne, testNameOne);

// Passed test
//  function multiplyByTwo(n) {
//    return n * 2;
//  }
//  var actualOne = multiplyByTwo(2);
//  var expectedOne = 4;
//  var testNameOne = "It doubles 2 to 4";
//  assertEqual(actualOne, expectedOne, testNameOne);

// function assertArraysEqual(actual, expected, testName) {
//   var sameLength = actual.length === expected.length;
//   var sameValues = true;
//   for (var i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       sameValues = false;
//       break;
//     }
//   }

//   if (sameLength && sameValues) {
//     console.log("passed");
//   } else {
//     console.log(
//       "FAILED [" +
//         testName +
//         '] Expected "' +
//         expected +
//         '", but got "' +
//         actual +
//         '"'
//     );
//   }
// }
// var actual = "broken".split("");
// var expected = ["b", "r", "o", "k", "e", "n"];
// assertArraysEqual(actual, expected, "splits string into array of characters");

// function assertObjectsEqual(actual, expected, testName) {
//   actual = JSON.stringify(actual);
//   expected = JSON.stringify(expected);
//   if (actual === expected){
//       console.log('passed');
//   } else {
//       console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
//   }
// }
// var person = {
//   firstName: 'Cassidy',
//   lastName: 'Jacobs'
// };
// //updateObject(person, 'firstName', 'Jack'); presented to aid understanding of how assertObjectsEqual should behave once you have built it.

// var expected = {
//   firstName: 'Jack',
//   lastName: 'Jacobs'
// };

// assertObjectsEqual(person, expected, "updates person's existing first name field");
// // console output:
// // passed

// function assertWithinRange(low, high, actual, testName) {
//   if (actual >= low && actual <= high) {
//     console.log("passed");
//   } else {
//     console.log(
//       "FAIL [" +
//         testName +
//         '] "' +
//         actual +
//         '" not within range ' +
//         low +
//         " to " +
//         high +
//         ""
//     );
//   }
// }

// var blackjackScore = 20;
// assertWithinRange(
//   4,
//   21,
//   blackjackScore,
//   "blackjack score should be between 4 and 21"
// );
// // console output:
// // passed
// var price = 101;
// assertWithinRange(1, 100, price, "price should be between 1 and 100");
// // console output:
// // FAIL [price should be between 1 and 100] "101" not within range 1 to 100

// Applying AssertEqual
// function square(n) {
//   return n * n;
// }

// ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(condition, testName) {
//   if (condition) {
//     console.log("passed");
//   } else {
//     console.log("FAILED [" + testName + "]");
//   }
// }
// TESTS CASES
// var result = square(2);
// assertEqual(
//   result === 4,
//   "should return result of a positive input number squared"
// );

// FUNCTION DEFINITION(S)
// function every(array, callbackFunction) {
//   var doesEveryElementMatch = true;

//   for (var i = 0; i < array.length; i++) {
//     if (doesEveryElementMatch === false) {
//       return doesEveryElementMatch;
//     }
//     doesEveryElementMatch = callbackFunction(array[i]);
//   }

//   return doesEveryElementMatch;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
//   if (actual === expected) {
//     console.log("passed");
//   } else {
//     console.log(
//       "FAILED [" +
//         testName +
//         '] Expected "' +
//         expected +
//         '", but got "' +
//         actual +
//         '"'
//     );
//   }
// }
// // TESTS CASES
// function lessThan10(val) {
//   return val < 10;
// }
// var arrayTrue = [1, 3, 9, 2, 7];
// var actualTrue = every(arrayTrue, lessThan10);
// assertEqual(
//   actualTrue,
//   true,
//   "should return true when all array values return true when tested"
// );

// var arrayFalse = [1, 3, 9, 2, 7];
// var actualFalse = every(arrayFalse, lessThan10);
// assertEqual(
//   actualFalse,
//   false,
//   "should return false when not all the array values return true when tested"
// );

// function map(array, callbackFunction) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     var result = callbackFunction(element);
//     newArray.push(result);
//   }

//   return newArray;
// }

// function cubeAll(numbers) {
//   return map(numbers, function (n) {
//     return n * n * n;
//   });
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertArraysEqual(actual, expected, testName) {
//   var hasSameValues = true;
//   for (var i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       hasSameValues = false;
//       break;
//     }
//   }
//   var hasSameLengths = actual.length === expected.length;
//   if (hasSameValues && hasSameLengths) {
//     console.log("passed");
//   } else {
//     console.log(
//       "FAILED [" + testName + "] Expected " + expected + ", but got " + actual
//     );
//   }
// }

// // TESTS CASES
// function addOne(val) {
//   return val + 1;
// }
// var inputForMap = [1, 2, 3];
// var actualMap = map(inputForMap, addOne);
// var expectedMap = [2, 3, 4];
// assertArraysEqual(
//   actualMap,
//   expectedMap,
//   "should correctly map elements of an array"
// );

// var inputForCubeAll = [1, 3, 5];
// var actualCubeAll = cubeAll(inputForCubeAll);
// var expectedCubeAll = [1, 27, 125];
// assertArraysEqual(
//   actualCubeAll,
//   expectedCubeAll,
//   "should correctly cube all elements of an array"
// );

// FUNCTION DEFINITION(S)
// function addFullNameProp(obj) {
//   var firstName = obj.firstName;
//   var lastName = obj["lastName"];

//   if (firstName && lastName) {
//     obj["fullName"] = firstName + " " + lastName;
//   }

//   return obj;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertObjectsEqual(actual, expected, testName) {
//   actual = JSON.stringify(actual);
//   expected = JSON.stringify(expected);
//   if (actual === expected) {
//     console.log("passed");
//   } else {
//     console.log(
//       "FAILED [" + testName + "] Expected " + expected + ", but got " + actual
//     );
//   }
// }

// // TESTS CASES
// var inputObject = {
//   firstName: "David",
//   lastName: "Coleman",
// };
// var outputObject = addFullNameProp(inputObject);
// var expectedObject = {
//   firstName: "David",
//   lastName: "Coleman",
//   fullName: "David Coleman",
// };
// assertObjectsEqual(
//   outputObject,
//   expectedObject,
//   "should add fullName property to input object"
// );

// //missing first Name
// var inputObject = {
//   lastName: "Coleman",
// };
// var outputObject = addFullNameProp(inputObject);
// var expectedObject = {
//   lastName: "Coleman",
// };
// assertObjectsEqual(
//   outputObject,
//   expectedObject,
//   "should not add fullName property to input object if firstName is missing"
// );

// // missing last Name
// var inputObject = {
//   firstName: "David",
// };
// var outputObject = addFullNameProp(inputObject);
// var expectedObject = {
//   firstName: "David",
// };
// assertObjectsEqual(
//   outputObject,
//   expectedObject,
//   "should not add fullName property to input object if lastName is missing"
// );

// // FUNCTION DEFINITION(S)
// function average(numbers) {
//   // uses sum function
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   // returns the average of an array of numbers
//   return sum / numbers.length;
// }

// function sum(numbers) {
//   // returns the sum of an array of numbers
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
//   if (actual === expected) {
//     console.log("passed");
//   } else {
//     console.log(
//       "FAILED [" + testName + "] Expected " + expected + ", but got " + actual
//     );
//   }
// }
// // TESTS CASES
// var numbersArray = [1, 2, 3, 4, 5];
// var actualNumbers = average(numbersArray);
// var expectedNumber = 3;
// assertEqual(
//   actualNumbers,
//   expectedNumber,
//   "should sum all elements in the array of numbers and return the average"
// );

// var numbersArray = [1, 2, 3, 4, 5];
// var actualNumbers = sum(numbersArray);
// var expectedNumber = 15;
// assertEqual(
//   actualNumbers,
//   expectedNumber,
//   "should sum all elements in the array of numbers"
// );
