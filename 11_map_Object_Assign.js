console.log(`===================== 1st Step Object Created using class================================================================`);
class Bank {

    constructor(bank_Name,location,account_no,ifsc,interest_rate){
    this.bank_Name      = bank_Name;
    this.location       = location;
    this.account_no     = account_no;
    this.ifsc           = ifsc;
    this.interest_rate  = interest_rate;
} 
}
const axis_Bank = new Bank ("Axis Bank","Mumbai","456156600","AXIS4567893","12%");
console.log(axis_Bank);
const sbi_Bank = new Bank ("SBI Bank","Pune","124640117","SBIN0004598", " 8%");
console.log(sbi_Bank);
const icici_Bank = new Bank ("ICICI Bank", "Nashik", "412297565","ICICI0054260", " 11%");
console.log(icici_Bank);
const kotak_Bank = new Bank ("Kotak Bank", "Hadapsar", "256625221","KKBK0001752", " 13%");
console.log(kotak_Bank);
const hdfc_Bank = new Bank ("HDFC Bank", "Deccan", "200678830","HDFC5623474", " 14%");
console.log(hdfc_Bank);
const punjab_Bank = new Bank ("Punjab Bank", "Kolkata", "456653690","PUNB0078456", " 15%");
console.log(punjab_Bank);

const mapOfBanks = new Map();
mapOfBanks.set(axis_Bank.account_no,  axis_Bank);
mapOfBanks.set(sbi_Bank.account_no,    sbi_Bank);
mapOfBanks.set(icici_Bank.account_no,    icici_Bank);
mapOfBanks.set(kotak_Bank.account_no,    kotak_Bank);
mapOfBanks.set(hdfc_Bank.account_no,    hdfc_Bank)
mapOfBanks.set(punjab_Bank.account_no,    punjab_Bank);

console.log(`=====================2nd Step In Map Key is account No and Value is Object==========================================`);
console.log(mapOfBanks);

console.log(`================= 3rd Step.Traversing Map=============================================================================`);
//const keyOfMap= mapOfBanks.keys();

for (const key of mapOfBanks.keys()) {
    
    const element = mapOfBanks.get(key)
console.log(`Bank Name : ${element.bank_Name}, Account No. : ${element.account_no}, Interest Rate : ${element.interest_rate}`);

}
