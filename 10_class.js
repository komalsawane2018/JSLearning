// class Bank {             // Blueprint

//     bankName
//     location
//     account
//     ifsc
//     interestRate
//     constructor(bankName, location, account, ifsc, interestRate ){
//         this.bankName = bankName;
//         this.location = location;
//         this.account = account;
//         this.ifsc = ifsc;
//         this.interestRate = interestRate;

// }


console.log(`==========Instead of We write following=============`);

class Bank {
    constructor(bankName, location, account, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
    }
}
const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 );
sbiBank.showDetails(sbiBank);

const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
console.log(axisBank);



class Person {
    constructor(fullName, city){
        this.fullName = fullName;

        this.city = city;
    }
}
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubham Gill", "Mumbai");

console.log(personDhoni instanceof Person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);