
function Bank(bankName,location,ifscCode,brachCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.brachCode = brachCode;

    this.show = function(){
        console.log(`Bank Name : ${this.bankName}, Locaion : ${this.location}, IFSC Code : ${this.ifscCode}, Branch Code : ${this.brachCode}`);
    }
}
const yesBank = new Bank("YES Bank","Pune","YESB0000008","YES2512");
yesBank.show();
const sbiBank = new Bank("SBI Bank","Pune","SBIN0000455","SBI8745");
sbiBank.show();
const mahBank = new Bank("Maharashtra Bank","Mumbai","MAHB56188","MAH7453");
mahBank.show();
const axisBank = new Bank("Axis Bank","Nashik","UTIB0000037","UTI5682");
axisBank.show();
console.log(`===============2nd Step Adding data member to object============================`);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`SBI Bank Open time : ${sbiBank.openTime} and Close time : ${sbiBank.closeTime}`);

console.log(`Bank Name : ${axisBank.bankName}, Axis Bank Close time : ${axisBank.closeTime}`);
console.log(`Bank Name : ${yesBank.bankName}, Branch Code : ${yesBank.brachCode}, YES Bank Open time : ${yesBank.openTime}`);
