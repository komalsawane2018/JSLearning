

var arrayOfNumbers = [ 0, 2, 4, 5, 8, 4, 0, 8];
console.log(arrayOfNumbers);
// console.table(arrayOfNumbers);
const totalArrayElements =  arrayOfNumbers.length;
console.log(`Total elements available in array is: ${totalArrayElements}`);

const is8Available = arrayOfNumbers.includes(8)
console.log(`Is 8 available ${is8Available}`);

const is9Available = arrayOfNumbers.includes(9)
console.log(`Is 9 available ${is9Available}`);

const indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`Index of 8 element is ${indexOf8}`);

const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`Index of 100 element is ${indexOf100}`);



var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
const valueAtIndex = arrayOfNumbers[2]
console.log(`Value at index 2 is : ${valueAtIndex}`);
arrayOfNumbers [3] = 35;                     // Update the value of 3rd index value
console.log(arrayOfNumbers);

arrayOfNumbers[1] = 50;
console.log(arrayOfNumbers);
console.log(`-------------------Adding element last using push() method---------------`);
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
arrayOfNumbers.push(40);           // Adding element last using push method
console.log(arrayOfNumbers);
console.log(`-------------------Adding element first using unshift() method---------------`);
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);       

console.log(`-------------------Removing  last element using pop() method---------------`);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);

console.log(`-------------------Removing  fist element using shift() method---------------`);

arrayOfNumbers.shift();
console.log(arrayOfNumbers);



var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5, 40, 45];
console.log("==== slice(startIndex) === ");
const arrayFromIndex3 = arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);

console.log("==== slice(startIndex, endIndex) === ");
const subArray = arrayOfNumbers.slice(2, 5);
console.log(subArray);

console.log("============================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex) === ");
const splicedArray = arrayOfNumbers.splice(3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex, deleteCount) === ");
const splicedArrayWithDeleteCount = arrayOfNumbers.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumbers);
 
var arrayOfNumbers = [10,20,25,15,40,45]

arrayOfNumbers.splice(1,1);        //Remove element 25
console.log(arrayOfNumbers);
arrayOfNumbers.splice(3,1);       // remove element 15
console.log(arrayOfNumbers);

// Delete Element 20,25
var arrayOfNumbers = [10,20,25,15,40,45]
arrayOfNumbers.splice(1,2);
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(3,1);
console.log(`After removing 15: ${arrayOfNumbers}`);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice( 2, 0, 22);
console.log(arrayOfNumbers);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
// 5, 35, 55
arrayOfNumbers.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbers);



console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbers);

console.log("=====splice() to replace one elements [ 10, 20, 25, 15, 40, 45]====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2, 2 ,50,60);
console.log(arrayOfNumbers);

