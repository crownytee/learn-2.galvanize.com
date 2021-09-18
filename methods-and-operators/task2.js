//Write a function that takes in two number parameters (num1, num2), 
//and returns the result of raising num1 to the num2 power.

function getPower(num1, num2) {
    var power = num1 ** num2;
    return power;
  }
  var resultPower = getPower(5, 2);
  console.log('resultPower:', resultPower);

  var position1 = 5;
  var position2 = 300;
  var difference = position1 - position2;
  var magnitudeDifference = Math.abs(difference)
  console.log('magnitudeDifference:', magnitudeDifference);