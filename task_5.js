let message = 'JavaScript weekly newsletter';



//version 1:
const checkForSpam = (message)=> {
    for (let el of message.split(" ")) {

        // console.log(el);
        if (el === "spam" || el === "sale") {
            return true;
        } 
    }
    return false;
}


//version 2:
// const checkForSpam = (message)=> {
//     if (message.split(" ").includes("spam") || message.split(" ").includes("sale")) {
//         return true;
//     } 
//     return false;
// }



console.log(checkForSpam(message));