let str = 'Vestibulum facilisis, purus nec pulvinar iaculis.';

const formatString = (str)=> {

    // str.length < 40 ? str : str = `${str.substring(0,40)}...`
    // return str

    if (str.length < 40) {
        return str
    } else {
        return `${str.substring(0,40)}...`
    }
}

console.log(str.length)
console.log(formatString(str));
