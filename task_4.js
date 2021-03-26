
// let employees = {
//     mango: 100,
//     poly: 150,
//     alfred: 80,
// };

let employees = {
    kiwi: 200,
    lux: 50,
    chelsy: 150,
}



//version 1:
const countTotalSalary = (employees)=> {
    //convert values of obj to array
    let salaries = Object.values(employees);
    //initial the variable to totalSalary
    let totalSalary = 0;
    //get the sum of salary
    for (let salary of salaries) {
        totalSalary += salary;
    }
    return totalSalary;
}

//version 2:
// const countTotalSalary = (employees)=> {
//     let totalSalary = 0
//    for (let key in employees) {
//        totalSalary+= employees[key]
//    }
//    return totalSalary;
// }


console.log(countTotalSalary(employees));