let rowArr = new Array(3);
let countClick = 0;


//creating a playing field
function createGame() {
    //create game arr
    for (let i =0;i<rowArr.length;i++) {
        rowArr[i] = new Array(3);
    }
    //creating a playing field
    let html = "";
    for(let i=0;i<rowArr.length;i++) {
        for (let j=0;j<rowArr[i].length;j++) {
            rowArr[i][j] = "";
            html += `<button value="${i +" "+ j}"  class="btn_click">${rowArr[i][j]}</button>`
            document.querySelector("#block_game").innerHTML = html;
        }
    }
}


function Game () {
    document.querySelector("#block_game").addEventListener("click",function(e) {
        if (e.target.classList.contains("btn_click")) {
            if (countClick % 2 === 0) {
                    let position = e.target.value;
                let arr = position.split(" ");
                rowArr[arr[0]][arr[1]] = "0"

                if (e.target.innerText === "") {
                    countClick++;
                    e.target.innerText = "0";
                } else {
                    alert("you already input on button");
                }

                check("0")
            } else if (countClick % 2 !== 0) {
                let position = e.target.value;
                    let arr = position.split(" ");
                    rowArr[arr[0]][arr[1]] = "X"
                    // console.log(rowArr)
        
                    if (e.target.innerText === "") {
                        countClick++;
                        e.target.innerText = "X";
                    } else {
                        alert("you already input on button");
                    }

                    check("X");
            }
        } 
    })  
}

function check(val) {
    let count =0;
    for (let i=0;i<rowArr.length;i++) {
        for (let j=0;j<rowArr[i].length;j++) {
            if (rowArr[0][j] === val || rowArr[1][j] === val || rowArr[i][0] === val || rowArr[2][j] === val || rowArr[i][1] === val || rowArr[i][2] === val) {
                count++;  
                // console.log(count);
                if (count/3 == 3) {
                    return alert(`You win ${val}`);
                } 
             
            } else if (i==j && rowArr[i][j] === val) {
                count++;  

                if (count/3 == 3) {
                    return alert(`You win ${val}`);
                }
            }
        }
    }
}


document.querySelector("#btn_startNewGame").onclick = ()=> {
    createGame();
    countClick = 0
}

createGame();
Game();



















//Rework Coming Soon:
// function clickPlayer() {
//     document.querySelector("#block_game").addEventListener("click",function(e) {
//         if (e.target.classList.contains("btn_click")) {
//             let position = e.target.value;
//             // console.log(e.target.value);
//             let arr = position.split(" ");
//             // console.log(e.target.innerText);
//             rowArr[arr[0]][arr[1]] = "0"
//             // console.log(rowArr)
//             // e.target.innerText === "" ? e.target.innerText = "0" : alert("you already input on button"); 

//             if (e.target.innerText === "") {
//                 e.target.innerText = "0";
//                 countClick++;
//             } else {
//                 alert("you already input on button");
//             }
//             // console.log(rowArr);
//         } 
        
//         // console.log(countClick);
//     })  
// }


// function clickBot() {
//     document.querySelector("#block_game").addEventListener("click",function(e) {
//         if (e.target.classList.contains("btn_click")) {
//             let position = e.target.value;
//             // console.log(e.target.value);
//             let arr = position.split(" ");
//             // console.log(e.target.innerText);
//             rowArr[arr[0]][arr[1]] = "Х"
//             console.log(rowArr)
//             e.target.innerText === "" ? e.target.innerText = "Х" : alert("you already input on button"); 

//             if (e.target.innerText === "") {
//                 e.target.innerText = "X";
//                 countClick++;
//             } else {
//                 alert("you already input on button");
//             }

//             // console.log(rowArr);
//         }
//         // console.log(countClick);
//         // countClick++;
//         // console.log(countClick);
//     })
   
// }


