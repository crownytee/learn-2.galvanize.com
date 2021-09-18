//Write a function that takes in one number parameter,
// and returns the absolute value of said parameter

function getAbsoluteValue(num) {
    return Math.abs(num);
}
var result = getAbsoluteValue(-5);
console.log('Absolute Value is:',result);

// write a function that takes in one number parameter, and returns the 
//result of rounding the number down.
function roundNumberDown(value) {
    var numberDown = Math.floor(value);
    return numberDown; 
}
var resultRoundNumberDown = roundNumberDown(12.2);
console.log('resultRoundNumberDown:' ,resultRoundNumberDown);

// write a function that takes in one string parameter, representing an integer, 
//and returns the result of parsing an integer from the input. 

function applyParseInt(numString) {
    var parseInteger = Number.parseInt(numString);
    return parseInteger;
}
var outputParseInteger = applyParseInt('25');
console.log('outputParseInteger:', outputParseInteger);

//write a function that takes in one string parameter, representing 
//a float (decimal), and returns the result of parsing a float from the input.

function applyParseFloat(numString){
    var parseFloatNum = Number.parseFloat(numString);
    return parseFloatNum;
}
var parseFloat = applyParseFloat('23.6');
console.log('parseFloat:', parseFloat);

//Write a function that takes in two number parameters, representing the lower and 
//upper bounds for a random number to be generated, and returns a randomly generated
//number within the described bounds. 

function generateRandomNumber(min, max){
    var randomNumber = Math.random() * (max - min) + min;
    return randomNumber;
}
var randomNumberOutput = generateRandomNumber(5, 50);
console.log('randomNumberOutput:', randomNumberOutput);

//Write a function that takes in one parameter, a string,
// and returns the input string's last character.

function lastCharacter(string){
    var characterOfString = string.length - 1;
    var result = string[characterOfString];
    return result;
}
var lastCharacterOfString = lastCharacter('Felicitations');
console.log('lastCharacterOfString:', lastCharacterOfString );

