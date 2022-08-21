let hourlySalary = prompt("What is your hourly salary?");
let hoursWorked = prompt("How many hours did your work?");
let totalSalary;

if (hoursWorked <= 7){
   totalSalary = hoursWorked * hourlySalary;
} else if (hoursWorked <= 9) {
    totalSalary = hoursWorked * hourlySalary + (hoursWorked - 7) * hourlySalary * 0.5;
} else {
    totalSalary = hoursWorked * hourlySalary + 2 * hourlySalary * 0.5 + (hoursWorked - 9) * hourlySalary;
} 
console.log(`You made ${totalSalary} euros today.`);