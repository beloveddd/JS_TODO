import {LIST_OF_TASKS, ENTER_KEY_CODE, MODAL} from "./const.js";
import {Task} from "./Task.js";

export function addTaskToList(e) {
    if (e.key !== ENTER_KEY_CODE) {
        return;
    }

    const ev = e.target;
    const date = new Date(); 
    const task = new Task ({
        taskName: ev.value,
        dateCreation: getDateCreation(date),
        dateExpiration: getDateExpiration(date),
    });

    ev.value = '';
    renderTask(task);   
}

export function getDateCreation(date) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export function getDateExpiration(date) {
    return `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export function checkCheckbox(e) {
    const ev = e.target;

    if (ev.className !== 'checkbox') {
        return;
    }

    const divTask = ev.parentNode.parentNode.children[0].children[0];
    
    if (ev.checked) {
        setTaskAsDone(divTask);
    } else {
        cancelTaskAsDone(divTask);
    }
}

export function setTaskAsDone(divTask) {
    const markDone = document.createElement('div');

    markDone.id = "done";
    markDone.innerHTML = "DONE";
    divTask.classList.add("done");
    divTask.parentNode.append(markDone);
}

export function cancelTaskAsDone(divTask) {
    const markDone = divTask.parentNode.querySelector('#done');

    markDone.remove();
    divTask.classList.remove("done");
}

export function getValueFromInput(e) {
    const ev = e.target;

    MODAL.valfromInput = ev.value;

    if (MODAL.valfromInput) {
        markAsValid(ev);
    }
}

export function getValueForCreation(e) {
    const ev = e.target;

    MODAL.valCreation = ev.value;

    if (MODAL.valCreation) {
        markAsValid(ev);
    }
}

export function getValueForExpiration(e) {
    const ev = e.target;

    MODAL.valExpiration = ev.value;

    if (MODAL.valExpiration) {
        markAsValid(ev);
    }

    if (new Date(MODAL.valExpiration) < new Date(MODAL.valCreation)) {
        markAsInvalid(ev); 
    }
}

export function markAsInvalid() {
    Array.from(arguments).forEach( (elem) => elem.classList.add('canceled') );
}

export function markAsValid(input) {
    input.classList.remove('canceled'); 
}

export function renderTask(task) {
    const newLi = document.createElement('li');

    newLi.innerHTML = task.getData();
    LIST_OF_TASKS.append(newLi);
}



