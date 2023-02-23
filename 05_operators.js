console.log(`========Arithmatic Operators========`);

var num1 = 10;
var num2 = 2;
var result = num1+num2;     // Additon
console.log(`Addition is ${result}`);

result = num1 - num2;
console.log(`Substraction is ${result}`);   // Subtraction

result = num1 * num2;
console.log(`Multiplication is ${result}` );   // Multiplication ;

result = num1 ** num2;
console.log(`Exponetional is ${result}`);   // 10*10;  square of num

result = num1 / 3
console.log(`Division is ${result}`);

result = num1 % 3;
console.log(`Modulus is ${result}`);   // give reminder

var num = 10;
num+=20;   //num= num + 20;
console.log(`Compound Addition is ${num}`);

console.log(`====Comparison Operator========`);
var num3 = "10";  // string
var num4 = 10;    // number
console.log(num3==10);  //  coversion 10==10

console.log(num3==num4);     // conversion and compare value

console.log(num3=== num4);   // no coversion only compare value 

console.log(num3 != num4);  // not equal to num4

console.log(10 > 20);  //greater than

console.log(20 < 10);  //less than

console.log(10 < 10);  //less than

var marks = result;
console.log(marks >= 35);   // Greater than equal

console.log(`=================Ternary Operators=============`)
var marks = 70;
var result = marks >= 60 ? "Allow Him for the Interview" : "Don't allow";
console.log(result);

var age = 20;
var res = age>=21 ? "True" : "False";
console.log(res);

console.log(`To check number EVEN or ODD`);
myName = 7;

var result = myName % 2 == 0 ? "EVEN" : "ODD";   // % Modulas
console.log(result);

function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );


 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);




