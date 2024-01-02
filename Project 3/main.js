let main = document.querySelector("#main");
let cusr = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dets) {
  cusr.style.left = dets.x + "px";
  cusr.style.top = dets.y + "px";
});
