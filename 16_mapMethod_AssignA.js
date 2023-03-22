
console.log(`========== Given Array ==================================`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(arrayNumbers);


console.log(`==========1st. After adding 10 into each element=================`);

const newArray = arrayNumbers.map((element) => {
     return element+10;
});
console.log(newArray);

console.log(`==========2nd. Square the each array element==============`);

const square = arrayNumbers.map((element) => {
   return element**2
});
console.log(square);

console.log(`==========3rd. After adding index value into each array element==============`);

const  indexValue = arrayNumbers.map((element,index) => {
  return element + index
})
console.log(indexValue);
