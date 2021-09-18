//Transforming a string into an array.

// var generatedID = "a1d8b5q9";
// var arrayVersionOfId = generatedID.split();
// console.log("array with one ID:", arrayVersionOfId);

// var word = "Networking";
// var separator = "";
// var lettersInWord = word.split(separator);
// console.log("letters in word:", lettersInWord);

// var sentence = "Approaching the end of operators and methods";
// var separator = " ";
// var wordsInSentence = sentence.split(separator);
// console.log("words in sentence:", wordsInSentence);

//Write a function that takes in two string parameters (stringToBeSplit, splitter),
//and returns an array that is the result of splitting the stringToBeSplit parameter
//on the splitter parameter.

// function applySplit(stringToBeSplit, splitter) {
//   var splitSpring = stringToBeSplit.split(splitter);
//   return splitSpring;
// }
// var resultArray1 = applySplit("first--second--third", "--");
// console.log("should log split string:", resultArray1);

// var resultArray2 = applySplit("git push origin master", " ");
// console.log("should also log split string:", resultArray2);

// //write a function that takes in two parameters (array, element), and returns
// //the index of the array where the element can be found.
// function applyIndexOfToArray(array, element) {
//   var index = array.indexOf(element);
//   return index;
// }
// var array1 = ["Quick", "sort", "is", "wild"];
// var element1 = "sort";
// var resultIndex1 = applyIndexOfToArray(array1, element1);
// console.log("should log 1:", resultIndex1);

// var array2 = ["size", "color", "cut", "price"];
// var element2 = "style";
// var resultIndex2 = applyIndexOfToArray(array2, element2);
// console.log("should log -1:", resultIndex2);

function createObject() {
  var result = {};
  return result;
}

var resultObject = createObject();
console.log("should be an object:", typeof resultObject);
console.log("should not be an array:", Array.isArray(resultObject));

//write a function that takes two parameters, an object and a string key,
//and returns the value for a property in the object located at the string key.

function accessAProperty(object, key) {
  var result = object[key];
  return result;
}
var resultValue = accessAProperty(
  { machine: "Computer", type: "Macbook", ram: "2 GHz" },
  "ram"
);
console.log('should be "2 GHz":', resultValue);

//write a function that takes three parameters, an object, a string key,
//and a newValue, and returns the object after performing a reassignment.

function reassignAProperty(object, key, newValue) {
  object[key] = newValue;
  return object;
}
var resultObject = reassignAProperty(
  { name: "Ramses", favoriteFood: "chicken", type: "dog" },
  "favoriteFood",
  "goose"
);
console.log('should replace "chicken" with "goose":', resultObject);

//write a function that takes in two parameters, an object and an key,
//removes the property located at the input key from the object, and returns the object.

function removeAProperty(object, key) {
  // remove the property at the given key from the object
  // return the object
  delete object[key];
  return object;
}
var resultObject1 = removeAProperty({ q: 9, r: 10, text: "bad entry" }, "text");
console.log("should log {q: 9, r: 10}:", resultObject1);

var resultObject2 = removeAProperty(
  { first: "one", second: "two", why: 452, third: "three" },
  "why"
);
console.log(
  'should log {first: "one", second: "two", third: "three"}:',
  resultObject2
);

//a function that takes in two parameters an object and a key,
// and returns whether the object has a property at the given key.
function isPropertyPresent(object, key) {
  var isPresent = object[key] !== undefined;
  return isPresent;
}
var object1 = {
  a: 1,
  b: 2,
};
var key1 = "c";
var result1 = isPropertyPresent(object1, key1);
console.log("should log false:", result1);

var object2 = {
  size: "M",
  color: "green",
  cut: "tapered",
  price: 30,
};
var key2 = "cut";
var result2 = isPropertyPresent(object2, key2);
console.log("should log true:", result2);

//write a function that takes in one parameter,
//possibly an object, and returns whether the input in an object or not.

function isAnObject(input) {
  var isObject = typeof input === "object";
  var isNotAnArray = !Array.isArray(input);
  var isObjectAndNotAnArray = isObject && isNotAnArray;
  return isObjectAndNotAnArray;
}
var resultBoolean1 = isAnObject([1, 2, 3]);
console.log("should log false:", resultBoolean1);

var resultBoolean2 = isAnObject({ name: "Tom", friend: "Jerry" });
console.log("should log true:", resultBoolean2);

//Write a function that takes in three parameters, a nested array of arrays,
//an index, and an element, then adds the element to the front of the inner
//array located at the index within the input array of arrays, and returns the array of arrays.

function applyUnshiftAgain(arrayOfArrays, index, element) {
  //   var innerArray = arrayOfArrays[index];
  //   innerArray.unshift(element);
  arrayOfArrays[index].unshift(element);
  //   return arrayOfArrays;
  return arrayOfArrays;
}
var resultArray1 = applyUnshiftAgain(
  [
    [1, 3],
    [10, 11],
    [9, 4],
  ],
  1,
  5
);
console.log("should log [ [1, 3], [5, 10, 11], [9, 4] ]:", resultArray1);

var resultArray2 = applyUnshiftAgain(
  [
    ["ag", "bc"],
    ["ef", "hi"],
  ],
  0,
  "iq"
);
console.log('should log [ ["iq", "ag", "bc"], ["ef", "hi"] ]:', resultArray2);

//Write a function that takes in three parameters, an array, an index, and an key,
//located within an object, located at the given index within the input array,
// and returns the input array.

function removeAPropertyAgain(arrayOfObjects, index, key) {
  delete arrayOfObjects[index][key];
  return arrayOfObjects;
}
var resultObject1 = removeAPropertyAgain(
  [
    { q: 9, r: 10, text: "bad entry" },
    { a: 1, b: 2 },
  ],
  0,
  "text"
);
console.log("should log [{q: 9, r: 10}, {a: 1, b: 2}]:", resultObject1);

var resultObject2 = removeAPropertyAgain(
  [{ key: "value" }, { first: "one", second: "two", why: 452, third: "three" }],
  1,
  "why"
);
console.log(
  'should log [{key: "value"}, {first: "one", second: "two", third: "three"}]:',
  resultObject2
);
