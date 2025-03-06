import "./styles.css";
import "./indexcontent";

const mainBtn = document.getElementById("mainBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

mainBtn.addEventListener("click", () => displayMain());
menuBtn.addEventListener("click", () => displayMenu());
contactBtn.addEventListener("click", () => displayContact());

function displayMain() {
  console.log("main");
}

function displayMenu() {
  console.log("menu");
}

function displayContact() {
  console.log("contact");
}
