let rowArr = new Array(3);
let countClick = 0;
let countWins_0 = 0;
let countWins_X = 0;



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

    countClick = 0
}


//main logic
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

                    if (check("0")) {
                        createGame();
                        document.querySelector("#wins_0").innerHTML = ++countWins_0;
                    }
                } else {
                    alert("you already input on button");
                }

                
            } else if (countClick % 2 !== 0) {
                let position = e.target.value;
                    let arr = position.split(" ");
                    rowArr[arr[0]][arr[1]] = "X"
                    console.log(rowArr)
        
                    if (e.target.innerText === "") {
                        countClick++;
                        e.target.innerText = "X";
                    } else {
                        alert("you already input on button");
                    }

                    if (check("X")) {
                        createGame();
                        document.querySelector("#wins_X").innerHTML = ++countWins_X;
                    }
            }
        } 
    })  
}


function check(val) {
    if ((rowArr[0][0] == val && rowArr[0][1] == val && rowArr[0][2] == val) 
    || (rowArr[1][0] == val && rowArr[1][1] == val && rowArr[1][2] == val) 
    || (rowArr[2][0] == val && rowArr[2][1] == val && rowArr[2][2] == val)

    || (rowArr[0][0] == val && rowArr[1][0] == val && rowArr[2][0] == val)
    || (rowArr[0][1] == val && rowArr[1][1] == val && rowArr[2][1] == val)
    || (rowArr[0][2] == val && rowArr[1][2] == val && rowArr[2][2] == val)

    || (rowArr[0][0] == val && rowArr[1][1] == val && rowArr[2][2] == val)
    || (rowArr[0][2] == val && rowArr[1][1] == val && rowArr[2][0] == val)) {
        return true;
    } 
}




document.querySelector("#btn_startNewGame").onclick = ()=> {
    createGame();
    countClick = 0
    countWins_0 = 0;
    countWins_X = 0;
    document.querySelector("#wins_0").innerHTML = 0;
    document.querySelector("#wins_X").innerHTML = 0;
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


