import { clear, clearForm, showAddBtn, showAddForm, showPlaceContent, showSingleTask} from './todayDOM';
import { showCompletedTasks } from './completed.js';
export const todosArray = [];
export const todosCompletedArray = [];

function factoryTodos(title, description, date, priority, project){
    const id = crypto.randomUUID();
    return {title, description, date, priority, project, id}
}


document.querySelector('.add-task').addEventListener('click', function(){
    addTask();
})

 export function addTask(){
    clear();
    showAddForm();
    const addBtn = document.querySelector('.add-task-form');
    const inputTitle = document.getElementById('title-input');
    const inputDesc = document.getElementById('desc-input');
    const date = document.getElementById('date-input');
    const prior = document.getElementById('priority')
    const project = document.querySelector('.choose-project-container')
    addBtn.classList.add('btn-not-allowed');
    // writing listener inside input title 
    inputTitle.addEventListener('input', function(){
        if(!inputTitle.value){
            addBtn.classList.add('btn-not-allowed')
        } else if(inputTitle.value){
            addBtn.classList.remove('btn-not-allowed');  
            }
    });  
    addBtn.addEventListener('click', () => {
        if(inputTitle.value){
            addBtn.classList.add('btn-not-allowed');
            const todo = factoryTodos(inputTitle.value, inputDesc.value, date.value, prior.value, project.textContent);
            todosArray.push(todo)
            showTodosArray();
            clearInput(inputTitle, inputDesc, date, prior, project);
            addCheckpointListener();
            if(document.querySelector('.add-btn-header')){
                    return;
                } else {
                    showAddBtn();
                     document.querySelector('.add-btn-header').addEventListener('click', addTask);
                }
        }
    })
    // canceling form
    document.querySelector('.cancel-btn').addEventListener('click', () => {
        if(todosArray.length === 0){
            clearForm();
            document.querySelector('.add-task').addEventListener('click', function(){
            addTask();
        })
        } else {
            clear();
            document.querySelector('.add-btn-header').addEventListener('click', addTask);
        }
    })
   
}

export function showTodosArray(){
    document.querySelector('.added-tasks-container').innerHTML = ``;
    todosArray.forEach((todos)  => {
        showSingleTask(todos);
    }) 
}


function removeTask(idTask){
    todosArray.forEach((element, index) => {
        if (element.id == idTask){
            todosArray.splice(index, 1);
            console.log(todosArray);
            showTodosArray();
            addCheckpointListener();
            todosCompletedArray.push(element);
        }
    })
}

export function addCheckpointListener(){
    document.querySelectorAll('.task-checkpoint').forEach(checkBtn => {
                checkBtn.addEventListener('click', function(){
                    console.log(checkBtn)
                    removeTask(checkBtn.dataset.id);
                    if(todosArray.length === 0){
                        document.querySelector('.headerJs').innerHTML = 'Today';
                        clearForm();
                        addBtnListener();
                    }
                })
            })
}

function clearInput(inputTitle, inputDesc, date, prior, project){
    inputTitle.value = ``;
    inputDesc.value = ``;
    prior.value = 'priority1';
    date.value = "YYYY-MM-d";
    project.value = 'project';

}

function addBtnListener(){
    document.querySelector('.add-task').addEventListener('click', addTask);
}