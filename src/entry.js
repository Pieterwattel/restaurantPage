import "./styles.css";
import "./indexcontent";
import restaurantFrontFile from "./img/restaurantFront.png";
import cucumber from "./img/cucumber.jpg";
import pie from "./img/pie.jpg";

let currentPage = "main";

const contentDiv = document.getElementById("content");
const mainBtn = document.getElementById("mainBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

//index files
const restaurantFrontImg = document.createElement("img");
restaurantFrontImg.src = restaurantFrontFile;
const indexText = document.createElement("div");

//menu files
const cucumberImg = document.createElement("img");
cucumberImg.src = cucumber;
const pieImg = document.createElement("img");
pieImg.src = pie;

mainBtn.addEventListener("click", () => displayMain());
menuBtn.addEventListener("click", () => displayMenu());
contactBtn.addEventListener("click", () => displayContact());

function displayMain() {
  //  console.log("main");
  if (currentPage == "main") {
    return;
  }
  contentDiv.innerHTML = "";
  currentPage = "main";

  contentDiv.appendChild(restaurantFrontImg);

  indexText.textContent = "THIS RESTAURANT IS GREAT!";
  contentDiv.appendChild(indexText);
}

function displayMenu() {
  //  console.log("menu");
  if (currentPage == "menu") {
    return;
  }
  content.innerHTML = "";
  currentPage = "menu";

  contentDiv.appendChild(pieImg);
  const pieInfo = document.createElement("div");
  contentDiv.appendChild(pieInfo);
  pieInfo.textContent = "tasty pie \n very cheap";

  contentDiv.appendChild(cucumberImg);
  const cucumberInfo = document.createElement("div");
  contentDiv.appendChild(cucumberInfo);
  cucumberInfo.textContent = "simple cucumber \n exceedingly expensive";
}

function displayContact() {
  //  console.log("contact");
  if (currentPage == "contact") {
    return;
  }
  content.innerHTML = "";
  currentPage = "contact";

  const contactDiv = document.createElement("div");
  contentDiv.appendChild(contactDiv);
  contactDiv.textContent = `Erik DePerik
  hoofdweg 13\r\ntel: 12343456\r\nrealmailadress@totallynotfake.com`;
}
