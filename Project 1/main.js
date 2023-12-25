let istatus = document.querySelector("h5");

let addFriend = document.querySelector("#add");
let check = 0;

addFriend.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    check = 1;
  } else {
    istatus.innerHTML = "Strenger";
    istatus.style.color = "red";
    check = 0;
  }
});
