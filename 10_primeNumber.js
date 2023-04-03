
console.log(`=================================Prime Numbers ======================================`);

 function isPrime(num){

    for (let index = 2; index < num; index++) {
        if (num % index ==0) {
            return 'Not Prime Number'
        }
        }
        return 'Prime Number'
 }
   console.log(isPrime(13));
   console.log(isPrime(10));


console.log(`=================================first 10 Prime Numbers ======================================`);


function primeNumbers(startValue,totalPrime){
    let count = 0;
    let num = startValue;
    const arrayOfPrime = [];
    while (count<totalPrime) {
        let isPrimeNum = isPrime(num);
        if(isPrimeNum) {
            count++;
            arrayOfPrime.push(num);
        }
        num++;
    } 
    console.log(arrayOfPrime); 
}

function isPrime(num){
    for (let index = 2; index < num; index++) { // num = 7 index= 7
        if(num%index ==0) {// 7%6==0
            return false;
        }
    }
    return true;
}
primeNumbers(3, 10);
primeNumbers(20, 10);
primeNumbers(50, 15);
        
console.log(`==========================Prime Number New Easy Way =========================`);

let array=[]
function name(arg,arg1) {
  let count1=0;

for (let number=arg; count1<arg1; number++){

let isprime=true;

for (let index = 2; index <number; index++) {
    if (number%index==0) {
        isprime=false;
        break;
    }  
}
if (isprime) {
    array.push(number)
    count1=count1+1;
}
}
console.log(array);
}
name(2,10)












