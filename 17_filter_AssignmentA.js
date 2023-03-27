
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

console.log(`=========== 1st. Number greater than 50 ========================`);

const greaterNum = arrayNumbers.filter((element) =>{

    return element > 50;
});
console.log(greaterNum);

console.log(`=========== 2nd. Even number ========================`);

const evenNum = arrayNumbers.filter((element) =>{
    return element % 2 ==0
});
console.log(evenNum);

console.log(`=========== 3rd. All Odd Number ========================`);
const oddNum = arrayNumbers.filter((element) =>{
    return element %2 !=0
    })
    console.log(oddNum);

console.log(`=========== 4th. Multiple of 5  ========================`);

const multipleOf5 = arrayNumbers.filter((element) =>{
    return element %5==0
    })
    console.log(multipleOf5);

console.log(`=========== 5th. Numbers between 20 & 50 ========================`);
const  numbers = arrayNumbers.filter((element) =>{
    return (element > 20) && (element < 50)
})
console.log(numbers);
