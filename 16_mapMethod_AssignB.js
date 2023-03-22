
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


//console.log(`================= Array of Employee===============================================`);
const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
//console.log(arrayEmployee);
console.log(`===============1st. List of all employees name =============================`)

const nameOfEmployee = arrayEmployee.map((employee) =>{
    return employee.emp_name
});
console.log(nameOfEmployee);

console.log(`===============2nd. List of department ======================================`)

  const departOfEmp = arrayEmployee.map((employee) =>{
    return employee.emp_dept
 })
console.log(departOfEmp);


console.log(`===============3rd. List of Employees ID ======================================`)

const idOfEmp = arrayEmployee.map((employee) =>{
    return employee.emp_id
});
console.log(idOfEmp);

console.log(`=============== 4th. Employees name working in TCS ======================================`)

const nameOFEmp = arrayEmployee.map((employee) =>{
if (employee.emp_company == "TCS") {
    console.log(`Employee Name: ${employee.emp_name},  Company Name: ${employee.emp_company}`);
}
})
