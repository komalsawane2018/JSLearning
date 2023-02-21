
var givenString = "     Hey you are doing good, keep it up      ";

function stringHandsOn(){
    
    console.log("Given String is:", givenString);
    
    }
stringHandsOn();
console.log("----------------- Step 2.------------------------------------");
var givenStringLength = givenString.length;
console.log("Length of string is:", givenStringLength);

console.log("---------------- Step 3.------------------------------------");

var givenStringTrim = givenString.trim();
console.log("Remove extra leading & trailing spaces:", givenStringTrim);

console.log("--------------- Step 4.--------------------------------------");

var count = givenString.length-givenStringTrim.length;
console.log("Total number of removed extra spaces count is:",count);

console.log("---------------Step 5.  --------------------------------------");
var charFirstIndex = givenStringTrim.charAt(givenStringTrim-0);
console.log("First char is:", charFirstIndex);
var charLastIndex = givenStringTrim.charAt(givenStringTrim.length-1);
console.log("Last char is:", charLastIndex);





console.log("---------------  Step 6.  --------------------------------------");

var totalWords = givenStringTrim.split(" ");
console.log("Total Number of Words Given String is:",totalWords);

console.log("---------------  Step 7.  --------------------------------------");

    var indexOf = givenString.indexOf("good");
   console.log("Index of word good is:",indexOf);

console.log("---------------  Step 8.  --------------------------------------");

var sliceResult = givenStringTrim.slice(22);
console.log("substring starting from index 22 by using slice() is:",sliceResult);

var subStringResult = givenStringTrim.substring(22);
console.log("substring starting from index 22 by using substring() is:",subStringResult);

console.log("---------------Step 9.  --------------------------------------");
console.log("Is String end with word up:", givenStringTrim.includes("up"));

console.log("---------------Step 10.  --------------------------------------");

console.log("Is String start with word Hey:", givenStringTrim.includes("Hey"));

console.log("length of String is:", givenStringTrim.length);


