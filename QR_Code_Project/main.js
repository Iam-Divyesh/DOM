let imgBox = document.querySelector("#imgBox");
let qrImg = document.querySelector("#qrImg");
let qrText = document.querySelector("#qrText");
let btn = document.querySelector("button");


btn.addEventListener("click", function generateQR(){
    if(qrText.value.trim() !== ""){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        },1000);
    }
});











// btn.addEventListener("click", generateQR);

// btn.addEventListener("keypress", function(event){
//     if(event.key === "Enter"){
//         generateQR();
//     }
// }

// function generateQR(){
//     if(qrText.value.trim() !== ""){
//         qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
//         imgBox.classList.add("show-img");
//     }
//     else{
//         qrText.classList.add("error");
//         setTimeout(() => {
//             qrText.classList.remove("error");
//         },1000);
//     }
// };