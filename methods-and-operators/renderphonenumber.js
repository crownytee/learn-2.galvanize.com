//Your code should accept an array of numbers that represent a phone number.
// E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]. You code should return a string in
//this format: '(650) 835-9172'.

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function () {
  var string = "";
  // get area code wrap in parentheses add to string
  string += this.parenthesize(this.getAreaCode());
  string += " ";
  // get exchange code add to string
  string += this.getExchangeCode();
  // add hyphen to string
  string += "-";
  // get line number add to string
  string += this.getLineNumber();
  return string; 
};

PhoneNumberFormatter.prototype.getAreaCode = function () {
  // your code here
  return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function () {
  return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function () {
  return this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function (string) {
  return "(" + string + ")";
};

PhoneNumberFormatter.prototype.slice = function (start, end) {
  return this.numbers.slice(start, end).join("");
};

//create a new instance of phoneNumberFormatter

var formatter = new PhoneNumberFormatter([1, 1, 1, 8, 6, 7, 5, 3, 0, 9]);
console.log(formatter);

// test individual methods as we go
// var lineNumber = formatter.getLineNumber();
// console.log("lineNumber: ", lineNumber);

var formattedNumber = formatter.render();
console.log(formattedNumber); ///(111) 867-5309

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES
