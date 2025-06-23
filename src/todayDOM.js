import imgTask from './images/picture.png';
import arrow from './images/arrow-down.png';
import checkImg from './images/check.png';
import { addedTask } from './addTodo';
const addTodoString = 'Add Todo<button class="add-btn-header"><span>+</span> Add Task</button>';


const section = document.querySelector('.sectionJs');
const header = document.querySelector('.headerJs');
const addedTaskContainer = document.querySelector('.added-tasks-container')

export function clear(){
    section.innerHTML = ``;
    section.appendChild(header);
    section.appendChild(addedTaskContainer);
}
export function clearAll(){
    section.innerHTML = ``;
    section.appendChild(header);
    addedTaskContainer.innerHTML = ``;
    section.appendChild(addedTaskContainer);
}
export function clearForm(){
    section.innerHTML = ``;
    section.appendChild(header);
    section.appendChild(addedTaskContainer);
    showPlaceContent()
}

export function showPlaceContent() { 
    const placeContent = document.createElement('div');
const pictureC = document.createElement('div');
const picture = document.createElement('img');
const welcomeText = document.createElement('div');
const taskText = document.createElement('div');
const btn = document.createElement('button');
placeContent.className = 'place-content';
pictureC.className = 'pictureC';
picture.className = 'picture';
picture.src = imgTask;
welcomeText.className = 'welcome-text';
taskText.className = 'task-text';
welcomeText.textContent = 'Welcome to the Today View!';
taskText.textContent = 'See all tasks for today across all your projects';
btn.classList = 'add-task';
btn.innerHTML = `<span>+</span> Add Task`;

pictureC.appendChild(picture);
placeContent.appendChild(pictureC);
placeContent.appendChild(welcomeText);
placeContent.appendChild(taskText);
placeContent.appendChild(btn);
section.appendChild(placeContent);
}
showPlaceContent()

export function showAddForm(){
    
    
    const form = document.createElement('form');
const taskTitle = document.createElement('div');
const inputTitle = document.createElement('input');
const taskDesc = document.createElement('div');
const taskRow1 = document.createElement('div')
const inputDate = document.createElement('input')
const select = document.createElement('select')
const option1 = document.createElement('option');
const option2 = document.createElement('option');
const option3 = document.createElement('option');
const taskRow2 = document.createElement('div');
const chooseProC = document.createElement('div');
const imgArrow = document.createElement('img')
taskDesc.className = 'task-description'
inputTitle.type = 'text';
inputTitle.id = 'title-input';
inputTitle.name = 'title';
inputTitle.placeholder = 'Title: Go shopping';
inputTitle.required = true;
form.className = 'task-container';
taskTitle.className = 'task-title';
taskDesc.innerHTML =   `<input type="text" name="desc" id="desc-input" placeholder="Description: Buy groceries for lasagne"></input>`;
taskRow1.className = 'task-row1'
inputDate.type = 'date';
inputDate.id = 'date-input';
select.id = 'priority';
option1.value = 'priority1';
option1.textContent = 'Priority 1';
option2.value = 'priority2';
option2.textContent = 'Priority 2';
option3.value = 'priority3';
option3.textContent = 'Priority 3';
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
taskRow2.className = 'task-row2';
chooseProC.className = 'choose-project-container';
imgArrow.src = arrow;
imgArrow.id = 'img-arrow';
chooseProC.textContent = `Project`;
chooseProC.appendChild(imgArrow);
const btnCancelAddC = document.createElement('div');
btnCancelAddC.className = 'btn-cancel-add-flex'
const btnAdd = document.createElement('button');
const btnCancel = document.createElement('button');
btnCancel.className = 'cancel-btn';
btnCancel.type = 'button';
btnCancel.textContent = 'Cancel';
btnAdd.className = 'add-task-form';
btnAdd.type = 'button';
//btnAdd.disabled = true;
btnAdd.textContent = 'Add Task';
btnCancelAddC.appendChild(btnCancel);
btnCancelAddC.appendChild(btnAdd);
taskTitle.appendChild(inputTitle);

form.appendChild(taskTitle);
form.appendChild(taskDesc);
form.appendChild(taskRow1);
taskRow1.appendChild(inputDate);
taskRow1.appendChild(select);
taskRow2.appendChild(chooseProC);
taskRow2.appendChild(btnCancelAddC);
form.appendChild(taskRow2);
section.appendChild(form);
}


export function showSingleTask(todo){
    const singleTask = document.createElement('article');
singleTask.className = 'single-task';

const topFlex = document.createElement('div');
topFlex.className = 'flex-task-top';
const tytul = document.createElement('div');
tytul.className = 'tytul'
const prior = document.createElement('div');
tytul.textContent = todo.title;
prior.textContent = todo.priority;
const flexTask = document.createElement('div');
flexTask.className = 'flex-task';
const opis = document.createElement('div');
const checkpoint = document.createElement('div');
opis.className = 'opis';
opis.textContent = todo.description;
checkpoint.className = 'task-checkpoint';
const check = document.createElement('img');
check.src = checkImg;
check.className = 'check-green';
checkpoint.appendChild(check);
checkpoint.dataset.id = todo.id;
if(header.innerHTML === 'Add Todo' || header.innerHTML === addTodoString){
    checkpoint.style.display = 'none';
}
if(header.innerHTML === 'Completed Tasks!'){
    checkpoint.style.display = 'none';
}
const dateContainer = document.createElement('div');
dateContainer.textContent = todo.date;
topFlex.appendChild(tytul);
topFlex.appendChild(dateContainer);
topFlex.appendChild(prior);
singleTask.appendChild(topFlex);

flexTask.appendChild(opis);
flexTask.appendChild(checkpoint);
singleTask.appendChild(flexTask);
addedTaskContainer.appendChild(singleTask);
const proj = todo.project;
}

export function showAddBtn(){
    const btn = document.createElement('button');
    btn.classList = 'add-btn-header';
    btn.innerHTML = `<span>+</span> Add Task`;
    header.appendChild(btn);
    
}

export function showMessage(){
    const btnMsg = document.createElement('div');
    btnMsg.className = "display-msg";
    btnMsg.innerText = "Task Added!";
    const formContainer = document.querySelector('.task-container');
    formContainer.appendChild(btnMsg)

    document.querySelector('.add-task-form').addEventListener('click', function(){
        btnMsg.style.display = "block";
        setTimeout(() => {
            btnMsg.style.opacity = '0';
            
        }, 300);
        setTimeout(() => {
            btnMsg.style.display = 'none'
        }, 1300);
    })
}


