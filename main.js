


function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function isReverse(num) {
    let reverseNum = +num.toString().split("").reverse().join("")
    if (num !== reverseNum) {
        return isPrime(reverseNum);
    }
    return false;
}

function backwardsPrime(start, stop){
    // your code here
    let arr = [];
    for (let i=start;i<=stop;i++) {
        if (isPrime(i) && isReverse(i)) {
            arr.push(i);
        }
    }

    return arr;
  }



console.log(isReverse(12));
console.log(backwardsPrime(2,100));