//write a function that will find the longest single-word palindrome within an
//input phrase (string). The phrase inputted will only contain letters
//(no symbols, punctuation, or numbers). Your palindrome detection should be case-insensitive.
//If there are multiple palindromes of equal length, return the last one.

// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  var words = sentence.split(" ");
  // iterate words and collect the palindromes
  var palindromes = [];
  for (var i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      palindromes.push(words[i]);
    }
  }
  console.log("palindromes: ", palindromes);
  // sort the list of palindromes by word length
  //   palindromes.sort(function(a, b) {
  //       return a.length - b.length;
  //   })
  //  return palindromes.pop();
  // OR

  palindromes.sort(sortAscendingByLength);
  console.log("palindromes sorted: ", palindromes);
  //return the largest item in the sorted list
  return palindromes.pop();
}

function reverseString(string) {
  //split string into an array
  var splitString = string.split("");
  //reverse the array
  var reversedSplitString = splitString.reverse();
  //join the reverse array back into a string
  var reversedString = reversedSplitString.join("");
  //return that string
  return reversedString;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  word = word.toLowerCase();
  return word === reverseString(word);
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed [" + testName + "]");
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
var palindrome_test = "wtrrtw";
var non_palindrome_test = "reticulated";

var palindrome_test_result = isPalindrome(palindrome_test);
assertEqual(
  palindrome_test_result,
  true,
  "should return true when input is a palindrome"
);

var non_palindrome_test_result = isPalindrome(non_palindrome_test);
assertEqual(
  non_palindrome_test_result,
  false,
  "should return false when an input is not a palindrome"
);

var reverseTest = "abcdefg";
var expectedReverseTest = "gfedcba";
var resultOfReverse = reverseString(reverseTest);
assertEqual(
  resultOfReverse,
  expectedReverseTest,
  "should return the input string reversed"
);

var longestPalindrome = "a cute racecer went down to eye stettets";
var expectedResult = "stettets";
var resultOfLongestPalindrome = findLongestPalindrome(longestPalindrome);
assertEqual(
  resultOfLongestPalindrome,
  expectedResult,
  "should return the longest palindrome"
);
