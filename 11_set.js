

const setOfNums = new Set();
setOfNums.add(2);         // aading element
setOfNums.add(3);
setOfNums.add(8);
setOfNums.add(2);
setOfNums.add(9);
setOfNums.add(3);
console.log(setOfNums);

console.log(setOfNums.size);   // size
setOfNums.delete(9);
console.log(setOfNums);


 console.log(setOfNums.values());
console.log(`===================`);
for (const element of setOfNums) {
    console.log(element);
}

//setOfNums.clear();
// console.log(setOfNums);