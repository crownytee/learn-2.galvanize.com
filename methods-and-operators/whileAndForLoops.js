//write a function that takes one parameter, an array of elements, and
//logs all of its elements (one at a time) to the console.

function loopAnArray(array) {
  var index = 0;
  while (index < array.length) {
    console.log(array[index]);
    index++;
  }
}
loopAnArray([1, 2, 3, 4, 5]);
//

//write a function that takes one parameter, a string of characters, and
// logs all of its characters (one at a time) to the console.
function loopAString(string) {
  var index = 0;
  while (index < string.length) {
    console.log(string[index]);
    index++;
  }
}
loopAString("nodeJS");
loopAString("abcd");

//Write a function that takes one parameter, an array of elements, and
//logs all of its elements (one at a time) to the console.

function loopAnArrayAgain(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
loopAnArrayAgain(["a", "b", "c", "d"]);
loopAnArrayAgain([1, 2, 3, 4, 5]);

//a function that takes one parameter, an array of elements,
// and logs every other one of its elements, beginning at index 0, to the console.
function loopEveryOther(array) {
  // for (i = 0; i < array.length; i+= 2){
  //     console.log(array[i]);
  var i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i += 2;
  }
}
loopEveryOther(["a", "b", "c", "d"]);
loopEveryOther([1, 2, 3, 4, 5]);

//a function that takes two parameters, an array of elements, and an index,
// and logs every element, beginning at the inputted index (one at a time) to the console.

function loopStartingAtIndex(array, index) {
  for (var i = index; i < array.length; i++) {
    console.log(array[i]);
  }
}
loopStartingAtIndex(["a", "b", "c", "d", "e"], 2);

//write a function that takes one parameter, an array of elements, and logs every element, beginning
//at the back of the input array and ending at the front of the input array, to the console.
function loopInReverse(array) {
  // for ( var i = array.length-1; i > -1; i--) {
  //     console.log(array[i]);
  // }
  var i = array.length - 1;
  while (i > -1) {
    console.log(array[i]);
    i--;
  }
}
loopInReverse(["a", "b", "c", "d"]);
loopInReverse([1, 2, 3, 4]);

//function that takes two parameters, an array of elements and an index, and logs every element,
// except for the element at the input index, to the console.

function useContinue(array, index) {
  for (var i = 0; i < array.length; i++) {
    if (i === index) {
      continue; //This tells to go to the next iteration
    }
    console.log(array[i]);
  }
}
useContinue(["a", "b", "c", "d"], 1);
useContinue([1, 2, 3, 4], 2);

//write a function that takes two parameters, an array of elements and an index, and
//logs every element, except those whose index is greater than the input index.

function useBreak(array, index) {
  for (var i = 0; i < array.length; i++) {
    if (i > index) {
      break;
    }
    console.log(array[i]);
  }
}
useBreak(["a", "b", "c", "d", "e"], 2);
