import "./styles/style.css";
import "./styles/main.css";
import "./imagesScript.js";
import "./todayDOM.js";
import "./todayScript.js";
import img from "./images/menu.png";
import {
  clear,
  clearForm,
  clearAll,
  showAddBtn,
  showAddForm,
  showPlaceContent,
  showMessage,
} from "./todayDOM.js";
import {
  showTodosArray,
  addCheckpointListener,
  todosArray,
  addTask,
  showTodayTodosArray,
  todayTodosArray,
  showBoth,
} from "./todayScript.js";
import { showCompletedTasks } from "./completed.js";
const { isBefore, isToday } = require("date-fns");

const header = document.querySelector(".headerJs");

document.querySelectorAll(".row-container").forEach((option) => {
  option.addEventListener("click", () => {
    if (option.classList.contains("addJs")) {
      header.innerHTML = "Add Todo";
      clearAll();
      showAddForm();
      addTask();
    } else if (option.classList.contains("todayJs")) {
      header.innerHTML = "Today";
      clear();
      showTodayTodosArray();
      addCheckpointListener();
      if (todayTodosArray.length == 0) {
        showPlaceContent();
        document.querySelector(".add-task").addEventListener("click", addTask);
      } else {
        if (document.querySelector(".add-btn-header")) {
          return;
        } else {
          showAddBtn();
          document
            .querySelector(".add-btn-header")
            .addEventListener("click", addTask);
        }
      }
    } else if (option.classList.contains("upcomingJs")) {
      clear();
      header.textContent = "Upcoming Tasks";
      showBoth();
      addCheckpointListener();
    } else if (option.classList.contains("completedJs")) {
      clearAll();
      header.innerHTML = `Completed Tasks!`;
      showCompletedTasks();
    }
    document.querySelector(".side").classList.toggle("side-show");
  });
});

document.querySelector(".icon-absolute").addEventListener("click", function () {
  document.querySelector(".side").classList.toggle("side-show");
});
document.querySelector(".icon-max").addEventListener("click", function () {
  const iconMax = document.querySelector(".icon-max");
  const side = document.querySelector(".side");
  side.classList.toggle("max-side-show");
  if (side.classList.contains("max-side-show")) {
    const main = document.querySelector("main");
    main.classList.add("one-fr");
    iconMax.classList.add("icon-to-left");
  } else {
    const main = document.querySelector("main");
    main.classList.remove("one-fr");
    iconMax.classList.remove("icon-to-left");
  }
});

document.querySelector(".sectionJs").addEventListener("click", () => {
  const side = document.querySelector(".side");
  if (side.classList.contains("side-show")) {
    side.classList.remove("side-show");
  }
});
