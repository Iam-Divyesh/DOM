let min = document.getElementById("min");
let max = document.getElementById("max");
let generate = document.querySelector(".generate");
let guess;
let minVal;
let maxVal;

generate.addEventListener("click", function generateNumber() {
    minVal = parseInt(min.value);
    maxVal = parseInt(max.value);
    
    guess = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    console.log(guess);
});

let ans = document.querySelector("#ans");
let check = document.querySelector(".check");
let greeting = document.querySelector(".greeting");

check.addEventListener("click", function checkGuess(){
    let ansVal = parseInt(ans.value);

    if(ansVal > maxVal){
        greeting.classList.add("show")
        greeting.innerHTML = "You're Out of Range"
        ans.value = "";
    }else if(ansVal < guess){
        greeting.classList.add("show")
        greeting.innerHTML = "Entered value is Small"
        ans.value = "";
    }
    else if(ansVal > guess){
        greeting.classList.add("show")
        greeting.innerHTML = "Entered value is Big"
        ans.value = "";
    }else if(ansVal === guess){
        greeting.classList.add("show")
        greeting.innerHTML = "Congrats...! <br> Your guess is right"
        return;
    }
    else{
        greeting.classList.add("show")
        greeting.innerHTML = "Value is Empty"
        ans.value = "";
    }
    setTimeout(function(){
        greeting.classList.remove("show")
        greeting.style.transition = "opacity 0.5s ease-in-out"
        greeting.innerHTML=""
    },3000)
})
