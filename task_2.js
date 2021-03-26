//function on return length obj;
const countProps = function(obj) {
    let arrKeys = Object.keys(obj);

    return arrKeys.length;
}

// check function
console.log(countProps({}));
// console.log(countProps({name:"egor",surname:"titushka"}));
// console.log(countProps({age:21,sex:"M",isMarried:false,countChild:2}));

