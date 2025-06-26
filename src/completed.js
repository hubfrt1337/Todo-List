import { showSingleTask } from "./todayDOM";
import { todosCompletedArray } from "./todayScript";

export function showCompletedTasks() {
  todosCompletedArray.forEach((el) => {
    showSingleTask(el);
    const task = document.querySelector(".task-checkpoint");
    task.style.display = "none";
  });
}
