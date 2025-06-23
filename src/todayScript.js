import { clear, clearForm, showAddBtn, showAddForm, showMessage, showPlaceContent, showSingleTask} from './todayDOM';
import { showCompletedTasks } from './completed.js';
const { isBefore, isToday } = require("date-fns");

export let todosArray = []//JSON.parse(localStorage.getItem("todosArray"));
export let todayTodosArray = []//JSON.parse(localStorage.getItem("todayArray"));
export let todosCompletedArray = [] //JSON.parse(localStorage.getItem("completedArray"));


if(localStorage.getItem("completedArray")){
 todosCompletedArray = JSON.parse(localStorage.getItem('completedArray'));
}
if(localStorage.getItem("todosArray")){
    todosArray = JSON.parse(localStorage.getItem("todosArray"));
}
if(localStorage.getItem("todayArray")){
    todayTodosArray = JSON.parse(localStorage.getItem("todayArray"));
}

function factoryTodos(title, description, date, priority, project){
    const id = crypto.randomUUID();
    return {title, description, date, priority, project, id}
}
 const addTodoString = 'Add Todo<button class="add-btn-header"><span>+</span> Add Task</button>';
 const todayTodoString = 'Today<button class="add-btn-header"><span>+</span> Add Task</button>';
 const upcomingTodoString = "Upcoming Tasks";
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
            addBtn.classList.add('btn-not-allowed');
        } else if(inputTitle.value){
            addBtn.classList.remove('btn-not-allowed');  
            showMessage();
            }
    });  
    addBtn.addEventListener('click', () => {
        const header = document.querySelector('.headerJs').innerHTML;
        if(inputTitle.value){
            addBtn.classList.add('btn-not-allowed');
            const todo = factoryTodos(inputTitle.value, inputDesc.value, date.value, prior.value, project.textContent);
            if(header == 'Add Todo' || header == addTodoString){
                todosArray.push(todo);
                showSingleTask(todo);
            } else if(isToday(date.value) || isBefore(date.value, new Date())){
                todayTodosArray.push(todo);
                showTodayTodosArray();
                addCheckpointListener();
            }else {
                todosArray.push(todo)
            }
            addToLocalStorage();
            clearInput(inputTitle, inputDesc, date, prior, project);
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
        const header = document.querySelector('.headerJs').textContent;
        if(todosArray.length === 0 || todayTodosArray.length === 0){
            if(header == 'Add Todo'){
                clear()
                showAddBtn()
                document.querySelector('.add-btn-header').addEventListener('click', addTask);
            } else {
                clearForm();
            document.querySelector('.add-task').addEventListener('click', function(){
            addTask();
        })}
        } else {
            if(header == 'Add Todo'){
                showAddBtn();
            }
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
export function showTodayTodosArray(){
    document.querySelector('.added-tasks-container').innerHTML = ``;
    todayTodosArray.forEach((todos)  => {
        showSingleTask(todos);
    }) 
}
export function showBoth(){
    document.querySelector('.added-tasks-container').innerHTML = ``;
    todayTodosArray.forEach((todos)  => {
        showSingleTask(todos);
    }) 
    todosArray.forEach((todos)  => {
        showSingleTask(todos);
    }) 

}

function removeTask(idTask){
    todayTodosArray.forEach((element, index) => {
        if (element.id == idTask){
            todayTodosArray.splice(index, 1);
            showTodayTodosArray();
            addCheckpointListener();
            todosCompletedArray.push(element);
            console.log('opcja 1');
        }
    })
    todosArray.forEach((element, index) => {
        if (element.id == idTask){
            todosArray.splice(index, 1);
            showTodosArray();
            addCheckpointListener();
            todosCompletedArray.push(element);
            console.log('opccja 2')
        }
    })
}

export function addCheckpointListener(){
    document.querySelectorAll('.task-checkpoint').forEach(checkBtn => {
                checkBtn.addEventListener('click', function(){
                    removeTask(checkBtn.dataset.id);
                    const header = document.querySelector('.headerJs').innerHTML
                        if(todayTodosArray.length === 0 ){
                            if(header == 'Today' || header == todayTodoString){
                                clearForm();
                                addBtnListener()
                            } else{
                                clear();
                            } 
                        }
                    if(header == 'Upcoming Tasks' || header == upcomingTodoString){
                        showBoth();
                    }
                    addToLocalStorage()
                    addCheckpointListener();
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

function addToLocalStorage(){
    localStorage.setItem('todayArray', JSON.stringify(todayTodosArray));
    localStorage.setItem('todosArray', JSON.stringify(todosArray));
    localStorage.setItem('completedArray', JSON.stringify(todosCompletedArray));
}
