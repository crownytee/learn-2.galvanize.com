//In this problem, you are to simply look at the partially implemented skeleton below and,
//by parsing it carefully, determine what it ought to do. While you should create your own
//test suite to get the most out of this exercise, there are automated tests provided as well.

// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  var letter = word.split("");
  // Count the instances of each letter
  var letterCount = {};
  // Iterate all the counts and find the highest
  for (var i = 0; i < letter.length; i++) {
    var currentCount = letter[i];
    if (letterCount[currentCount] === undefined) {
      letterCount[currentCount] = 1;
    } else {
      letterCount[currentCount]++;
    }
  }
  var max = 0;
  for (var letter in letterCount) {
    if (letterCount[letter] > max) {
      max = letterCount[letter];
    }
  }
  // Return this word's max repeat count
  return max;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = "";

  // Break up input text into words (space-delimited).
  var words = text.split(" ");
  // For each word...
  for (var j = 0; j < words.length; j++) {
    var word = words[j];
    var repeatCountForWord = findMaxRepeatCountInWord(word);
    // If that max repeat count is higher than the overall max repeat count, then
    if (repeatCountForWord > maxRepeatCountOverall) {
      // update maxRepeatCountOverall
      maxRepeatCountOverall = repeatCountForWord;
      // update wordWithMaxRepeatCount
      wordWithMaxRepeatCount = word;
    }
  }
  return wordWithMaxRepeatCount;
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
//TESTS CASES
var input_1 = 'passed';
var actual_1 = findMaxRepeatCountInWord(input_1);
var expected_1 = 2;
assertEqual(actual_1, expected_1, 'should return 2 for a given word');

var input_2 = "I passed my exam are you not entertained";
var actual_2 = findFirstWordWithMostRepeatedChars(input_2);
var expected_2 = "entertained";
assertEqual(
  actual_2,
  expected_2,
  "should return word with most repeated character"
);
