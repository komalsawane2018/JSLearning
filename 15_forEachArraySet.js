
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

const arraySet = new Set();
arraySet.add (emp_anil)
arraySet.add(emp_radha)
arraySet.add(emp_rishi)
arraySet.add(emp_sonali);
arraySet.add(emp_monika);
arraySet.add(emp_viny);
arraySet.add(emp_mahi);

console.log(`==========Traversing Set using For Each Loop================`);

arraySet.forEach((employee) => {

    console.log(`Employee ID: ${employee.emp_id}, Name: ${employee.emp_name}, Department: ${employee.emp_dept}, Salary: ${employee.emp_salary}, Company: ${employee.emp_company}`);
    
});




