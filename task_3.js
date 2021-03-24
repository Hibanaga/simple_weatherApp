
let str = 'May the force be with you';


//bad algoritm to search (rework later)
const findLongestWord = function(str) {
    let arr = [];

    //find max length of str
    for (let el of str.split(" ")) {
        arr.push(el.length);
    };

    //get the max value
    arr=arr.sort().reverse();
    let maxLength = arr[0];

    //inizialize the variale to result
    let resArr = [];

    //find the max length in arr
    for (let el of str.split(" ")) {
        if (el.length === maxLength) {
            resArr.push(el);
        }
    }
    return resArr.join(" ");
}



console.log(findLongestWord(str));