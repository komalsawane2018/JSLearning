

const employee = {
    id: 124567,
    name: "Elon Musk",
    country : "US",
    city: "Silicon Valley"
 }
 console.log("===========in operator===========");
 const idAvailable = "id" in employee;        // To check wheather operator is available and not
 console.log(idAvailable);

 for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);

    }
 }
 const keyOfEmployee = Object.keys(employee);
 console.log(keyOfEmployee );

 const valuesOfEmployee = Object.values(employee);
 console.log(valuesOfEmployee);

 const entriesOfEmployee = Object.entries(employee);
 console.log(entriesOfEmployee);

console.log(`========= Frezzed======`);

 const player = {
    fullName: "Virat Kohli",
    totalCenturies : 46,
    isMarries: true
}
Object.freeze(player);
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed
delete player.totalCenturies;// deleting property - Not allowed as object is freezed
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed

console.table(player);



console.log(`=============`);



const student = {
    firstName: "Elon",
    lastName: "Musk",
    age: 54
} 
const address = {
    country : "US",
    city : "Silicon Valley",
    PIN: "QA2345"
}

// First way  Merged object with new empty object
const mergedObject = Object.assign({}, student, address);
console.table(mergedObject);

// Second way Merged object with new empty object
const newObject = {};
Object.assign(newObject, student, address);
console.table(newObject);

//  Third way to merged address in student object
Object.assign(student, address);
console.table(student);

//  Fourth way to merged student in address object 
Object.assign(address, student);
console.table(address);

