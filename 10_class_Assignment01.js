console.log(`============================ 1st Step ======================================`);

class Vehical {
constructor(companyName, model,color, engine, price ){

        this.companyName = companyName;
        this.model      =   model;
        this.color      =   color;
        this.engine     =   engine;
        this.price      =   price;
        
}

}
const carSonet = new Vehical("KIA" ,"SONET", "Red","Petrol", 1000000 );
console.log(carSonet);
const carHondacity = new Vehical("Honda", "Hondacity","Grey","Petrol",1500000); 
console.log(carHondacity);
const carBrezza = new Vehical("Maruti Suzuki","Breza","White","Diesel","1500000");
console.log(carBrezza);
const carAlto = new Vehical("Maruti Suzuki","Alto","Mat Grey","CNG",600000);
console.log(carAlto);
const carScorpio = new Vehical("Mahindra","Scorpio","Blue","Diesel",1700000);
console.log(carScorpio);

console.log(`=========================Add into the Array and Traverse using for of ==================================================`);
const arrayOfVehicles = [carSonet ,carHondacity, carBrezza,carAlto,carScorpio];
for (const details of arrayOfVehicles) {
    console.log(` Vehicles Details : ${details.companyName},${details.model},${details.color},${details.engine},${details.price}`);
    
}


console.log(`=========================2nd Step. ==================================================`);

class College {

    constructor(collegeName, address, university,id ){

        this.collegeName    = collegeName;
        this.address        = address;
        this.university     = university;
        this.id             =  id;  
        }
}
const collegeCwit = new College("CWIT", "Pune","Autonomus",24)
console.log(collegeCwit);
const collegeTae = new College("TAE", "Pune","Pune University","57")
console.log(collegeTae);
const collgeNmce = new College("NMCE","Isalampur","Shivaji University",42);
console.log(collgeNmce);
const collegeMit = new College("MIT","Pune","Pune University","15");
console.log(collegeMit);




console.log(`===================3rd Step. Traverse the complete given object using for in loop ===================================`);

function traverseObject(collegeName) {
for (const key in collegeName) {
    if (Object.hasOwnProperty.call(collegeName, key)) {   // Traversing Object using for in loop
        const element = collegeName[key];
        console.log(key,element);
        
    }
}
}
console.log(`================= CWIT College Details ==========================`);
traverseObject(collegeCwit);
console.log(`================= TAE College Details ==========================`);
traverseObject(collegeTae);
console.log(`================= NMCE College Details ==========================`);
traverseObject(collgeNmce);
console.log(`================= MIT College Details ==========================`);
traverseObject(collegeMit);


// console.log(`================================= 4th Prime Numbers ======================================`);

// function isPrime(n){
//     if (n<2) 
//        return `${n} is not prime`
//        for (let index = 2; index < n; index++) {
//            if (n % index===0) {
//                return`${n} is not a prime number` 
//            }
//            return`${n} is a prime number`  
//            }
//         }
    
   
//    console.log(isPrime(13));
//    console.log(isPrime(10));