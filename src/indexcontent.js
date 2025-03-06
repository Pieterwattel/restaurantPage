const indexContent = document.getElementById("content");
const restaurantFrontImg = document.createElement("img");
const indexText = document.createElement("div");

import restaurantFrontFile from "./img/restaurantFront.png";
restaurantFrontImg.src = restaurantFrontFile;
indexContent.appendChild(restaurantFrontImg);

indexText.textContent = "THIS RESTAURANT IS GREAT!";
indexContent.appendChild(indexText);
