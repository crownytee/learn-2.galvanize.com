//write a function that takes one parameter, an array of arrays, and logs all of its elements
//(log each element in first inner array, start to end, then second inner array, and so on...)
//to the console. Your function should use a nested for loop to log each element from all
// inner arrays, then return nothing.

// function loopAnArrayOfArrays(arrayOfArrays) {
//   for (var i = 0; i < arrayOfArrays.length; i++) {
//     for (var j = 0; j < arrayOfArrays[i].length; j++) {
//       console.log(arrayOfArrays[i][j]);
//     }
//   }
// }
// loopAnArrayOfArrays([
//   ["a", "b", "c"],
//   ["d", "e", "f"],
// ]);

//We are going to complete a function that takes one parameter, a object of objects, and
//logs all of its values (log each value in first inner object, one at a time, then second
// inner object, and so on...) to the console. Your function should use a nested for-in loop
//to log each value from all inner objects, then return nothing.

// function loopAnObjectOfObjects(nestedObject) {
//   for (var key in nestedObject) {
//     for (var innerObject in nestedObject[key]) {
//       console.log(nestedObject[key][innerObject]);
//     }
//   }
// }
// loopAnObjectOfObjects({ a: { a: 1, b: 2 }, b: { a: 5, b: 6 } });

// function loopOver(object) {
//   for (var currentKey in object) {
//     console.log(currentKey);
//   }
// }
// loopOver({a: 1, b: 2});

// var nestedObject = {
//   inner1: { a: 1, b: 2, c: 3 },
//   inner2: { d: 4, e: 5, f: 6 },
//   inner3: { g: 7, h: 8, i: 9 },
// };

// for (var key in nestedObject) {
//   for (var innerKey in nestedObject[key]) {
//     console.log(nestedObject[key][innerKey]);
//   }
//   console.log("end of inner loop");
// }
// console.log("end of outer loop");

//Write a function that takes one parameter, a array of objects,
//and logs all of its values (log each value in first inner object, one at a time,
//then second inner object, and so on...) to the console. Your function should use a for-in loop
//nested inside of a for loop to log each value from all inner objects, then return nothing.

function loopAnArrayOfObjects(arrayOfObjects) {
  for (var i = 0; i < arrayOfObjects.length; i++) {
    var currentValue = arrayOfObjects[i];
    for (var key in currentValue) {
      console.log(currentValue[key]);
    }
  }
}
loopAnArrayOfObjects([{ a: 1, b: 2 }, { z: 5, y: 6 }, { q: 14 }]);

//write a function that takes one parameter, a object of arrays, and logs all of its values
// (log each value in first inner array, one at a time, then second inner array, and so on...)
// to the console. Your function should use a for loop nested inside of a for-in loop to log each
// value from all inner arrays, then return nothing.

function loopAnObjectOfArrays(objectOfArrays) {
  for (var key in objectOfArrays) {
    var currentKey = objectOfArrays[key];
    for (var i = 0; i < currentKey.length; i++) {
      console.log(currentKey[i]);
    }
  }
}
loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });

//Write a function that takes two parameters, both arrays, and logs all possible combinations
//of elements separated by a space (see example for details...) to the console. Your function
//should use a nested for loop to log all combinations of the two arrays, then return nothing.

function generateCombinations(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      console.log(array1[i] + " " + array2[j]);
    }
  }
}
generateCombinations(["a", "b", "c"], ["d", "e", "f"]);
