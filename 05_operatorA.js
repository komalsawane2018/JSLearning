console.log(`======================1st Step================================`);

function squareOfWordLength(Name) {
  console.log(`"${Name}"`);

  var nameLength = Name.length;
  console.log(`Length of Word - ${nameLength}`);
  var squareResult = nameLength ** 2;

  return squareResult;
}
var result = squareOfWordLength("JavaScript");
console.log(`Square of JavaScript  - ${result}`);
console.log(`---------------------------------------`);
var result = squareOfWordLength("Google Chrome");
console.log(`Square of Google chrome - ${result}`);
console.log(`---------------------------------------`);
var result = squareOfWordLength("Developer Smart");
console.log(`Square of Devloper Smart - ${result}`);

console.log(`======================2nd Step================================`);

function givenString() {
  var str = "I am Angular Developer";
  console.log(`${str}`);
  var strLength = str.length;
  console.log(`Length of String - ${strLength}`);

  var strSplit = str.split(" ");
  //  console.log( `${strSplit} `);      // comma Separater
  console.log(`Total Words Available in String - ${strSplit.length}`);
  var division = strLength / strSplit.length;
  console.log(`Division - ${division} `);

  var multiplication = strLength * strSplit.length;
  console.log(`Multiplication - ${multiplication}`);
}
givenString();
