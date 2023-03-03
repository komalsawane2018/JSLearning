function factorialofWordsCount(str) {

    if (str == "null" || str == "NaN" || str == "undefined" || str== "") {
    console.log(`"${str}" Invalid String `);
  } 
  
  var result = 1;
  factorial = 1;

  for (let index = 0; index < str.length; index++) {
    var wordl = str.charAt(index);
    if (wordl == " ") {
      result = result + 1;
      factorial = factorial * result;
    }
  }

  return factorial;
}
var output = factorialofWordsCount("Revision is the mother of Success");
console.log(`Total word count of "Revision is the mother of Success" : 6 
Factorial of 6 is : ${output}`);
var output = factorialofWordsCount("We never fail, we always learn");
console.log(`Total word count of "We never fail, we always learn" : 6
Factorial of 6 is  : ${output}`);
var output = factorialofWordsCount("null");
// console.log(`Factorial of "null" :  ${output}`);
var output = factorialofWordsCount("");
// console.log(`Factorial of "" :  ${output}`);
var output = factorialofWordsCount("My Name is Komal Latesh Sawane");
console.log(`Total word count of "My Name is Komal Latesh Sawane" : 6
Factorial of 6 is :  ${output}`);
var output = factorialofWordsCount("NaN");
// console.log(`Factorial of "NaN" :  ${output}`);
var output = factorialofWordsCount("undefined");
// console.log(`Factorial of "undefined" :  ${output}`);


