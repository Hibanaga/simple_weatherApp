

let employees = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};

// let employees = {
//         ann: 150,
//     david: 215,
//     helen: 1,
//     lorence: 99,
// };


const findBestEmployee = (employees) => {

    //get the array of values of obj employees
    let employeesProductivity = Object.values(employees);
    //find max value of array with spread operator
    let maxProductivity = Math.max(...employeesProductivity);

    //find the max productivity employees
    for (let key in employees) {
        if (maxProductivity === employees[key]) {
            return `${key}`
        }
    }
};


console.log(findBestEmployee(employees));





