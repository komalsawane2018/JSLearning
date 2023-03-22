console.log(`========using forEach==========================`);

const array = [3, 4, 5, 8, 90, 50, 1, 44, 78, 51 ];
const newArray = [];
array.forEach( (element) => {
    if (element >= 50) {
        newArray.push(element);
    }
} );
console.log(newArray);

console.log(`===========Using filter()==================`);

const arrayElement = array.filter( (currentValue) => {
    return currentValue >=50;
} );
console.log(arrayElement);
const arrayElement0 = array.filter(currentValue => currentValue >=50);
console.log(arrayElement0);

const arrayElement1 = array.filter(currentValue => currentValue %2 ==0);
console.log(arrayElement1);


