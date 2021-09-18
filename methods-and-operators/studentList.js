//Write a function called decorateClassListWithAges. Convert from an array, in this case a class list of
// names, to an array of object literals decorated with a name and an age for each student.
// Your decorateClassListWithAges function should use the provided getRandomIntInclusive as part of its
//solution. (The ages should be randomly generated for each student, either age 10 or age 11)
//The "test suite" that you write for this question will be one of the most complex we have seen so far. In order to verify that your code works as expected, you will need to find a way to iterate over the actual array result of your function, then ensure that the age value for each object in your result is "within the range" of 10 to 11. If you are having tremendous difficulty constructing your test suite, please feel free to consult the reference answers.
// Sample Input:
// var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
// "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
// "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];
//Sample Output:
// var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
// {"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
// {"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
// {"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
// {"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
// {"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
// {"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
// {"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
// {"name":"Dora","age":10}];

// FUNCTION DEFINITION(S)
// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function decorateClassListWithAges(classList) {
  var result = [];
  for (var j = 0; j < classList.length; j++) {
    var currentStudent = {};
    currentStudent.name = classList[j];
    currentStudent.age = getRandomIntInclusive(10, 11);
    result.push(currentStudent);
  }
  return result;
}
// ASSERTION FUNCTION(S) TO BE USED
function assertWithinRange(low, high, actual) {
  if (low <= actual && high >= actual) {
    return true;
  } else {
    return false;
  }
}
function testDecorateStudentList(input, output) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== output[i].name) {
      console.log("FAILED: Incorrect name at index: " + i);
      return;
    }
    if (assertWithinRange(10, 11, output[i].age) === false) {
      console.log("FAILED: Incorrect age at index: " + i);
      return;
    }
    console.log("passed");
  }
}
// TESTS CASES
var classList = [
  "Joe",
  "Jack",
  "John",
  "Fred",
  "Frank",
  "Barry",
  "Larry",
  "Mary",
  "Harry",
  "Farrell",
  "Susan",
  "Monica",
  "Keira",
  "Caroline",
  "Harriet",
  "Erica",
  "Luann",
  "Cheryl",
  "Beth",
  "Rupa",
  "Linda",
  "Allison",
  "Nancy",
  "Dora",
];
var classListWithAges = decorateClassListWithAges(classList);
testDecorateStudentList(classList, classListWithAges);
