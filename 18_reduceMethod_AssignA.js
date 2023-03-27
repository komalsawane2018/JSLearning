
const array =[20,11,40,25,37,49,9,90,60,2,19];

console.log(`=========Sum Of All Numbers===================`);

const sumOfArray = array.reduce((element,value) =>{
    return element + value
});
console.log(sumOfArray);

console.log(`============== Multiple of 5 ==================`);

const multipleOf5 = array.filter(element =>{
    return element % 5 == 0;
}).reduce((runningTotal,value)=>{
    return runningTotal+value
});
console.log(multipleOf5);