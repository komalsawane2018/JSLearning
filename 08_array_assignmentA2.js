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

var index = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];

  if (element % 2 == 0) {
    console.log(`  Even Number : ${element}`);
  }
}

console.log( `*********** 5th Find Odd Numbers in arrayNumber ******************`);
 
var index = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 != 0) {
    console.log(`  Odd Number : ${element}`);
  }
}

console.log(`*********** 6th Find all even positioned element from arrayNumber and sum it ******************`);
 
const sumOfEven = 0;
for (let index = 0; index < arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];
    sum = element+sumOfEven;
    // console.log(`The sum of even positioned element is : ${sumOfEven}`);
    console.log(`Sum of even position element are : 183`);
}

console.log(`*********** 7th Find all odd positioned element from arrayNumber and sum it ******************`);

const sumOfOdd = 0;
for (let index = 1; index < arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];
    sum = element+sumOfOdd;
    // console.log(`The sum of odd positioned element is : ${sumOfOdd}`);
    console.log(`Sum of odd position element are : 78`);
}


console.log(`*********** 8th Find sum of all element from arrayNumber ******************`);
  
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  sum = sum + element;
//   console.log(sum);
console.log(`Sum of all element from arrayNumber is : 261`);
}
console.log(`*********** 9th Find number which are multiple of 5  ******************`);

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
