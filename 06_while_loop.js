

// WAP to print numbers from 0 to 10

var index = 0; // initialisation
while (index<=10) {  // condition
    console.log(index);   
    index++   // updation Expression
}
 console.log("============ Traversing (accessing)===============");

  var arrayOfNumbers = [10,20,25,15,40,45,60,40,30,22,26]

 var index = 0;     // initialisation
 while (index < arrayOfNumbers.length) {
console.log(arrayOfNumbers[index]);
 index++      // updation Expression
 }
console.log("==========Even numbers Sum===============");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

var index=0; // initialization
let sum = 0;
while (index<arrayOfNumbers.length) { // condition
    const element = arrayOfNumbers[index];
    if(element%2==0) {
        
        sum = sum + element;
    }
    index++; // Update Expression
    console.log(sum);
}


console.log("==========Sum of Even position Numbers ===============");

const arrayNum = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var index = 0;
var sumOf = 0;
while (index < arrayNum.length) {
    const element = arrayNum[index]
    
    sumOf = sumOf + element
    
    index = index +2 ;
    console.log(sumOf);
}
