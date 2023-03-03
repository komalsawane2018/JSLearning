
function factorialOfNum(num){
    if (num == null || num == "NaN" || num == undefined || num == 0) {
        console.log(`"${num}" Invalid Data`);
    }
    let result = 1;
    for (let index = num; index >=1; index--) {
        let indexedDB = index; 

        result = result * indexedDB;
        
    }
    return result;
}

var result = factorialOfNum(5);
console.log(`Factorial of "5" is : ${result}`);
var result = factorialOfNum(3);
console.log(`Factorial of "3" is : ${result}`);
var result = factorialOfNum(null);
// console.log(`Factorial of "null" is : ${result}`);
var result = factorialOfNum(8);
console.log(`Factorial of "8" is : ${result}`);
var result = factorialOfNum(undefined);
// console.log(`Factorial of "undefined" is : ${result}`);
var result = factorialOfNum(9);
console.log(`Factorial of "9" is : ${result}`);
var result = factorialOfNum(0);
// console.log(`Factorial of "0" is : ${result}`);
var result = factorialOfNum("NaN");
// console.log(`Factorial of "NaN" is : ${result}`);