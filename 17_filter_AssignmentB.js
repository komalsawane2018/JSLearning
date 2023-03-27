

class Employee {
    constructor (empId,empName,empDept,empSalary,empCompany){
    this.empId       = empId;
    this.empName     = empName;
    this.empDept     = empDept;
    this.empSalary   = empSalary;
    this.empCompany  = empCompany;
   }
   }
   
   const emp_anil   = new Employee(22,"Anil","IT",50000,"TCS");
   const emp_radha  = new Employee(33,"Radha","HR",74000,"Wipro")
   const emp_rishi  = new Employee(55,"Rishi","Finance",47000,"TCS")
   const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
   const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
   const emp_viny   = new Employee(88,"Vinayak","IT",75000,"TCS");
   const emp_mahi   = new Employee(99,"Mahesh","HR",85000,"Infy")


//console.log(`================= Array of Employee===============================================`);
const arrayEmployee = [emp_mahi, , emp_viny,emp_radha, emp_rishi, emp_sonali, emp_monika,emp_anil ];

console.log(`================= Employees in TCS ===============================================`);

const tcsEmp = arrayEmployee.filter((employee) =>{
    return employee.empCompany == "TCS";
});
tcsEmp.forEach((employee) =>{
console.log(` Company Name: ${employee.empCompany}, Employee Name : ${employee.empName} `);
})

console.log(`================= Average Salary Employees from Wipro ======================================`);

const wiproEmp = arrayEmployee.filter((employee) =>{
    return employee.empCompany == "Wipro";
});
 const totalWiproSalary= wiproEmp.reduce((runningTotal,element) =>{
    return runningTotal+element.empSalary
},0)
console.log(totalWiproSalary / wiproEmp.length);

console.log(`================= Average Salary Employees from Wipro & Infy ======================================`);

const infyEmp = arrayEmployee.filter((employee) =>{
  return employee.empCompany == "Infy" || employee.empCompany == "Wipro";
})
const salary = infyEmp.reduce((runningTotal, element ) =>{
return runningTotal + element.empSalary
},0)
 console.log(salary/ infyEmp.length);

// let salary = 0
// infyEmp.forEach((employee)  =>{
// salary = salary + employee.empSalary
// });
// console.log(`${salary / infyEmp.length}`);


