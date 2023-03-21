
class Employee {
    constructor (emp_id,emp_name,emp_dept,emp_salary,emp_company){
    this.emp_id       = emp_id;
    this.emp_name     = emp_name;
    this.emp_dept     = emp_dept;
    this.emp_salary   = emp_salary;
    this.emp_company  = emp_company;
   }
   }
   
   const emp_anil   = new Employee(22,"Anil","IT",50000,"TCS");
   const emp_radha  = new Employee(33,"Radha","HR",74000,"Wipro")
   const emp_rishi  = new Employee(55,"Rishi","Finance",47000,"TCS")
   const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
   const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
   const emp_viny   = new Employee(88,"Vinayak","IT",75000,"TCS");
   const emp_mahi   = new Employee(99,"Mahesh","HR",85000,"Infy")

   const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

   console.log(`=========== 1st. TCS Employee Details==============================`);
    
   arrayEmployee.forEach(function(employee) {
    let empCompany = employee.emp_company
    if (empCompany == "TCS") {
        console.log(`Employee Name : ${employee.emp_name} , Company Name : ${employee.emp_company}`);
    }
});


console.log(`=========== 2nd.Employees with salary greater than equal 50000 ==============================`);

arrayEmployee.forEach(function(employee) {
    if (employee.emp_salary >= 50000) {
        console.log(`Employee ID: ${employee.emp_id}, Name: ${employee.emp_name}, Department: ${employee.emp_dept}, Salary: ${employee.emp_salary}, Company: ${employee.emp_company}`);
    }
});

console.log(`=========== 3rd.Sum of all employees salary ==================================`);
let totalSalary = 0
arrayEmployee.forEach(function(employee) {
   let salary = employee.emp_salary
    totalSalary = totalSalary + salary

});
console.log(`Sum of all employees salary: ${totalSalary}`);

console.log(`=========== 4th.Average Salary ======================================`);

    arrayEmployee.forEach((employee,index,array) => {
    let length = array.length;
    console.log(`Average salary of all employees: ${totalSalary/length}`);
});
 

console.log(`======= 5th.IT or HR Department employees whose salary is greater than equal 75000 ======================================`);

arrayEmployee.forEach(function(employee) {
    //let depart = employee.emp_dept
    if (employee.emp_salary >= 75000 && (employee.emp_dept =="IT" || employee.emp_dept =="HR")) {
 console.log(`Employee ID: ${employee.emp_id}, Name: ${employee.emp_name}, Department: ${employee.emp_dept}, Salary: ${employee.emp_salary}, Company: ${employee.emp_company}`);
    }
});