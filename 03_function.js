var num1 = 100;
var num2 = 200;


var str1 = "sweety";
var str2 = "cuiety";

function swapVariable(value1, value2) {  // value1 = num1, value2 = num2
  console.log("before swapping:", value1, value2);
  var temp = value1; //100                          
  value1 = value2;
  value2 = temp;
  console.log("after swapping:", value1, value2);
  return "Swapping Variable Succesfully Completed";
}

 var swapResult = swapVariable(num1, num2);   // Function call or Function Invoke
 console.log(swapResult);
swapVariable(str1, str2);


function display(num){
  console.log(num);
  var result = typeof num;
  return result;

}
var result =display(100);
console.log(result);
console.log("--------------------------------------------");
// function with no argument and no return value

function showFullName(){
  console.log("My Full Name is: Komal Sawane");  // Function Declaration

}
showFullName();  // function call or invoke

console.log("----------------------------------------------------");
// function with argument and no return value

function showAge(age){
  console.log("My age is:", age);

}
showAge(29);
console.log("----------------------------------------------------");
// function with no argument and  return value
function fullName(){
  var name = "Komal Sawane";
  return name;
}
var fName= fullName();
console.log(fName);






















