//starting variables
let input;
const numbers = [];
let total = 0;

while(true) {
   input = +prompt("Please enter the number");

//    console.log(input);
    if (isNaN(input)) {
        alert(`Было введено не число, попробуйте еще раз`);
    } 

    if (input === 0) {
            break;
    } else if (!isNaN(input)) {
        numbers.push(input)
    }
}

function SumArr(array) {
    for (let el of array) {
        total += el;
    }
    return total;
}

console.log(SumArr(numbers));



// input = prompt("Please enter the number");

// console.log(input);