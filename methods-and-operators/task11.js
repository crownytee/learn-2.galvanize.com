//Write a function called "listAllValues" which returns an array of all the input object's values. Example input:
//var input = {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false
// };
//Function's return value (output): ['Krysten', 33, false]

// function listAllValues(obj) {
//   var objValues = [];
//     for (var key in obj) {
//     objValues.push(obj[key]);
//   }
//   return objValues;
// }
// var input = {
//   name: "Krysten",
//   age: 33,
//   hasPets: false,
// };
// var output = listAllValues(input);
// console.log(output);

//Write a function called "getAllKeys" which returns an array of all the input object's keys. Example
//input: var input = {
//   name : 'Sam',
//   age : 25,
//   hasPets : true
// };
// Function's return value (output) :
// ['name', 'age', 'hasPets']

// function getAllKeys(obj) {
//   var objArr = [];
//   for (var key in obj) {
//     objArr.push(key);
//   }
//   return objArr;
// }
// var input = {
//   name: "Sam",
//   age: 25,
//   hasPets: true,
// };
// var output = getAllKeys(input);
// console.log(output);

//Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:
//Argument: var input = {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// };
//Return value: [['name', 'Holly'], ['age', 35], ['role', 'producer']]

// function convertObjectToArray(obj) {
//   var container = [];
//   for (var key in obj) {
//     var innerArr = [key, obj[key]];
//     container.push(innerArr);
//   }
//   return container;
// }
// var input = {
//   name: "Holly",
//   age: 35,
//   role: "producer",
// };
// var output = convertObjectToArray(input);
// console.log(output);

//Write a function called "greetCustomer". Given a name, "greetCustomer" returns a greeting based on how
//many times that customer has visited the restaurant. Please refer to the customerData object. The greeting
//should be different, depending on the name on their reservation. Case 1 - Unknown customer ( Name is not present in customerData ):
//var output = greetCustomer('Terrance'); console.log(output);  --> 'Welcome! Is this your first time?'
//Case 2 - Customer who has visited only once ( 'visits' value is 1 ): var output = greetCustomer('Joe');
//console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

// var customerData = {
//   Joe: {
//     visits: 1,
//   },
//   Carol: {
//     visits: 2,
//   },
//   Howard: {
//     visits: 3,
//   },
//   Carrie: {
//     visits: 4,
//   },
// };

// function greetCustomer(firstName) {
//   if (customerData[firstName] === undefined) {
//     return "Welcome! Is this your first time?";
//   }
//   var visitObj = customerData[firstName];
//   if (visitObj.visits === 1) {
//     return (
//       "Welcome back, " + firstName + "! We're glad you liked us the first time!"
//     );
//   } else {
//     return "Welcome back, " + firstName + "! So glad to see you again!";
//   }
// }
// var output = greetCustomer("Carol");
// console.log(output);

// function indexOfString(string1, string2) {
//   var stringIndex = string1.indexOf(string2);
//   return stringIndex;
// }
// var output = indexOfString("environment", "iron");
// console.log(output); // 3

// function splitAString(str) {
//   var splitstr = str.split("");
//   return splitstr;
// }
// var output = splitAString("queue");
// console.log(output); // ["q", "u", "e", "u", "e"]
