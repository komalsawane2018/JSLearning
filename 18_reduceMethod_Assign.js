

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

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`==============All Employees from Wipro Company==================`);

const wiproEmp = arrayEmps.filter((employee) =>{
    return employee.empCompany == "Wipro";
});
wiproEmp.forEach(employee => {
    console.log(`Employees Name : ${employee.empName}, Company: ${employee.empCompany}`);
});

console.log(`==============All Employees from IT or HR Department==================`);

const dept = arrayEmps.filter((employee) =>{
    return employee.empDept == "IT" || employee.empDept == "HR";
});

dept.forEach((employee) =>{
    console.log(`Employees Name: ${employee.empName}, Department: ${employee.empDept}`);
})

console.log(`==============Employees whose Id greater than 50 ==================`);

const empId = arrayEmps.filter((employee) =>{
    return employee.empId > 50
})
dept.forEach((employee) =>{
console.log(`Employees Id: ${employee.empId}, Employees Name: ${employee.empName}`);    
});

  console.log(`==============Employees whose name Start with A,V,M ==================`);
  const empName1 = arrayEmps.filter((employee) =>{ 
    return employee.empName
  });
    empName1.forEach((employee) =>{
        if (employee.empName.startsWith("A") ||employee.empName. startsWith('V') ||employee.empName. startsWith('M')){
            console.log(` Employees Name: ${employee.empName}`);
        }
    });
         
    console.log(`==============Average Salary for Employees ==================`);
    const salaryOfEmp = arrayEmps.filter((employee) =>{
        return employee.empSalary;
    });
    let totalSalary = 0;
    salaryOfEmp.forEach((employee) =>{
        totalSalary = totalSalary+employee.empSalary
    });
    //console.log(totalSalary);
    const avgSalary = totalSalary / salaryOfEmp.length
    console.log(avgSalary);
    


console.log(`============== Find the Salary for IT department ==================`);

const itDepart = arrayEmps.filter((employee) =>{
    return employee.empDept == "IT"
})
const reduceArray = itDepart.reduce((runningTotal, value) =>{
    return runningTotal+value
});
console.log(reduceArray);
reduceArray.forEach((employee) =>{
     console.log(`${employee.empSalary}`);
 })




