var activities = ["running", "hiking", "dancing", "singing"];
var activityShifted = activities.shift();
console.log("activities with first element removed:", activities);
console.log("first activity removed:", activityShifted);

var array = [1, 2, 3, 4];
var elementShifted = array.shift();
console.log("array without removed element:", array);
console.log("element removed:", elementShifted);

//Write a function that takes in one parameter, an array,removes
//the first element from the front of the array, and returns the removed element.

function applyShift(array) {
  var shifted = array.shift();
  return shifted;
}
var resultElement1 = applyShift([1, 171, 129]);
console.log("should log 1:", resultElement1);

var resultElement2 = applyShift(["islands", "peninsulas", "pacific"]);
console.log("should log islands:", resultElement2);

// write a function that takes in three parameters, an array, an index, and an element,
// adds the element to the index of the array, without replacing any of the existing
// elements, and returns the array.

function addAnElementInGeneral(array, index, element) {
  array.splice(index, 0, element);
  return array;
}
var resultArray = addAnElementInGeneral(["rice", "beans", "meat"], 2, "egg");
console.log('should log ["rice", "beans", "egg", "meat"]:', resultArray);

var resultArray1 = addAnElementInGeneral([7, 9, 10], 1, 8);
console.log("should log [7, 8 , 9, 10]:", resultArray1);

//write a function that takes in two parameters, an array and an index,
//removes the element from the index of the array, and returns the array.

function removeAnItem(array, index) {
  array.splice(index, 1);
  return array;
}
var resultRemoveItem = removeAnItem([1, 2, 6, 3, 4], 2);
console.log("should log[1, 2, 3, 4]:", resultRemoveItem);

//write a function that takes in four parameters, an array, an index, and two new elements,
//removes 2 elements, beginning at the index, adds the two new elements, and returns the array.

function applySplice(array, index, item1, item2) {
  array.splice(index, 2, item1, item2);
  return array;
}
var resultArray1 = applySplice(
  [8, 9, 10, "bad entry1", "bad entry2", 13],
  3,
  11,
  12
);
console.log("should log [8, 9, 10, 11, 12, 13]:", resultArray1);

var resultArray2 = applySplice(
  ["one", "two", 452, 672, "five"],
  2,
  "three",
  "four"
);
console.log(
  'should log ["one", "two", "three", "four", "five"]:',
  resultArray2
);

var altitudesAlongHikingTrail = [20, 70, 110, 170, 120, 40];
var todaysHike = altitudesAlongHikingTrail.slice(1, 4);
console.log("altitudes for today's hike:", todaysHike);

//write a function that takes in three parameters, an array and two integer indexes (start, end),
//and returns a portion of the array from before the start index up to, but not including, the end index.

function applySlice(array, start, end) {
  var sliceOfArray = array.slice(start, end);
  return sliceOfArray;
}
var array1 = ["Q", "u", "e", "u", "e"];
var resultOfSlice1 = applySlice(array1, 1, 4);
console.log('should log ["u", "e", "u"]:', resultOfSlice1);
console.log("should log copy of array1:", array1);

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultOfSlice2 = applySlice(array2, 2, 8);
console.log("should log [2, 3, 4, 5, 6, 7]:", resultOfSlice2);

//Write a function that takes in one array parameter, and returns a copy of the array.

function copyOfArray(array) {
  var result = array.slice();
  return result;
}
var listArray = ["a", "b", "c", "d"];
var outputArray = copyOfArray(listArray);
console.log("should log [a, b, c, d]:", listArray);

function makeACopy(array) {
  var copyOfArray = array.slice();
  return copyOfArray;
}
var array1 = ["Q", "u", "e", "u", "e"];
var resultCopy1 = makeACopy(array1);
console.log('should log ["Q", "u", "e", "u", "e"]:', resultCopy1);

//Write a function that takes in one array parameter (elements will be strings),
//and one string parameter, and returns a string that is the result of joining
//the elements of the string together, separated by the string parameter.

function applyJoin(arrayOfStrings, string) {
  var joinedString = arrayOfStrings.join(string);
  return joinedString;
}
var resultString1 = applyJoin(["first", "second", "third"], "--");
console.log("should log joined string:", resultString1);

var resultString2 = applyJoin(["git", "commit"], " ");
console.log("should also log joined string:", resultString2);
