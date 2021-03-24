let inputdata = document.querySelector("#dataEntry");

//on keyword input code
document.addEventListener("keydown",(event)=> {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 97 && event.keyCode <= 111) || event.keyCode === 8 || event.keyCode === 46) {
        document.querySelector("#dataEntry").focus();
    } 
    try {
        if (event.key === "Enter") {
            let zadanie = inputdata.value;
            // console.log(eval(zadanie));
            inputdata.value = eval(zadanie)
        }   
        if (event.key === "Delete") {
            inputdata.value = "";
        }
    } catch (err) {
        inputdata.value = "wrong Input"
    }
})
//on button input realize
document.querySelector(".buttonsCalculator").addEventListener("click", function(e) {
    try {
        if (event.key === "Enter" ){
            let zadanie = inputdata.value;
            inputdata.value = eval(zadanie)
        }
        if (e.target.classList.contains("btn_value")) {
            // console.log(e.target.innerText);
            inputdata.value += e.target.innerText;
        }
    } catch (err) {
        inputdata.value = "wrong Input"
    }
})


document.querySelector(".buttons_operations").addEventListener("click", function(e) {
    if (e.target.classList.contains("btn_operation")) {
        // console.log(e.target.innerText);
        inputdata.value += e.target.innerText;
    }
})

//get result of operation
document.querySelector(".btn_result").onclick = ()=> {
    // console.log(inputdata.value)
    try {
        if (inputdata.value === "") {

        } else {
            let zadanie = inputdata.value;
            inputdata.value = eval(zadanie)
        }
    } catch(err) {
        inputdata.value = "Wrong Input";
    }
}

//backspace
document.querySelector(".btn_backspace").onclick = ()=> {
    inputdata.value = inputdata.value.substring(0,inputdata.value.length-1);
}
//delete
document.querySelector(".btn_delete").onclick = ()=> {
    inputdata.value = "";
} 

