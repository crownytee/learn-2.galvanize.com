//Write a function that takes in two parameters (string, subString), and
// returns the index of the string where the subString can be found. 

function applyIndexOf(string, subString) {
    var index = string.indexOf(subString);
    return index;
  }
  var string1 = 'Quicksort';
  var subString1 = 'sort';
  var resultIndex1 = applyIndexOf(string1, subString1);
  console.log('should log 5:', resultIndex1);
  
  var string2 = 'size,color,cut,price';
  var subString2 = 'cut';
  var resultIndex2 = applyIndexOf(string2, subString2);
  console.log('should log 11:', resultIndex2);


var DNAStrand = "ATGCGCTAA";
var stopCodon = "TAA";
var indexOfStopCodon = DNAStrand.indexOf(stopCodon);

console.log('index where stop codon is found with gene sequence:', indexOfStopCodon);


// looking for the second stop codon, based upon where we find the first.
var DNAStrand = "ATGCGCTAACATCGCAGCTAGTTAAGCGATTGCAT";
var stopCodon = "TAA";
var indexOfFirstStopCodon = DNAStrand.indexOf(stopCodon);
var indexOfSecondStopCodon = DNAStrand.indexOf(stopCodon, indexOfFirstStopCodon + 1)

console.log('index where second stop codon is found with gene sequence:', indexOfSecondStopCodon);

//Write a function that takes in one parameter, and returns a string version of that parameter. 
function applyToString(param) {
    var stringVersion = param.toString();
    return stringVersion;
  }
  var input1 = 9374;
  var resultString1 = applyToString(input1);
  console.log('should log:', resultString1);
  console.log('type should be "string":', typeof resultString1);
  
  var input2 = false;
  var resultString2 = applyToString(input2);
  console.log('should log "false":', resultString2);
  console.log('type should be "string":', typeof resultString2);

  //Write a function that takes in three string parameters (the first, second, and third lines of a haiku), and returns a string that when logged
  //to the console, outputs the haiku in traditional format 
  function generateHaiku(firstLine, secondLine, thirdLine) {
    var haiku = firstLine + '\n' + secondLine + '\n' + thirdLine;
    return haiku;
  }
  var resultHaiku1 = generateHaiku('In the twilight rain', 'these brilliant-hued hibiscus -', 'A lovely sunset.');
  console.log('should log formatted haiku:\n', resultHaiku1);
  
  var resultHaiku2 = generateHaiku('The lamp once out', 'Moves west, flowers\' shadows', 'Creep eastward.');
  console.log('should also log formatted haiku:\n', resultHaiku2);

  function createArray() {
    var result = [1, 2, 4];
    return result;
  }
  var resultArray = createArray();
  console.log('should be an array:', Array.isArray(resultArray));
  
  //Write a function that takes three parameters,an array, a numerical index,
  // a newValue, and returns the array after performing a reassignment. 

  function myarray(array, index, newValue){
      array[index] = newValue;
      return array;
  }
 var newResultArray = myarray(['rice', 'beans', 'egg', 'meat'], 2, 'plantain');
 console.log('newResult Array:', newResultArray);

 //write a function that takes in one parameter, an array, and returns the input array's last element.

 function getLastElement(array) {
    var lastIndex = array.length - 1;
    var lastElement = array[lastIndex];
    return lastElement;
 }
var resultLastElement1 = getLastElement([1, 2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1);
  
var resultLastElement2 = getLastElement([3, 4, "shut", "the", "door"]);
console.log('should log "door":', resultLastElement2);

