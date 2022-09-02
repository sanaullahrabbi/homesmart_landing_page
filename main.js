import "./style.css";

const navBtn = document.querySelector("#Menu");
const menuBar = document.querySelector("#MenuBar");

navBtn.addEventListener("click", () => {
  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
});
