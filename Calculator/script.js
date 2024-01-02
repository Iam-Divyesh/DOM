let btns = document.querySelectorAll("button");
let input = document.querySelector("input");


function appendSymbol(symbol){
    input.value += symbol;
}

function clearDisplay(){
    input.value = '';
}

function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch{
        input.value = "Error";
    }
}