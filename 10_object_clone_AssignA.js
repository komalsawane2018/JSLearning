
const arrayNums = [20,3,4,56,90,400,49];

const clonedArray = arrayNums;    // Shallow Cloning
clonedArray.push(55,66)
console.log(`Given Array   : ${arrayNums}`);
console.log(`Cloned Array  : ${clonedArray}`);

console.log(`================2nd Step Perform Deep Clone using Spread Operator========== `);
const newArray = [...arrayNums];
arrayNums.push(10,25);
console.log(`${newArray}`);
console.log(`${clonedArray}`);

console.log(`================3rd Step Concate array using spread operator============== `);
 const evenArray = [2,30,14,8];
 const resultArray = [...arrayNums, ...evenArray];
 console.log(`After concating array ${resultArray}`);

 console.log(`================4th Step Create employee_info Object===================== `);


 const employee_info = {
    emp_id   : 27,
    emp_name : "John Doe",

    salary : {
        july_month : "40,0000INR",
        july_month : "50,0000INR",
        july_month : "65,0000INR",
    },

    address : {
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanchi Pokli, 431202",
        },
        city    : "Mumbai",
        state   : "Maharashtra",
        country : "India"

    },
    mobiles: ["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"]

 }
 console.log(employee_info);
 console.log(`================5th Step Log Employees Details=================== `);

 console.log(`Address: Locality - ${employee_info.address.locality.colony}, Street - ${employee_info.address.locality.street},
            City - ${employee_info.address.city}, State - ${employee_info.address.state}, Country - ${employee_info.address.country}`);
console.log(`------------------------------------------------------------------`);
console.log(`Mobile Number ${employee_info.mobiles}`);


console.log(`================6th Step Perform Deep Copy using JSON.stringify()======================== `);
const clonedObject = JSON.parse(JSON.stringify(employee_info));

clonedObject.salary.july_month = "80,0000INR"
console.log(`Original Object       : ${employee_info.salary.july_month}`);        
console.log(`Updating clonedObject : ${clonedObject.salary.july_month}`);
console.log(`------------------------------------------------------------------`);
employee_info.address.country = "United Kingdom"
console.log(`Updating Country on employee_info object : ${employee_info.address.country}`);
console.log(`clonedObject Country is : ${clonedObject.address.country}`);


