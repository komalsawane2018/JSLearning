console.log('----------------Step 1 (Add fisrt and last element")-------------------------');

console.log(`List of Fruits : ("Banana","Orange","Apple","Mango","Water Melon")`);
const arraySeasonalFruits =["Banana","Orange","Apple","Mango","Water Melon"];

let firstElementOfIndex = arraySeasonalFruits[0];
console.log(`First element in araay : "${ firstElementOfIndex}" `);

//  let length = arraySeasonalFruits.length-1;
//  let output = arraySeasonalFruits.slice(length);
//   console.log(output);
let lastElementOfIndex = arraySeasonalFruits.slice(arraySeasonalFruits.length-1)
console.log(`Last element in array  : "${lastElementOfIndex}"`);

console.log('----------------Step 2 (Add element "Papaya" Before "Banana")-------------------------');

arraySeasonalFruits.unshift("Papaya");
console.log(arraySeasonalFruits);   

console.log('----------------Step 3 (Remove "Mango" from array) -------------------------');

arraySeasonalFruits.splice(4,1);
console.log(arraySeasonalFruits);

console.log('----------------Step 4 (Insert element "Pineapple" at  last position -------------------------');

arraySeasonalFruits.push("Pineapple");
console.log(arraySeasonalFruits);

console.log('----------------Step 5 (Insert element "Dragon Fruit" before "Water Melon")  ---------------');
arraySeasonalFruits.splice(4,0,"Dragon Fruit")
console.log(arraySeasonalFruits);

console.log('----------------Step 6 (Replace an element "Orange" with "Kiwi")  ---------------');

arraySeasonalFruits[2] = "Kiwi";
console.log(arraySeasonalFruits);

console.log('----------------Step 7 (Element Starting from index 1 to 4)  ---------------');
let arraySlice =arraySeasonalFruits.slice(1,4);
console.log(arraySlice);
console.log('----------------Step 8 (Select last 3 element )  ---------------');
const sliceLast3Element = arraySeasonalFruits.slice (4);
console.log(sliceLast3Element);
