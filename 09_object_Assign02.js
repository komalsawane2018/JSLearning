console.log(`------------------------------ 1.State Bank of India---------------------------------------`);

const sbiBank = {

    bankName     : "State Bank of India",
    location     : "Pune",
    accountNo    : "98102548761820",
    ifscCode     : "SBIN0000455",
    interestRate : "8%",

    showDetails: function() {
console.log(`Bank Name : ${sbiBank.bankName}, location : ${sbiBank.location}, Account No : ${sbiBank.accountNo},IFSC Code : ${sbiBank.ifscCode}, Interest rate : ${sbiBank.interestRate}`);

}
}
sbiBank.showDetails();

console.log(`-------------------------------- 2.Axis Bank-----------------------------------------------`);

const axisBank = {

    bankName     : "Axis Bank",
    location     : "Pune",
    accountNo    : "65102548745685",
    ifscCode     : "UTIB0000037",
    interestRate : "9%",

showDetails: function(){
console.log(`Bank Name : ${axisBank.bankName}, location : ${axisBank.location}, Account No : ${axisBank.accountNo},IFSC Code : ${axisBank.ifscCode}, Interest rate : ${axisBank.interestRate}`);


} 
}
axisBank.showDetails();

console.log(`-------------------------------- 3.HDFC Bank-----------------------------------------------`);

const hdfcBank = {
 
    bankName     : "HDFC Bank",
    location     : "Pune",
    accountNo    : "45610254874565",
    ifscCode     : "HDFC0000148",
    interestRate : "11%",

showDetails : function(){
console.log(`Bank Name : ${hdfcBank.bankName}, location : ${hdfcBank.location}, Account No : ${hdfcBank.accountNo},IFSC Code : ${hdfcBank.ifscCode}, Interest rate : ${hdfcBank.interestRate}`);

    
}
}
hdfcBank.showDetails();

console.log(`---------------------------------- 4.YES Bank -----------------------------------------------`);

const yesBank = {

    bankName     : "YES Bank",
    location     : "Pune",
    accountNo    : "09223921111",
    ifscCode     : "YESB0000008",
    interestRate : "10%",

    showDetails : function(){
console.log(`Bank Name : ${yesBank.bankName}, location : ${yesBank.location}, Account No : ${yesBank.accountNo},IFSC Code : ${yesBank.ifscCode}, Interest rate : ${yesBank.interestRate}`);

            
        }
            
}
yesBank.showDetails();

