const modal = document.querySelector('#containerModal');
modal.style.display = 'none';

const amountOfTasks = 4;

const container = document.querySelector('.container');
const listOfTasks = document.createElement('ul');

// for (let i = 0; i < amountOfTasks; i++) {
//     let task = document.createElement('li');
//     task.innerHTML = `Task ${i+1}`;
//     listOfTasks.append(task);
// }

container.append(listOfTasks);

const containerOfInput = document.createElement('div');
containerOfInput.id = 'containerOfInput';

const input = document.createElement('input');
input.placeholder = 'Your task'
input.id = 'addedTask';
input.type = 'text';

const label = document.createElement('label');
label.for = 'addedTask';
label.innerHTML = 'Add your task below';

const btnPlus = document.createElement('button');
btnPlus.id = 'btnPlus';
btnPlus.innerHTML = '+';

container.append(label);
containerOfInput.append(input);
containerOfInput.append(btnPlus);
container.append(containerOfInput);

input.addEventListener('keydown', addTaskToList);
btnPlus.addEventListener('click', openModalWindow);

function addTaskToList(e) {
    ev = e.target;

    if (e.key !== "Enter") {
        return;
    }
    
    let task = document.createElement('li');
    let date = new Date();
    task.innerHTML = `<div>Task: ${ev.value}</div>
    <div>Creation Date: ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}</div>
    <div>Expiration Date: ${date.getDate()+1}.${date.getMonth()+1}.${date.getFullYear()}</div>`;
    
    listOfTasks.append(task);
    ev.value = '';

}

let inputModal = document.querySelector('#inputModal');
let creationDateModal = document.querySelector('#creationDateModal');
let expirationDateModal = document.querySelector('#expirationDateModal');


function openModalWindow() {

    inputModal.value = '';
    creationDateModal.value = '';
    expirationDateModal.value = '';

    modal.style.display = 'block';
    modal.classList = 'modal-overlay';
}

const btnClose = document.querySelector('#btnClose');
const btnAdd = document.querySelector('#btnAdd');
const btnCancel = document.querySelector('#btnCancel');

btnClose.addEventListener('click', closeModalWindow);
btnCancel.addEventListener('click', closeModalWindow);
btnAdd.addEventListener('click', saveValuesFromModal);

function closeModalWindow() {
    modal.style.display = 'none';
    modal.classList.delete = 'modal-overlay';
}


let valfromInput;
let valCreation;
let valExpiration;

inputModal.addEventListener('blur', (e) => {
    ev = e.target; 
    valfromInput = ev.value;
    });

creationDateModal.addEventListener('blur', (e) => {
    ev = e.target; 
    valCreation = ev.value;
    });
    
expirationDateModal.addEventListener('blur', (e) => {
    ev = e.target; 
    valExpiration = ev.value;
    });

function saveValuesFromModal() {

    let task = document.createElement('li');
    let dateCr = new Date(valCreation);
    let dateExp = new Date(valExpiration);
    task.innerHTML = `<div>Task: ${valfromInput}</div>
    <div>Creation Date: ${dateCr.getDate()}.${dateCr.getMonth()+1}.${dateCr.getFullYear()}</div>
    <div>Expiration Date: ${dateExp.getDate()}.${dateExp.getMonth()+1}.${dateExp.getFullYear()}</div>`;
    
    listOfTasks.append(task);
    closeModalWindow();

    
}

