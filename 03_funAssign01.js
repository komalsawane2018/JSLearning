console.log("***1st No Arguments and No Return********");

function myCity() {
  console.log("My City Name is: Pune");
}
myCity();

function myGraduation() {
  console.log("My Graduation in: E&TC Engineering");
}
myGraduation();

console.log("********2nd Function with arguments and No Return********");
function personalDetails(firstName, lastName, collegeName) {
  console.log(
    "My First Name:",
    firstName,
    "My Last Name:",
    lastName,
    "My College Name:",
    collegeName
  );
}
personalDetails("Komal", "Sawane", "TrinityCollege of Engineering Pune");

console.log("********3rd Function with arguments and No Return********");

console.log("Swapping Variable");
function swapValueDude(name1, name2) {
  console.log("Before Swapping:", name1, name2);
  var temp = name1;
  name1 = name2;
  name2 = temp;
  console.log("After Swapping:", name1, name2);
}
swapValueDude("Virat", "Anushka");
swapValueDude("1000", "2000");
console.log("********4th Function with arguments and Return********");


function addThreeValue(num1, num2, num3) {
//   console.log(num1, num2, num3);
  var sum = num1 + num2 + num3;
  return sum;
}
var sumResult = addThreeValue(10.23, 600, 40);
console.log(sumResult);
var sumResult = addThreeValue("Hello ", "Good ", "Morning");
console.log(sumResult);
