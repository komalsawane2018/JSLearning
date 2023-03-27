
const array = [113,45,56,11,32,45,109,799,56,45];

console.log(`==========1st. Reverse the Array ==============================`);

const reverseArray = array.reverse()
console.log(reverseArray);

console.log(`==========2nd. Sort method without custom logic =================`);

const sortArray = array.sort()
console.log(sortArray);

console.log(`==========3rd Sorting array in ascending array ==================`);

const ascendingArray = array.sort((a,b) =>{
    return a > b ? 1 : -1
});
console.log(ascendingArray);

console.log(`========== 4th Greatest Number in Array =========================`);

const greatestNum = ascendingArray[ascendingArray.length-1]
console.log(greatestNum);

console.log(`========== 5th Smallest Number in Array ========================`);

const smallestNum = ascendingArray[0]
console.log(smallestNum);

console.log(`========== 6th Remove Duplicate from Array ========================`);

const newArray = [...new Set(ascendingArray)]
console.log(newArray);




