function factorialOfNum(num) {
  if (num == null || num == "NaN" || num == undefined || num == 0) {
    console.log(`"${num}" Invalid Data`);
  }
  let result = 1;
  for (let index = num; index >= 1; index--) {
    result = result * index;
  }
  return result;
}

var result = factorialOfNum(5);
console.log(`Factorial of "5" is : ${result}`);
var result = factorialOfNum(3);
console.log(`Factorial of "3" is : ${result}`);
var result = factorialOfNum(null);

var result = factorialOfNum(8);
console.log(`Factorial of "8" is : ${result}`);
var result = factorialOfNum(undefined);

var result = factorialOfNum(9);
console.log(`Factorial of "9" is : ${result}`);
var result = factorialOfNum(0);

var result = factorialOfNum("NaN");
