
let array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const logItems = function(array) {
    for (let el of array) {
        console.log(`'${array.indexOf(el)} - ${el}'`)
    }
}

logItems(array)