//wtite a function that takes in three boolean parameters (bool_1, bool_2, and bool_3). 
//Your function should create a variable and assign it to the result of the following: 
//bool_1 AND either bool_2 OR bool_3. 

function combination(bool_1, bool_2, bool_3) {
    var resultVariable = bool_1 && (bool_2 || bool_3);
    return resultVariable;
}
var outputIsTrue = combination(true, true, false);
console.log('output is true:', outputIsTrue);

// var declared;
// var undefinedMatch = declared === undefined;
// console.log('undefinedMatch:',undefinedMatch);

