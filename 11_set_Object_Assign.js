console.log(`============= 1st step Create Object using Class ========================================================`);
class Bank {

    constructor(bank_Name,location,account_no,ifsc,interest_rate){
    this.bank_Name      = bank_Name;
    this.location       = location;
    this.account_no     = account_no;
    this.ifsc           = ifsc;
    this.interest_rate  = interest_rate;
} 
}
const axis_Bank = new Bank ("Axis Bank","Mumbai","4568921566","AXIS4567893","12%");
console.log(axis_Bank);
const sbi_Bank = new Bank ("SBI Bank","Pune","9881754640","SBIN0004598", " 8%");
console.log(sbi_Bank);
const icici_Bank = new Bank ("ICICI Bank", "Nashik", "6251489756","ICICI0054260", " 11%");
console.log(icici_Bank);
const kotak_Bank = new Bank ("Kotak Bank", "Hadapsar", "4587942522","KKBK0001752", " 13%");
console.log(kotak_Bank);
const hdfc_Bank = new Bank ("HDFC Bank", "Deccan", "3256456788","HDFC5623474", " 14%");
console.log(hdfc_Bank);
const punjab_Bank = new Bank ("Punjab Bank", "Kolkata", "7845213690","PUNB0078456", " 15%");
console.log(punjab_Bank);

console.log(`================ 2nd Step Add all object element into Set =================================================`);
const setOfBanks = new Set();
setOfBanks.add(axis_Bank);
//console.log(setOfBanks);
setOfBanks.add(sbi_Bank);
//console.log(setOfBanks);
setOfBanks.add(icici_Bank);
//console.log(setOfBanks);
setOfBanks.add(kotak_Bank);
//console.log(setOfBanks);
setOfBanks.add(hdfc_Bank);
//console.log(setOfBanks);
setOfBanks.add(punjab_Bank);
console.log(setOfBanks);
console.log(`=============Step 3 Traversing Set using for of loop ======================================================= `);

for (const banks of setOfBanks) {
    console.log(`Bank Name : ${banks.bank_Name},   Location : ${banks.location}`);
    
}