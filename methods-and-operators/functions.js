//Let us consider the case of wanting to write a function that:
//Takes in an array of numbers
//Returns a new array containing the even numbers from the input array

// function filterEvenElements(numbers) {
//   var evenNumbers = [];
//   if (numbers.length === 0) {
//     return [];
//   }
//   for (var i = 0; i < numbers.length; i++) {
//     // check if current number is even
//     if (numbers[i] % 2 === 0) {
//       // add to evenNumbers array
//       evenNumbers.push(numbers[i]);
//     }
//   }

//   return evenNumbers;
// }
// var outputArray = filterEvenElements([1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(outputArray);

//Write a function called "computeSumOfAllElements". Given an array of numbers, "computeSumOfAllElements"
//returns the sum of all the elements in the given array. If input array is empty,
// your function should return 0.

// function computeSumOfAllElements(numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// var output = computeSumOfAllElements([1, 2, 3, 4]);
// console.log(output);

// var result2 = computeSumOfAllElements([]);
// console.log("should log 0:", result2);

// //Write a function called "computeAverageOfNumbers". Given an array of numbers, "computeAverageOfNumbers"
// //returns their average. If input array is empty, your function should return 0.

// // input is an array of numbers
// //Define a function called computeAverageOfNumbers
// function computeAverageOfNumbers(numbers) {
//   //if input array is empty, return 0
//   if (numbers.length === 0) {
//     return 0;
//   }
//   //create a sum variable,
//   var sum = 0;
//   //iterate over all numbers using for loop
//   for (var i = 0; i < numbers.length; i++) {
//     //increament sum by current value
//     sum += numbers[i];
//   }
//   //return sum divided by the input array length.
//   return sum / numbers.length;
// }
// // your test cases
// var input1 = [1, 2, 3, 4, 5];
// var result1 = computeAverageOfNumbers(input1);
// console.log("should log 3:", result1);

// var input2 = [];
// var result2 = computeAverageOfNumbers(input2);
// console.log("should log 0:", result2);

// //We are going to debug a function that takes in an array of numbers. This function
// // will iterate over the array's number elements, and return a count representing the number
// // of elements whose value is greater than 40. If there are no values above 40, then the
// // function should return 0.

// function getElementsAbove40(numbers) {
//   //create a count variable and set it to zero
//   var count = 0;
//   //iterate over the input array
//   for (var i = 0; i < numbers.length; i++) {
//     //if the current value is over 40
//     if (numbers[i] > 40) {
//       //increment count by 1
//       count++;
//     }
//   }
//   // return count
//   return count;
// }
// var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
// console.log("should log 3:", result1);

// var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
// console.log("should log 0:", result2);

//We are going to debug a function that takes in an array of strings, representing words
//in a sentence. This function should iterate over the input array and should create, and return,
//a resulting sentence from the words therein.

//function createSentence(words) {
//   var sentence = " ";
//   var output = words.join(sentence);
//   return output;

//var sentence = "";
//   for (var i = 0; i < words.length; i++) {
//     if (i === words.length - 1) {
//       sentence += words[i] + ".";
//     } else {
//       sentence += words[i] + " ";
//     }
//   }

//   return sentence;
// }

// var result1 = createSentence(["I", "am", "worth", "it"]);
// console.log('should log "I am worth it.":', result1);

// var result2 = createSentence(["My", "problems", "matter"]);
// console.log('should log "My problems matter.":', result2);

// var arrayOfItemToCount = ["a", "b", "c", "a", "c", "e"];
// var objectOfCounts = {};
// for (var i = 0; i < arrayOfItemToCount.length; i++) {
//   var currentItem = arrayOfItemToCount[i];
//   if (objectOfCounts[currentItem] === undefined) {
//     objectOfCounts[currentItem] = 1;
//   } else {
//     objectOfCounts[currentItem]++;
//   }
// }
// console.log(objectOfCounts);

//Write a function called "countWords". Given a string (words separated by spaces), "countWords"
//returns an object where each key is a word in the given string, with its value being how many
// times that word appeared in the given string. If given an empty string, your function should
// return an empty object.

// function countWords(strings) {
//   if (strings === "") {
//     return {};
//   }
//   var counts = {};
//   var words = strings.split(" ");
//   for (var i = 0; i < words.length; i++) {
//     var currentString = words[i];
//     if (counts[currentString] === undefined) {
//       counts[currentString] = 1;
//     } else {
//       counts[currentString]++;
//     }
//   }
//   return counts;
// }
// var resultCount = countWords("ask a bunch get a bunch");
// console.log(resultCount);

//Write a function called "countWords". Given a string (words separated by spaces),
//"countWords" returns an object where each key is a word in the given string, with its
// value being how many times that word appeared in the given string. If given an empty string,
// your function should return an empty object.

//function countAllCharacters(string) {
//   // your code here
//   if (string === "") {
//     return {};
//   }
//   var counts = {};
//   for (var i = 0; i < string.length; i++) {
//     if (counts[string[i]] === undefined) {
//       counts[string[i]] = 1;
//     } else {
//       counts[string[i]]++;
//     }
//   }
//   return counts;

//   if (string === "") {
//     return {};
//   }
//   var counts = {};
//   for (var i = 0; i < string.length; i++) {
//     var currentCount = string[i];
//     if (counts[currentCount] === undefined) {
//       counts[currentCount] = 1;
//     } else {
//       counts[currentCount]++;
//     }
//   }
//   return counts;
// }
// var result1 = countAllCharacters("banana");
// console.log('should log "{b: 1, a: 3, n: 2}":', result1);

// var result2 = countAllCharacters("");
// console.log('should log "{}":', result2);

//complete a function that takes in two parameters, an array of ingredients for a recipe,
//and an ingredient to search for within that array, determines whether the ingredient to search
//for is present within the array, and returns a specific string for each case. Your function should
//use an if else statement to determine if the ingredient to search for is present within the list of
//ingredients, and if it is, should return the string '{ingredientToSearchFor} is on the list', and if
// not, should return the string '{ingredientToSearchFor} is not on the list', where {ingredientToSearchFor} has the value of the argument the function is called on.

// function findIngredient(ingredientList, ingredientToSearchFor) {
//   for (var i = 0; i < ingredientList.length; i++) {
//     var searchList = ingredientList[i];
//     if (searchList === ingredientToSearchFor) {
//       return ingredientToSearchFor + " is on the list";
//     }
//   }
//   return ingredientToSearchFor + " is not on the list";
// }

// //   if (ingredientList.includes(ingredientToSearchFor)) {
// //       return ingredientToSearchFor + " is on the list";
// //   } else {
// //   return ingredientToSearchFor + " is not on the list";
// //  }
// //}

// var result1 = findIngredient(["flour", "butter", "sugar", "eggs"], "sugar");
// console.log('should log "sugar is on the list":', result1);

// var result2 = findIngredient(["milk", "cereal", "fruit"], "pop-tarts");
// console.log('should log "pop-tarts is not on the list":', result2);

// //complete a function that takes in one parameter, an object containing the fruit totals for
// // a project, and determines whether the listed total for bananas is greater than 3 and the
// // listed total for strawberries is greater than 10, and returns a specific string for each case.
// //Your function should use an if else statement to determine if the totals of bananas and
// //strawberries are sufficient, and if they are, should return the string 'We have enough fruit,
// // with ' + {totalBananas} + ' bananas, and ' + {totalStrawberries} + ' strawberries',
// //where {totalBananas} and {totalStrawberries} are the numbers of each fruit in the fruit totals object.
// // If they are not, your function should return the string 'We do not have enough of both fruits'.

// function measureRequiredFruit(fruitTotals) {
//   if (fruitTotals["bananas"] > 3 && fruitTotals["strawberries"] > 10) {
//     return (
//       "we have fruit, with " +
//       fruitTotals["bananas"] +
//       " bananas, and " +
//       fruitTotals["strawberries"] +
//       " strawberries"
//     );
//   } else {
//     return "We do not have enough of both fruits";
//   }
// }
// var result1 = measureRequiredFruit({ bananas: 4, strawberries: 12 });
// console.log(
//   'should log "We have enough fruit, with 4 bananas, and 12 strawberries":',
//   result1
// );

// var result2 = measureRequiredFruit({ bananas: 5, strawberries: 15 });
// console.log(
//   'should log "We have enough fruit, with 5 bananas, and 15 strawberries":',
//   result2
// );

// var result3 = measureRequiredFruit({ bananas: 2, strawberries: 12 });
// console.log('should log "We do not have enough of both fruits":', result3);

// var result4 = measureRequiredFruit({ bananas: 5, strawberries: 8 });
// console.log('should log "We do not have enough of both fruits":', result4);

// var result5 = measureRequiredFruit({ bananas: 3, strawberries: 9 });
//console.log('should log "We do not have enough of both fruits":', result5);

// function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
// if stock of tomatoes and stock of onions are both less than minimum
// return 'We need more tomatoes and more onions.'
// otherwise if stock of tomatoes is less than minimum but stock of onions is sufficient
// return 'We have enough onions, but need more tomatoes.'
// otherwise if stock of tomatoes is sufficient but stock of onions is less than minimum
// return 'We have enough tomatoes, but need more onions.'
// otherwise return 'We have enough tomatoes and onions. There will be {excessTomatoes}
// extra tomato, and {excessOnions} extra onion.'

//   var resultTomatoes = stockTomatoes - recipeMinimums.tomatoes;
//   var resultOnions = stockOnions - recipeMinimums.onions;
//   if (
//     stockTomatoes < recipeMinimums.tomatoes &&
//     stockOnions < recipeMinimums.onions
//   ) {
//     return "We need more tomatoes and more onions.";
//   } else if (
//     stockTomatoes < recipeMinimums.tomatoes &&
//     stockOnions === recipeMinimums.onions
//   ) {
//     return "We have enough onions, but need more tomatoes.";
//   } else if (
//     stockTomatoes === recipeMinimums.tomatoes &&
//     stockOnions < recipeMinimums.onions
//   ) {
//     return "We have enough tomatoes, but need more onions.";
//   } else {
//     return (
//       "We have enough tomatoes and onions. There will be " +
//       resultTomatoes +
//       " extra tomato, and " +
//       resultOnions +
//       " extra onion."
//     );
//   }
// }
// var result1 = verifyStock({ tomatoes: 3, onions: 7 }, 5, 8);
// console.log(
//   'should log "We have enough tomatoes and onions. There will be 2 extra tomato, and 1 extra onion.":',
//   result1
// );

//Write a function that takes one parameter, an array of elements, and logs every element, beginning
//at the back of the input array and ending at the front of the input array, to the console.
//Your function should use a loop to log every element from the back of the array, up to the
//front of the array, then return nothing.

// function loopInReverse(array) {
//   for (var i = array.length - 1; i > -1; i--) {
//     console.log(array[i]);
//   }
// }
// loopInReverse(["a", "b", "c", "d"]);
// console output:
// d
// c
// b
// a

//We are going to complete a function that takes two parameters, an array of elements and an
//index, and logs every element, except for the element at the input index, to the console.
//Your function should use a loop to log every element except one at the inputted index, and
//should also use a continue statement (must use a semi-colon after continue for tests to pass)
//to skip over the value at the inputted index, then return nothing. Your code should NOT use else.

//function useContinue(array, index) {
// create a loop which iterates over the input array
// if current index is equal to input index
// use described statement to skip to next iteration of loop (must include semi-colon!)
// log current array element to the console
//   for (var i = 0; i < array.length; i++) {
//     if (i === index) {
//       continue;
//     }
//     console.log(array[i]);
//   }
// }
// useContinue(["a", "b", "c", "d"], 1);
// // console output:
// // a
// // c
// // d

//We are going to complete a function that takes two parameters, an array of elements and an index,
// and logs every element, except those whose index is greater than the input index. Your function
// should use a loop to log every element up to and including the element located at the input index,
//and should also use a break statement (must use a semi-colon after break for tests to pass) to skip
//over the values with indexes greater than that of the input index, then return nothing.
// Your code should NOT use else.

// function useBreak(array, index) {
//   for (var i = 0; i < array.length; i++) {
//     if (i > index) {
//       break;
//     }
//     console.log(array[i]);
//   }
// }
// useBreak(["a", "b", "c", "d", "e"], 2);
// // console output:
// // a
// // b
// c

//We are going to complete a function that takes one parameter, an object of properties,
//and logs all of its keys (one at a time) to the console. Your function should use a for-in loop
//to log each key in the object, then return nothing. DO NOT USE Object.keys() in your solution.

// function loopOverKeys(object) {
//   // create a loop which iterates over the input object
//   // log current key to the console
//   for (var key in object) {
//     console.log(key);
//   }
// }
// loopOverKeys({ a: 1, b: 2, c: 3 });
// console output:
// a
// b
// c

// function loopOverValues(object) {
//   for (var key in object) {
//     var currentValue = object[key];
//     console.log(currentValue); //OR
//     //console.log(object[key])
//   }
// }
// loopOverValues({ a: 1, b: 2, c: 3 });
// // console output:
// // 1
// // 2
// // 3

//complete a function that takes one parameter, a object of objects, and logs all of its values
//(log each value in first inner object, one at a time, then second inner object, and so on...)
//to the console. Your function should use a nested for-in loop to log each value from all inner objects,
// then return nothing.

// function loopAnObjectOfObjects(nestedObject) {
//   for (var key in nestedObject) {
//     for (var innerKey in nestedObject[key]) {
//       console.log(nestedObject[key][innerKey]);
//     }
//   }
// }
// loopAnObjectOfObjects({ a: { a: 1, b: 2 }, b: { a: 5, b: 6 } });
// // console output:
// // 1
// 2
// 5
// 6

//We are going to complete a function that takes one parameter, a array of objects, and logs all of
//its values (log each value in first inner object, one at a time, then second inner object, and so on...)
//to the console. Your function should use a for-in loop nested inside of a for loop to log each value from all
// inner objects, then return nothing.

// function loopAnArrayOfObjects(arrayOfObjects) {
//   for (var i = 0; i < arrayOfObjects.length; i++) {
//     for (var key in arrayOfObjects[i]) {
//       console.log(arrayOfObjects[i][key]);
//     }
//   }
// }
// loopAnArrayOfObjects([{ a: 1, b: 2 }, { z: 5, y: 6 }, { q: 14 }]);
// console output:
// 1
// 2
// 5
// 6
// 14

//write a function that takes one parameter, a object of arrays, and logs all of its values
//(log each value in first inner array, one at a time, then second inner array, and so on...)
//to the console. Your function should use a for loop nested inside of a for-in loop to log each
//value from all inner arrays, then return nothing.

// function loopAnObjectOfArrays(objectOfArrays) {
//   for (var key in objectOfArrays) {
//     for (var i = 0; i < objectOfArrays[key].length; i++) {
//       console.log(objectOfArrays[key][i]);
//     }
//   }
// }
// loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// // console output:
// 1
// 2
// 5
// 6
// 14
// 21

//complete a function that takes two parameters, both arrays, and logs all possible combinations
//of elements separated by a space (see example for details...) to the console. Your function should
//use a nested for loop to log all combinations of the two arrays, then return nothing.

// function generateCombinations(array1, array2) {
//   for (var i = 0; i < array1.length; i++) {
//     for (var j = 0; j < array2.length; j++) {
//       console.log(array1[i] + " " + array2[j]);
//     }
//   }
// }
// generateCombinations(["a", "b", "c"], ["d", "e", "f"]);
// console output:
// a d
// a e
// a f
// b d
// b e
// b f
// c d
// c e
// c f

// function filterOddElements(param) {
//   var oddElements = [];
//   for (var i = 0; i < param.length; i++) {
//     if (param[i] % 2 > 0) {
//       oddElements.push(param[i]);
//     }
//   }
//   return oddElements;
// }
// var output = filterOddElements([1, 2, 3, 4, 5]);
// console.log(output); // --> [1, 3, 5]

//write a function called "computeAverageOfNumbers". Given an array of numbers, "computeAverageOfNumbers"
//returns their average. If input array is empty, your function should return 0.
// function computeAverageOfNumbers(param) {
//   var sum = 0;

//   if (param.length === 0) {
//     return 0;
//   } else {
//     for (var i = 0; i < param.length; i++) {
//       sum += param[i];
//       var getAverage = sum / param.length;
//     }
//     return getAverage;
//   }
// }
// var input1 = [1, 2, 3, 4, 5];
// var result1 = computeAverageOfNumbers(input1);
// console.log("should log 3:", result1);

// var input2 = [];
// var result2 = computeAverageOfNumbers(input2);
// console.log("should log 0:", result2);

// function getElementsAbove40(numbers) {
//   var count = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 40) {
//       count++;
//     }
//   }

//   return count;
// }
// var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
// console.log("should log 3:", result1);

// var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
// console.log("should log 0:", result2);

// var sentence = "";

// function createSentence(words) {
//   for (var i = 0; i < words.length; i++) {
//     // hint: does this line need to happen every iteration?
//     sentence += words[i] + " ";
//     if (i === words.length - 1) {
//       sentence = sentence.trim()
//       sentence += ".";
//     }
//   }

//   return sentence;
// }

// var result2 = createSentence(["My", "problems", "matter"]);
// console.log('should log "My problems matter.":', result2);

//Write a function called "countWords". Given a string (words separated by spaces), "countWords"
// returns an object where each key is a word in the given string, with its value being how many
// times that word appeared in the given string. If given an empty string, your function should
// return an empty object.

function countWords(stringOfWords) {
  // your code here
  if (stringOfWords.length === 0) {
    return {};
  }
  stringOfWords = stringOfWords.split(" ");
  const objectCount = {};

  for (let i = 0; i < stringOfWords.length; i++) {
    let currentObject = stringOfWords[i];
    if (objectCount[currentObject] === undefined) {
      objectCount[currentObject] = 1;
    } else {
      objectCount[currentObject]++;
    }
  }

  return objectCount;
}
var result1 = countWords("ask a bunch get a bunch");
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords("");
console.log('should log "{}":', result2);

//Write a function called "countAllCharacters". Given a string of characters, "countAllCharacters"
//returns an object where each key is a character in the given string, with its value being how many
//times that character appeared in the given string. If given an empty string, your function should
// return an empty object.

function countAllCharacters(string) {
  var splitCharacter = string.split();
  var objectCount = {};
  for (var i = 0; i < string.length; i++) {
    var stringCount = string[i];
    if (objectCount[stringCount] === undefined) {
      objectCount[stringCount] = 1;
    } else {
      objectCount[stringCount]++;
    }
  }
  return objectCount;
}
var result1 = countAllCharacters("banana");
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters("");
console.log('should log "{}":', result2);
