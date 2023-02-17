console.log("*****************Swaping Variable********************");

var sweety = "Sweety"; // Cutie
var cutie = "Cutie;" // Sweety
console.log("**************before**************");
console.log(sweety,cutie);

var temp = sweety;
sweety = cutie; 
cutie = temp;
console.log("**************After****************");
console.log(sweety, cutie);

console.log("********************Swaping three Variable**************");

var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("************ Before swapping***************");
console.log(num1,num2,num3);
var temp = num2;
 num2 = num1;
 num1 = num3;
 num3 = temp;
 console.log("**************After Swapping**************");
 console.log(num1, num2,num3);




