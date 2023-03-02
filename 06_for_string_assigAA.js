
console.log(`-----------------Step 1-------------------`);

var vowel = function (str) {
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        if (char == "i" || char == "u" || char== "o" || char== "a" || char== "e" || char == 'E' 
        || char =='O' || char=='U' || char =='A' || char == 'I' ) {
            count = count + 1;    
        }

    }
    return count;
}
 var count = vowel("JavaScript is the langugae of Internet")
console.log(`Given String : "JavaScript is the langugae of Internet"
Total number of Vowel is : ${count}`);
var count = vowel(`I am Angular Developer`)
console.log(`Given String : "I am Angular Developer" 
Total number of Vowel is : ${count}`); 
 var count = vowel(`Hard work and commitment is the key of success`)
 var count = console.log(`"Given string : Hard work and commitment is the key of success"
 Total number of Vowel is : ${count}`);






console.log(`-----------------Step 2-------------------`);

// To Find count of last word in given string
function lastWordCharsCount(str){
    var count = 0;
    for (let index = str.length-1; index >=0; index--) {
        var char = str.charAt(index);
        
        if (char == " ") {
            break;
        }
        count = count + 1;
        
        
    }
    return count;


}   
var result = lastWordCharsCount(`"JavaScript is the langugae of Internet`)
console.log(`Given String : "JavaScript is the langugae of Internet"
Total count of last word is : ${result}`);

var result = lastWordCharsCount(`"I am Angular Developer`)
console.log(`Given String : "I am Angular Developer"
Total count of last word is : ${result}`);

var result = lastWordCharsCount(`Hard work and commitment is the key of success`)
console.log(`Given String : "Hard work and commitment is the key of success"
Total count of last word is : ${result}`);