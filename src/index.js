import './styles/style.css';
import './styles/main.css';
import './imagesScript.js';
import './todayDOM.js'
import './todayScript.js'
import { clear, clearForm, clearAll, showAddBtn, showAddForm, showPlaceContent, showMessage } from './todayDOM.js';
import { showTodosArray , addCheckpointListener, todosArray, addTask, showTodayTodosArray, todayTodosArray, showBoth} from './todayScript.js';
import { showCompletedTasks } from './completed.js';
const { isBefore, isToday } = require("date-fns");



const header = document.querySelector('.headerJs');

document.querySelectorAll('.row-container').forEach(option => {
    option.addEventListener('click', () => {
        if(option.classList.contains('addJs')){
            header.innerHTML = 'Add Todo';
            clearAll();
            showAddForm();
            addTask();
            
            
        }else if(option.classList.contains('todayJs')){
            clear()
            showTodayTodosArray();
            addCheckpointListener();
            header.innerHTML = 'Today';
            if(todayTodosArray.length == 0){
                showPlaceContent();
                document.querySelector('.add-task').addEventListener('click', addTask);
            } else {
                if(document.querySelector('.add-btn-header')){
                    return
                } else {
                    showAddBtn();
                     document.querySelector('.add-btn-header').addEventListener('click', addTask);
                }
               
            }
        } else if(option.classList.contains('upcomingJs')){
            clear();
            header.textContent = 'Upcoming Tasks';
            showBoth();
            addCheckpointListener();
        } else if(option.classList.contains('completedJs')){
            clearAll();
            header.innerHTML = `Completed Tasks!`;
            showCompletedTasks();
        }
    })
})


    

