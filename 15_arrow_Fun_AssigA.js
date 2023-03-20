
console.log(`===========Arrow Function with No Argument and No Return Value`);

 let arrowFun = () => console.log("Good Morning, Today is Monday");arrowFun();

 console.log(`=========== 2nd.Step - Arrow Function with 3 Argument and No Return Value==================`);

 let show = (num1,num2,num3=1) => {
    console.log(`Multipication of num1*num2*num3 = ${num1*num2*num3}`);
    
}
show(5,5,2);
show(10,4);
 
 console.log(`=========== 3rd.Step - Arrow Function with 5 Argument and Return Value==================`);

 let addition = (num1,num2,num3,num4,num5) => {
 let result = num1+num2+num3+num4+num5; 
 return result

 }
let output =  addition(100,100,200,349,756);
console.log(`Addition of numbers 100+100+200+349+756 = ${output}`);
let output1 = addition("I am"," learning"," ES6"," features"," in depth");
console.log(`Result of concating  5 values = ${output1}`);