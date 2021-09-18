//Write a function called "modulo".Given 2 numbers, "modulo" returns the remainder after dividing
//num1 by num2. Notes:Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your
// implementation. 0 % ANYNUMBER = 0. ANYNUMBER % 0 = NaN. If either operand is NaN, then the result is NaN.
//Modulo always returns the sign of the first number, even if the remainder is 0.

// function modulo(num1, num2) {
//   if (num1 === 0) {
//     return 0;
//   }
//   if (num2 === 0) {
//     return NaN;
//   }
//   if (isNaN(num1) || isNaN(num2)) {
//     return NaN;
//   }
//   var resultIsPositive = true;
//   if (num1 < 0) {
//     resultIsPositive = false;
//   }
//   num1 = Math.abs(num1);
//   num2 = Math.abs(num2);

//   while (num1 >= num2) {
//     num1 -= num2;
//   }
//   if (resultIsPositive) {
//     return num1;
//   } else {
//     return -num1;
//   }
// }
// var output = modulo(25, 4);
// console.log(output); // --> 1

//Write a function called "multiply". Given 2 numbers, "multiply" returns their product.
//Notes:It should not use the multiply operator - *

// function multiply(num1, num2) {
//   var resultIsPositive = true;
//   if ((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)) {
//     resultIsPositive = false;
//   }
//   num1 = Math.abs(num1);
//   num2 = Math.abs(num2);
//   var result = 0;
//   for (var i = 0; i < num2; i++) {
//     result += num1;
//   }
//   if (resultIsPositive) {
//     return result;
//   } else {
//     return -result;
//   }
// }
// var output = multiply(4, 7);
// console.log(output); // --> 28

//Write a function called "isOddWithoutModulo". Given a number, "isOddWithoutModulo" returns
//whether the passed in number is odd. Note: It does so without using the modulo operator (%).
//It should work for negative numbers and zero.

// function isOddWithoutModulo(num) {
//   if (num === 0) {
//       return false;
//   }
//   num = Math.abs(num);
//   while (num >= 2) {
//       num = num - 2;
//   }
//   if (num === 1) {
//       return true;
//   } else {
//       return false;
//   }
// }
// var output = isOddWithoutModulo(17);
// console.log(output); // --> true

//Write a function called "isEvenWithoutModulo". Given a number, "isEvenWithoutModulo"
//returns whether it is even. Notes: It does so without using the modulo operator (%).
//It should work for negative numbers and zero.

// function isEvenWithoutModulo(num) {
//   if (num === 0) {
//     return true;
//   }
//   num = Math.abs(num);
//   while (num >= 2) {
//     num = num - 2;
//   }
//   if (num === 0) {
//     return true;
//   }
//   return false;
// }
// var output = isEvenWithoutModulo(8);
// console.log(output); // --> true

//Write a function called "multiplyBetween". Given 2 integers, "multiplyBetween"  returns the product
//between the two given integers, beginning at num1, and excluding num2. Notes: The product between 1 and
//4 is 1 * 2 * 3 = 6. If num2 is not greater than num1, it should return 0.

// function multiplyBetween(num1, num2) {
//     if (num2 <= num1) {
//         return 0;
//     }
//     var result = 1;
//   for (var i = num1; i < num2; i++) {
//       result *= i;
//   }
//   return result;
// }
// var output = multiplyBetween(2, 5);
// console.log(output); // --> 24

//Write a function called "computeSumBetween". Given 2 integers, "computeSumBetween" returns
//the sum between the two given integers, beginning at num1, and excluding num2. Notes: The sum betwee 1
// and 4 is 1 + 2 + 3 = 6. If num2 is not greater than num1, it should return 0.

// function computeSumBetween(num1, num2) {
//   if (num2 <= num1) {
//       return 0;
//   }

//   var sum = 0;
//   for (var i = num1; i < num2; i++) {
//       sum += i
//   }
//   return sum;
// }
// var output = computeSumBetween(2, 5);
// console.log(output); // --> 9

//Write a function 'transformFirstAndLast' that takes in an array, and returns an object with: the first
// element of the array as the object's key, and the last element of the array as that key's value.

// function transformFirstAndLast(array) {
//   var obj = {};
//   var key = array[0];
//   var value = array[array.length - 1];
//   obj[key] = value;
//   return obj;
// }
// var input = ["Kevin", "Bacon", "Love", "Hart", "Costner", "Coleman"];
// var output = transformFirstAndLast(input);
// console.log(output);

//Write a function 'transformArrayToObject' which takes in an array of arrays, and returns an object
//with each pair of elements in the array as a key-value pair. Example input: var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

//function transformArrayToObject(array) {
  //   var result = {};
  //   for (var i = 0; i < array.length; i++) {
  //       var key = array[i][0];
  //       var value = array[i][1];
  //       result[key] = value;
  //   } 
  // OR
//   var result = {};
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array[i].length; j++) {
//       var key = array[i][0];
//       var value = array[i][1];
//       result[key] = value;
//     }
//   }
//   return result;
// }
// var input = [
//   ["make", "Ford"],
//   ["model", "Mustang"],
//   ["year", 1964],
// ];
// var output = transformArrayToObject(input);
// console.log(output);

//Write a function called "transformEmployeeData" that transforms some employee data from one format 
//to another. The argument will look like this: var input = [
//   [
   //     ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  //  ],
   // [
     //   ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    //]
//];
//Given that input, the return value should look like this:
//[
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]

function transformEmployeeData(employeeData) {
  var container = [];
  for (var i = 0; i < employeeData.length; i++) {
    var personArray = employeeData[i];
    var personObject = {};
    for (var j = 0; j < personArray.length; j++) {
      var key = personArray[j][0];
      var value = personArray[j][1];
      personObject[key] = value;
    }
    container.push(personObject);
  }
  return container;
}
var input = [
  [
    ["firstName", "Joe"],
    ["lastName", "Blow"],
    ["age", 42],
    ["role", "clerk"],
  ],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"],
  ],
];
var output = transformEmployeeData(input);
console.log(output);