const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(`The given array is : arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11] `);
console.log(`*********** 1st.Total Elements Available arrayNumber*****************`);
  
const totalElement = arrayNumbers.length;
console.log(`Total element available in arrayNumber is :  ${totalElement}`);

console.log(`*********** 2nd First and Last element in arrayNumber ****************`);
  
const firstElement = arrayNumbers[0];
console.log(`  First element in arrayNumber is : ${firstElement}`);
console.log(`  Last element in arrayNumber is : ${arrayNumbers[arrayNumbers.length - 1]}`);
  
console.log(`*********** 3rd  Third Last element in arrayNumber ******************`);
 
console.log(`  3rd last element in arrayNumber is : ${arrayNumbers[arrayNumbers.length - 3]}`);
  
console.log(`*********** 4th Find Even numbers in arrayNumber ******************`);
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];

  if (element % 2 == 0) {
  
   console.log(`  Even Number : ${element}`);
  }
}

console.log( `*********** 5th Find Odd Numbers in arrayNumber ******************`);
 
let array = []
for (let index = 0; index < arrayNumbers.length; index++) {
  
  const element = arrayNumbers[index];
  if (index % 2 != 0) {
      array.push(element)
    }
    
}
console.log(`  Odd Number : ${array}`);



console.log(`*********** 6th Find all even positioned element from arrayNumber and sum it ******************`);
 let evenElement = [];
let sumOfEven = 0;
for (let index = 0; index < arrayNumbers.length; index= index+2) {
    const element = arrayNumbers[index];
        evenElement.push(element);
      sumOfEven = sumOfEven + element; 
      
    }
  console.log(`Even positioned element is [${evenElement}] Sum is: ${sumOfEven}`);

// let evenposition=[]
// let sum1=0
// for (let index = 0; index < arrayNumbers.length; index++) {
//     const ele=arrayNumbers[index]
//     if (index%2==0) {
//         evenposition.push(ele)
//         sum1=sum1+ele
        
//     }
// console.log(`6) Even position elements in the array is = ${evenposition} and sum of the even position elements in the array is ${sum1}`);

console.log(`*********** 7th Find all odd positioned element from arrayNumber and sum it ******************`);
let oddElement = [];
let sumOfOdd = 0;
for (let index = 1; index < arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];
      oddElement.push(element)
    sumOfOdd = element+sumOfOdd;
     
    }
    console.log(`Odd positioned element is [ ${oddElement}]  Sum is : ${sumOfOdd}`);


console.log(`*********** 8th Find sum of all element from arrayNumber ******************`);
  var arraySum = [];
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  arraySum.push(element);
  sum = sum + element;
 
}
console.log(`All element in arrayNumber [${arraySum}] Sum of : ${sum}`);
console.log(`*********** 9th Find number which are multiple of 5  ******************`);
let element =[]
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];

  if (element % 5 == 0) {
    console.log(`Multiple of 5 are : ${element}`);   
  }
}


console.log(`*********** 10th is number 115 available in arrayNumbers  ******************`);

const isNum115Available = arrayNumbers.includes(115);
console.log(`Is Number 115 available in arrayNumbers : ${isNum115Available}`);

console.log(`***********(11th is number 23 available in arrayNumbers)  ******************`);
  

const isNum23Available = arrayNumbers.includes(23);
console.log(`Is Number 115 available in arrayNumbers : ${isNum23Available}`);

console.log(`*********** (12th Insert number 55, 66 before index 3 ******************`);
  

arrayNumbers.splice(3, 0, 55, 66);
console.log(`The number 55,66 added [${arrayNumbers}]`);

console.log(`*********** (13th Delete 3 elements Starting from index 4 ******************`);

arrayNumbers.splice(4, 3);
console.log(arrayNumbers);
