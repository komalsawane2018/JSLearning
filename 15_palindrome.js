
// To check if the string is palindrome or not

function ispalndrom(str) {
    let reverse = str.split("").reverse().join("");
    return reverse == str     
}
let result = ispalndrom("MADAM");
console.log(result);
let result1 = ispalndrom("null");
console.log(result1);

// Pattern
