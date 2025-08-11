const employees = [
    {id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: "Javascript"},
    {id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:"Python"},
    {id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: "Ruby"},
    {id: 4, name: 'Marta Smith', age: 20, department: 'HR', salary: 45000, specialization:"Java"},
]

const displayEmployees = employees.map((employee,index) => `<p>${employee.id}:${employee.name} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = displayEmployees;

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc,employee) => acc + employee.salary,0 )
    alert (`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees(){
    const HREmployees = employees.filter(employee => employee.department == 'HR');
    const HREmployeesDisplay = HREmployees.map((employee,index) => `<p>${employee.name}:${employee.age}:${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = HREmployeesDisplay;
}

function findEmployeeById(employeeId){
    const findEmployee = employees.find(employee => employee.id == employeeId);
    if(findEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${findEmployee.name}</p>`
    }
    else{
        document.getElementById('employeesDetails').innerHTML = `<p>no employee with ${employeeId} found</p>`
    }
}

function findBySpecialization(){
    const jsEmployee= employees.filter((employee) => employee.specialization == "Javascript");
    const employeeDisplay = jsEmployee.map((employee,index) => `<p>${employee.name} - ${employee.department} - ${employee.specialization}</p>`).join('');
    document.getElementById("employeesDetails").innerHTML = employeeDisplay;
}