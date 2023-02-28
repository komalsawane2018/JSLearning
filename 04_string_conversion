console.log(`------------------Implicit Conversion -----------------`);

// numeric string used with +gives string type
var result;
result = '3'+2
console.log(result);       // 32 concate 
 result = '3' + true;
 console.log(result);     // 3true
 result = '3' + undefined;
console.log(result);     // 3undefined
result = '3' + null;
 console.log(result);     // 3null

 // If boolean is used true= 1 & false = 0
 // Boolean converted into number
result = 3 + true;
console.log(result);      // 3+1 = 4
result = '3' - true;
console.log(result);      // 3-1 = 2
result = 3 + false;
console.log(result);      // 3-0 = 3

// numeric string used with - / * result number
// String converted into number

result = '4' - 2;      
console.log(result);        // 2
result = '4' - '2';
console.log(result);        // 2
result = '4' * 3;
console.log(result);        // 12
result = '4' / 2;
console.log(result);        // 2

// Arithmetic operation of undefined with number, boolean or null gives NaN

result = 4 + undefined;
console.log(result);           // NaN
result = 4 - undefined;
console.log(result);           // NaN
result = true + undefined ;
console.log(result);           // NaN 
result = null + undefined;
console.log(result);           // NaN

console.log(`------------------Explicit Conversion-----------------`);
 
//  Convert number strings and boolean values to numbers In That Case We Used Number()

// String to Number
result = Number('324');
console.log(result);        // 324
result = Number('324e-1');
console.log(result);  

// Boolean to Number

result = Number(true);
console.log(result);         // 1
result = Number(false)
console.log(result);         // 0

// If String is Invalid Number the Result will be "NaN"

result = Number('hello');
console.log(result);           // NaN
result = Number(undefined);    
console.log(result);           // NaN
result = Number(NaN);          
console.log(result);           // NaN

//String to Number using +Operator

var numberInString = '100';
console.log(typeof numberInString);       // string
var myNumber = +numberInString;
console.log(typeof myNumber);            // number