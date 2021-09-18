//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Your task is to write and test a function that determines whether a string is an isogram, following the format of the previous problems. It should return true if the input string is an isogram, and should return false otherwise.
//While you should create your own test suite to get the most out of this exercise, there are automated
//tests provided as well.

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  if (text === "") {
    return true;
  }
  text = text.toLowerCase();
  var arrayOfLetters = text.split("");

  var setOfLetters = new Set(arrayOfLetters);
  return setOfLetters.size === text.length;
  // add each char to a set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" +
        testName +
        '] Expected "' +
        expected +
        '", but got "' +
        actual +
        '"'
    );
  }
}

// TESTS CASES
var inputPass_1 = "abcdefg";
var actualPass_1 = isIsogram(inputPass_1);
assertEqual(
  actualPass_1,
  true,
  "should return true for an isogram with all lowercase"
);

var inputPass_2 = "sTop";
var actualPass_2 = isIsogram(inputPass_2);
assertEqual(
  actualPass_2,
  true,
  "should return true for an isogram with mixed case"
);

var inputFail_1 = "stopped";
var actualFail_1 = isIsogram(inputFail_1);
assertEqual(
  actualFail_1,
  false,
  "should return false for a non-isogram with lower case"
);

var inputFail_2 = "Aaqzrj";
var actualFail_2 = isIsogram(inputFail_2);
assertEqual(
  actualFail_2,
  false,
  "should return false for a non-isogram with mixed case"
);
