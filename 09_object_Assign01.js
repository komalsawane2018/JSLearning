
const professor ={

    name        : "Sanjay Khonde",
    age         :  45,
    collegeName : "CWIT Pune",
    department  : "E & TC Department",
    Id          : 24,
    city        : "Pune",

    degrees : {
        
        engineering : "CSC",
        PHD         :  "Advance Computing",
},
 certificate :["Hacker Rank Participation",'Certificate in IFE Course','Certificate in Advance Programming' ],

 degreesDetails: function(){          // concate address
    this.degrees
    return `Degree certificate in ${this.degrees.engineering}, PHD in ${this.degrees.PHD}`
},


 };
console.log(`-----------1st. Property added to object name Professor----------- `); 
console.log(professor);
console.log(`-----------2nd.Include Nested Object Degrees-----------------------`);
console.log(professor.degrees);
console.log(`-----------3rd Add Array with name certificate---------------------`);
console.log(professor.certificate);
console.log(`-----------4th Add function and Concate all degrees---------------------------------`);
let result = professor.degreesDetails();
console.log(result);

professor.totalExperience = "14 years"
console.log(`------------5th. Add new property like totalExperience-------------`);
console.log(`Total Experience of Professor is : ${professor.totalExperience}`);

professor.Id = 18;
console.log(`-------------6th Modify existing property like Id---------------------`);
console.log(professor);

professor.certificate.push("Oracle Certified");
console.log(`-------------7th Add one new certificate at the end of array certificate-----------`);
console.log(professor.certificate); 

console.log(`-------------8th log last element of the array certificate-----------`);
console.log(` ${professor.certificate[professor.certificate.length-1]}`);

