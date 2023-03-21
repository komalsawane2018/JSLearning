
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`============Array Element with its Index===========`);

arrayNumbers.forEach((element,index) => {
    console.log(`Array index : ${index},  element : ${element}`);
});

console.log(`============2nd Step. Positive Numbers in Array ==============`);

arrayNumbers.forEach(element => {
    if (element >= 0) {

        console.log(`Positive Numbers : ${element}`);
    }
    
});
console.log(`============3rd Step. Negative Numbers in Array ==============`);
let newArray = []
arrayNumbers.forEach(element => {
    if (element < 0) {
       newArray.push(element)
}
    
});
console.log(`New Array of Negative Numbers: [${newArray}] `);

console.log(`============4th Step. Even Numbers in Array ==============`);

arrayNumbers.forEach(element => {
    if (element % 2 ==0) {
        console.log(`Even Number is  ${element}`);
   
    }   
});


console.log(`============5th Step. Sum of all element from array ===============`);
let sum = 0;
arrayNumbers.forEach(element => {
    sum = sum+element

});
console.log(`Sum of all element in array: ${sum}`);

console.log(`============6th Step. Even Indexed array value from array ===============`);
arrayNumbers.forEach((element, index)=> {
    if (index % 2 == 0) {
    console.log(`Even Indexed Array : ${element}`);
    }

});