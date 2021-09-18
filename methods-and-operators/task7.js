// write a function that takes in one parameter, determines if that parameter
//is truthy or falsy, and returns a specific string for each case.

function isItTruthy(param) {
  if (param) {
    return "Input is truthy";
  } else {
    return "Input is falsy";
  }
}
var result1 = isItTruthy("anything");
console.log('should log "Input is truthy":', result1);

var result2 = isItTruthy();
console.log('should log "Input is falsy":', result2);

var result3 = isItTruthy("");
console.log('should log "Input is falsy":', result3);

var result4 = isItTruthy(false);
console.log('should log "Input is falsy":', result4);

//write a function that takes in two parameters, an array of ingredients for a recipe,
//and an ingredient to search for within that array, determines whether the ingredient
//to search for is present within the array, and returns a specific string for each case.

function findIngredient(ingredientList, ingredientToSearchFor) {
  if (ingredientList.indexOf(ingredientToSearchFor) > -1) {
    return ingredientToSearchFor + " is on the list";
  } else {
    return ingredientToSearchFor + " is not on the list";
  }
}
var result1 = findIngredient(["flour", "butter", "sugar", "eggs"], "sugar");
console.log('should log "sugar is on the list":', result1);

var result2 = findIngredient(["milk", "cereal", "fruit"], "pop-tarts");
console.log('should log "pop-tarts is not on the list":', result2);

//a function that takes in one parameter, an object containing the fruit totals for a project,
//and determines whether the listed total for bananas is greater than 3 and the listed total
//for strawberries is greater than 10, and returns a specific string for each case.

function measureRequiredFruit(fruitTotals) {
  var totalBananas = fruitTotals.bananas;
  var totalStrawberries = fruitTotals.strawberries;
  if (totalBananas > 3 && totalStrawberries > 10) {
    return (
      "We have enough fruit, with " +
      totalBananas +
      " bananas, and " +
      totalStrawberries +
      " strawberries"
    );
  } else {
    return "We do not have enough of both fruits";
  }
}
var result1 = measureRequiredFruit({ bananas: 4, strawberries: 12 });
console.log(
  'should log "We have enough fruit, with 4 bananas, and 12 strawberries":',
  result1
);

var result2 = measureRequiredFruit({ bananas: 5, strawberries: 15 });
console.log(
  'should log "We have enough fruit, with 5 bananas, and 15 strawberries":',
  result2
);

var result3 = measureRequiredFruit({ bananas: 2, strawberries: 12 });
console.log('should log "We do not have enough of both fruits":', result3);

//a function that takes in three parameters, an object (recipeMinimums) containing required
// amounts for two ingredients (tomatoes, onions) in a recipe, and then two numbers representing
//the current stock of those ingredients (stockTomatoes, and stockOnions), and returns a specific
//string for four different cases. Your function should use an if else if statement to determine
//the correct output. If both the stock of onions and tomatoes are less than the recipe minimums,
// your function should return 'We need more tomatoes and more onions'. If the stock of
//tomatoes is greater than or equal to the recipe minimum, but the stock of onions is less than
// the recipe minimum, your function should return 'We have enough tomatoes, but need more onions.'
//If the stock of tomatoes is less than the recipe minimum, but the stock of onions is greater than
//or equal to the recipe minimum, your function should return 'We have enough onions, but need more
// tomatoes'. Finally, if the stock of both ingredients is sufficient, your function should return
//'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato, and {excessOnions}
//extra onion.', where {excessTomatoes} and {excessOnions} are the number of tomatoes and onions in
// excess of the minimum that the are in stock.

function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
  var excessTomatoes = stockTomatoes - recipeMinimums.tomatoes;
  var excessOnions = stockOnions - recipeMinimums.onions;
  if (excessTomatoes < 0 && excessOnions < 0) {
    return "We need more tomatoes and more onions.";
  } else if (excessTomatoes < 0 && excessOnions >= 0) {
    return "We have enough onions, but need more tomatoes.";
  } else if (excessTomatoes >= 0 && excessOnions < 0) {
    return "We have enough tomatoes, but need more onions.";
  } else {
    return (
      "We have enough tomatoes and onions. There will be " +
      excessTomatoes +
      " extra tomato, and " +
      excessOnions +
      " extra onion."
    );
  }
}
var result1 = verifyStock({ tomatoes: 3, onions: 7 }, 5, 8);
console.log(
  'should log "We have enough tomatoes and onions. There will be 2 extra tomato, and 1 extra onion.":',
  result1
);

var result2 = verifyStock({ tomatoes: 5, onions: 1 }, 10, 4);
console.log(
  'should log "We have enough tomatoes and onions. There will be 5 extra tomato, and 3 extra onion.":',
  result2
);

var result3 = verifyStock({ tomatoes: 2, onions: 4 }, 1, 1);
console.log('should log "We need more tomatoes and more onions.":', result3);

var result4 = verifyStock({ tomatoes: 4, onions: 2 }, 3, 4);
console.log(
  'should log "We have enough onions, but need more tomatoes.":',
  result4
);

var result5 = verifyStock({ tomatoes: 10, onions: 6 }, 11, 4);
console.log(
  'should log "We have enough tomatoes, but need more onions.":',
  result5
);
