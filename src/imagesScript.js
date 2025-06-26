import img1 from "./images/menu.png";
import img2 from "./images/addition.png";
import img3 from "./images/today.png";
import img4 from "./images/upcoming.png";
import img5 from "./images/done.png";
import img6 from "./images/plus.png";
import img7 from "./images/next.png";

// top menu asside img and middle asside images
const menu = document.querySelector(".menuContainerJs");
const add = document.querySelector(".addContainerJs");
const today = document.querySelector(".todayContainerJs");
const upcoming = document.querySelector(".upcomingContainerJs");
const completed = document.querySelector(".completedContainerJs");

const imgMenu = document.createElement("img");
const imgAdd = document.createElement("img");
const imgToday = document.createElement("img");
const imgUpcoming = document.createElement("img");
const imgCompleted = document.createElement("img");

imgMenu.src = img1;
imgAdd.src = img2;
imgToday.src = img3;
imgUpcoming.src = img4;
imgCompleted.src = img5;
menu.appendChild(imgMenu);
add.appendChild(imgAdd);
today.appendChild(imgToday);
upcoming.appendChild(imgUpcoming);
completed.appendChild(imgCompleted);

// bottom aside
const plus = document.querySelector(".plusIconJs");
const arrow = document.querySelector(".arrowIconJs");

const imgPlus = document.createElement("img");
const imgArrow = document.createElement("img");
imgPlus.src = img6;
imgArrow.src = img7;
plus.appendChild(imgPlus);
arrow.appendChild(imgArrow);
