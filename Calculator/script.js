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

function toggleKey(){
    // let flag = 0; 
    // if(flag == 0){
    //     input.value.unshift("-");
    //     flag = 1;
    // }
    // else if(flag == 1){
    //     input.value.shift();
    //     flag = 0;
    // }

    if (input.value.charAt(0) !== '-') {
        input.value = '-' + input.value;
    } else {
        input.value = input.value.substring(1);
    }
}