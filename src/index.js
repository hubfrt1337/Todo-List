import './styles/style.css';
import './styles/main.css';
import './imagesScript.js';
import './todayDOM.js'
import './todayScript.js'
import { clear, clearForm, showAddBtn, showAddForm, showPlaceContent } from './todayDOM.js';
import { showTodosArray , addCheckpointListener, todosArray, addTask} from './todayScript.js';
import { showCompletedTasks } from './completed.js';


document.querySelectorAll('.row-container').forEach(option => {
    option.addEventListener('click', () => {
        if(option.classList.contains('addJs')){
            clear();
            showAddForm()
        }else if(option.classList.contains('todayJs')){
            clear()
            showTodosArray();
            addCheckpointListener();
            if(todosArray.length == 0){
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
            
        } else if(option.classList.contains('completedJs')){
            clear();
            document.querySelector('.headerJs').innerHTML = `Completed Tasks!`;
            showCompletedTasks();
        }
    })
})


