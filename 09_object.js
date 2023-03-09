

const student = {

firstName : "Komal",
lastName: "Sawane",
isWorking : false,
age: 22,
colleName: "CWIT",
id:12334,
address : {                     // Nested Object

    street : "Wakad",
    city: "Pune",
    PIN : 431204
}
};
console.log(student);
console.log(typeof student);

console.log(student.address.city);
student.address.PIN = 431205
console.log(student.address.PIN); 

console.log(typeof student.PIN);
console.log(typeof student.address);


// . Dot Notation
console.log(student.firstName);   // accessing value by using .

// [] Notation
console.log(student["lastName"]); // accessing value by usig []

console.log(`============Updating Variable College Name=====================`);
let collegeName = "ABC";
collegeName = "COEP PUNE"
console.log(collegeName);

student.colleName = " COEP PUNE"
console.log(student.colleName);

console.log(student.age); 

console.log(`===========Add New Property ================`);
//city = "Mumbai" 
student.city = "Mumbai";
console.table(student);
// Country = India
student.country = "India";
console.table(student)

console.log(`===========Delete New Property ================`);


delete student.isWorking;
console.table(student);

// //Empty Object
let teacher= {};
// firstName = "Mohit"
teacher.firstName = "Mohit"
console.log(teacher);

const array = [];
array[0]= 12;
console.log(array);

