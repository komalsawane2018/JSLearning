console.log(`---------------------------------1st Step-------------------------------`);
function greatestNumber(num1,num2){

   var result =  num1 > num2 ? ` ${num1}` : ` ${num2}`;
   console.log(`Greatest Number is ${result}`);

}
 greatestNumber(10 , -10);    // Function Invoke or call
 greatestNumber(800 , 899);

 console.log(`---------------------------------2nd Step-------------------------------`);
function isEvenOrOddNumber(num){
   var result =  num % 2 == 0 ? "True" : "False";
    return result;

}
 var output =  isEvenOrOddNumber(29);
 console.log(`Is 29 Even No -  ${output}`);
 var output =  isEvenOrOddNumber(44);
 console.log(`Is 44 Even No -  ${output}`);
 var output =  isEvenOrOddNumber(0);
 console.log(`Is 0 Even No  -  ${output}`);
 var output = isEvenOrOddNumber(101);
 console.log(`Is 101 Even No - ${output}`);

 console.log(`---------------------------------3rd Step-------------------------------`);
    
    function wordLength(word){
        var wordLength = word.length;
        // console.log(`Length of Word is - ${wordLength}`);
        var output = (wordLength % 2 == 0) ? "EVEN" : "ODD";
        return output;

    }
    var result = wordLength("JavaScript");
    console.log(`Word "JavaScript" has ${result} length`);
    console.log(`Word "Developer" has ${wordLength("Developer")} length`);
    console.log(`Word "Google Chrome" has ${wordLength("Google Chrome")} length`);

