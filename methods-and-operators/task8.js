// function isOldEnoughToDrinkAndDrive(age) {
//   // your code here

//   if (age >= 21) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var output = isOldEnoughToDrinkAndDrive(22);
// console.log(output); // --> false
// function addFullNameProperty(obj) {
//   // your code here
//   var fullName = "obj['firstName'] + ' ' + obj['lastName']";
//   return fullName;
// }
// var person = {
//   firstName: 'Jade',
//   lastName: 'Smith'
// };
// addFullNameProperty(person);
// console.log(person.fullName); // --> 'Jade Smith'

// var arrayOfObjectToCount = ['a', 'b', 'b', 'c', 'c', 'd'];
// var count = {};
// for (var i = 0; i < arrayOfObjectToCount.length; i++) {
//  var currentCount = arrayOfObjectToCount[i];
//  if(count[currentCount] === undefined) {
//    count[currentCount] = 1;
//  } else {
//    count[currentCount] = count[currentCount] + 1;
//  }
// }
// console.log(count);

//Write a function called "removeEvenValues". Given an object, "removeEvenValues" removes any
//properties whose values are even numbers. Do this in place and return the original object,
//do not construct a cloned object that omits the properties.

// function removeEvenValues(obj) {
//   // your code here
//   for (var key in obj)n{
//       if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
//           delete obj[key];
//       }
//   }
// }
// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeEvenValues(obj);
// console.log(obj); // --> { b: 3 }

//Write a function called "countNumberOfKeys". Given an object, "countNumberOfKeys" returns
// how many properties the given object has.

// function countNumberOfKeys(obj) {
//   // your code here
//   // var count = Object.keys(obj)
//   // return count.length;
//   // or
//   var count = 0;
//   for (var key in obj) {
//   count += 1;
//   }
//   return count;
//  }
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// var output = countNumberOfKeys(obj);
// console.log(output); // --> 3

// function convertDoubleSpaceToSingle(str) {
//   // your code here
//   var splitStr = str.split("  ");
//   console.log(splitStr);
//   return splitStr.join(" ");
// }
// var output = convertDoubleSpaceToSingle("string  with  double  spaces");
// console.log(output); // --> "string with double spaces"

//Write a function called "getAllElementsButNth". Given an array and an index, "getAllElementsButNth"
//returns an array with all the elements but the nth.

// function getAllElementsButNth(array, n) {
//   // your code here
//   var newArray = [];
//   for (var i = 0; i < array.length; i++){
//       if (i === n){
//           continue;
//       }
//       newArray.push(array[i]);
//   }
//  return newArray;
// }
// var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']

//Write a function called "findMinLengthOfThreeWords". Given 3 words, "findMinLengthOfThreeWords"
//returns the length of the shortest word.

// function findMinLengthOfThreeWords(word1, word2, word3) {
//   // your code here
//   var array = [word1, word2, word3];
//   var minLengthOfWords = word1.length;
//   for (var i = 1; i < array.length; i++) {
//       if (array[i].length < minLengthOfWords) {
//           minLengthOfWords = array[i].length;
//       }
//   }
//   return minLengthOfWords;
//  }
//  var output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1
//function getIndexOf(char, str) {
// for (var i = 0; i < str.length; i++) {
// if (str[i] === char) {
//   return i;
// }
//}
// return -1;
// }
// OR

//    var arrayOfStr = str.split(" ");
//   for (var i = 0; i < arrayOfStr.length; i++) {
//     if (arrayOfStr[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }
// var output = getIndexOf('a', 'I am a hacker');
// console.log(output); // --> 2
// function getLongestOfThreeWords(word1, word2, word3) {
//   // your code here
//   var array = [word1, word2, word3];
//   var longest = word1;
//   for (var i = 1; i < array.length; i++) {
//       if (array[i].length > longest.length) {
//           longest = array[i];
//       }
//   }
//   return longest;
// }
// var output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output); // --> 'these'

// function findShortestOfThreeWords(word1, word2, word3) {
//   var array = [word1, word2, word3];
//   var shortestWords = word1;
//   for (var i = 1; i < array.length; i++) {
//       if (array[i].length < shortestWords.length) {
//           shortestWords = array[i];
//       }
//   }
//   return shortestWords;
// }
// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'

//Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.
//Notes:If keys are present in the given array, but are not in the given object, it should ignore them.
//It does not modify the passed in object.

function select(arr, obj) {
  var resultObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      resultObj[arr[i]] = obj[arr[i]];
    }
  }
  return resultObj;
}
var arr = ["a", "c", "e"];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
