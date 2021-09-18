// function filterOddLengthWords(words) {
//   // your code here
//   var oddLengthWords = [];
//   for (var i = 0; i < words.length; i++) {
//     if (words[i] % 2 === 1) {
//       oddLengthWords.push(words[i]);
//     }
//   }
//   return oddLengthWords;
// }
// var output = filterOddLengthWords(["there", "it", "is", "now"]);
// console.log(output); // --> ['there', "now']

//Write a function called "getLengthOfShortestElement". Given an array, "getLengthOfShortestElement"
//returns the length of the shortest string in the given array. It should return 0 if the array is empty.

// function getLengthOfShortestElement(arr) {
//   // your code here
//   if (arr.length === 0) {
//     return 0;
//   }
//   var shortestString = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i].length < shortestString.length) {
//       shortestString = arr[i];
//     }
//   }
//   return shortestString.length;
// }
// var output = getLengthOfShortestElement(["one", "two", "three"]);
// console.log(output); // --> 3

//Write a function called "getLongestElement".

//Given an array, "getLongestElement" returns the longest string in the given array. If the array is empty,
//return an empty string.

// function getLongestElement(arr) {
//   // your code here
//   if (arr.length === 0) {
//     return "";
//   }
//   var longestLength = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i].length > longestLength.length) {
//       longestLength = arr[i];
//     }
//   }
//   return longestLength;
// }
// var output = getLongestElement(["one", "two", "three"]);
// console.log(output); // --> 'three

// function findShortestElement(arr) {
//   // your code here
//   if (arr.length === 0) {
//     return "";
//   }
//   var shortestString = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i].length < shortestString.length) {
//       shortestString = arr[i];
//     }
//   }
//   return shortestString;
// }
// var output = findShortestElement(["a", "two", "three"]);
// console.log(output); // --> 'a'

//Write a function called "getElementsThatEqual10AtProperty". Given an object and a key,
//"getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located
//at the given key that are equal to ten. Notes:If the array is empty, it should return an empty array.
//If the array contains no elements that are equal to 10, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.

// function getElementsThatEqual10AtProperty(obj, key) {
//   if (obj[key] === undefined) {
//     return [];
//   }
//   if (Array.isArray(obj[key]) === false) {
//     return [];
//   }
//   if (obj[key].length === 0) {
//     return [];
//   }
//   var arr = [];
//   for (var i = 0; i < obj[key].length; i++) {
//     if (obj[key][i] === 10) {
//       arr.push(obj[key][i]);
//     }
//   }
//   return arr;
// }
// var obj = {
//   key: [1000, 10, 50, 10],
// };
// var output = getElementsThatEqual10AtProperty(obj, "key");
// console.log(output); // --> [10, 10]

// function countAllCharacters(str) {
//   if (str === "") {
//     return {};
//   }
//   var resultObj = {};
//   for (var i = 0; i < str.length; i++) {
//     var currentcount = str[i];
//     if (resultObj[currentcount] === undefined) {
//       resultObj[currentcount] = 1;
//     } else {
//       resultObj[currentcount] += 1;
//     }
//   }
//   return resultObj;
// }
// var output = countAllCharacters("banana");
// console.log(output); // --> {b: 1, a: 3, n: 2}

// function removeElement(array, discarder) {
//   // your code here
//   if (array.length === 0) {
//     return [];
//   }
//   var removeDiscarder = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === discarder) {
//       continue;
//     }
//     removeDiscarder.push(array[i]);
//   }
//   return removeDiscarder;
// }
// var output = removeElement([1, 2, 3, 2, 1], 2);
// console.log(output); // --> [1, 3, 1]

// function keep(array, keeper) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] !== keeper) {
//       array.splice(i, 1);
//       i--;
//     }
//   }
//   return array;
// }
// var output = keep([1, 2, 3, 2, 1], 2);
// console.log(output); //--> [2, 2]

// OR
// function keep(array, keeper) {
//   var keepArray = [];
//   for (var i = 0; i < array.length; i++){
//     if (array[i] === keeper) {
//       keepArray.push(array[i]);
//     }
//   }
//   return keepArray;
// }
// var output = keep([1, 2, 3, 2, 1], 2)
// console.log(output); //--> [2, 2]

// function getEvenLengthWordsAtProperty(obj, key) {
//   if (obj[key] === undefined) {
//     return [];
//   }
//   if (Array.isArray(obj[key]) === false) {
//     return [];
//   }
//   if (obj[key].length === 0) {
//     return [];
//   }
//   var evenLengthWords = [];
//   for (var i = 0; i < obj[key].length; i++) {
//     if (obj[key][i].length % 2 === 0) {
//       evenLengthWords.push(obj[key][i]);
//     }
//   }
//   return evenLengthWords;
// }
// var obj = {
//   key: ["a", "long", "game"],
// };
// var output = getEvenLengthWordsAtProperty(obj, "key");
// console.log(output); // --> ['long', 'game']

// //Write a function called "sumDigits".Given a number, "sumDigits" returns the sum of all its digits.
// function sumDigits(num) {
//   var inputIsNegative = false;
//   if (num < 0) {
//     num = Math.abs(num);
//     inputIsNegative = true;
//   }
//   var total = 0;
//   var numString = num.toString();
//   var firstValue = Number(numString[0]);
//   for (var i = 0; i < numString.length; i++) {
//     total += Number(numString[i]);
//   }
//   if (inputIsNegative) {
//     total = total - 2 * firstValue;
//     return total;
//   } else {
//     return total;
//   }
// }
// var output = sumDigits(1148);
// console.log(output); // --> 14
// var output = sumDigits(-316);
// console.log(output); // --> 4

// function findShortestWordAmongMixedElements(arr) {
//   if (arr.length === 0) {
//     return "";
//   }
//   var strings = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       strings.push(arr[i]);
//     }
//   }
//   if (strings.length === 0) {
//     return "";
//   }
//   var shortest = strings[0];
//   for (var i = 1; i < strings.length; i++) {
//     if (strings[i].length < shortest.length) {
//       shortest = strings[i];
//     }
//   }
//   return shortest;
// }
// var output = findShortestWordAmongMixedElements([4, "two", 2, "three"]);
// console.log(output); // --> 'two'

// function getLargestNumberAmongMixedElements(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   var numberArray = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       numberArray.push(arr[i]);
//     }
//   }
//   if (numberArray.length === 0) {
//     return 0;
//   }
//   var largestNumber = numberArray[0];
//   for (var i = 1; i < numberArray.length; i++) {
//     if (numberArray[i] >= largestNumber) {
//       largestNumber = numberArray[i];
//     }
//   }
//   return largestNumber;
// }
// var output = getLargestNumberAmongMixedElements([3, "word", 5, "up", 3, 1]);
// console.log(output);

// function convertScoreToGradeWithPlusAndMinus(score) {
//   if (score > 100 || score < 0) {
//     return "INVALID SCORE";
//   } else if (score <= 59) {
//     return "F";
//   }
//   if (score <= 69) {
//     if (score <= 62) {
//       return "D-";
//     } else if (score >= 68) {
//       return "D+";
//     } else {
//       return "D";
//     }
//   } else if (score <= 79) {
//     if (score <= 72) {
//       return "C-";
//     } else if (score >= 78) {
//       return "C+";
//     } else {
//       return "C";
//     }
//   } else if (score <= 89) {
//     if (score <= 82) {
//       return "B-";
//     } else if (score >= 88) {
//       return "B+";
//     } else {
//       return "B";
//     }
//   } else if (score <= 100) {
//     if (score <= 92) {
//       return "A-";
//     } else if (score >= 98) {
//       return "A+";
//     } else {
//       return "A";
//     }
//   }
// }
// var output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); // --> 'A-'

// function repeatString(string, num) {
//   var result = "";
//   for (var i = 0; i < num; i++) {
//     result += string;
//   }
//   return result;
// }
// var output = repeatString("code", 3);
// console.log(output); // --> 'codecodecode'


