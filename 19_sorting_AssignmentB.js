
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

const arrayEmployee = [emp_mahi, emp_viny, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_anil ];

console.log(`============ 1st Sort Array Employee Ascending Order of Id ==================================`);

const arrayId = arrayEmployee.filter((element) =>{
    return element.empId
})
 arrayId.sort((a,b) =>{
     return a.empId > b.empId ? 1 : -1
 })
 arrayId.forEach(element => {
console.log(`Employee ID: ${element.empId}, Name: ${element.empName}, Department: ${element.empDept} `);
 });

console.log(`============ 2nd Sort Array Employee Ascending Order of Employee Department =================`);
const arrayDep = arrayEmployee.filter((element) =>{
    return element.empDept
});

  const sortDept = arrayDep.sort((a,b)=>{
return a.empDept > b.empDept ? 1 : -1;
});
sortDept.forEach((element) =>{
    console.log(`Employee Id: ${element.empId}, Department: ${element.empDept}, Company: ${element.empCompany} `)
})
console.log(`============ 3rd Sort Array Employee Descending Order of Employee Salary =================`);

const arraySalary = arrayEmployee.filter((element) =>{
    return element.empSalary
})
const sortSalary = arraySalary.sort((a,b) =>{
    return a.empSalary > b.empSalary ? -1 : 1
})
sortSalary.forEach((element)=>{
    console.log(`Employee Name: ${element.empName}, Salary: ${element.empSalary}, Company: ${element.empCompany}`);
})



