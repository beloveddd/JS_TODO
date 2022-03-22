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

    const liTask = ev.parentNode.parentNode;
    
    if (ev.checked) {
        setTaskAsDone(liTask);
    } else {
        cancelTaskAsDone(liTask);
    }
}

export function setTaskAsDone(liTask) {
    const markDone = document.createElement('div');

    markDone.id = "done";
    markDone.innerHTML = "DONE";
    liTask.style.textDecoration = 'line-through';
    liTask.style.color = 'rgba(0, 0, 0, 0.5)';
    liTask.children[0].append(markDone);
}

export function cancelTaskAsDone(liTask) {
    const markDone = liTask.querySelector('#done');

    markDone.remove();
    liTask.style.textDecoration = 'none';
    liTask.style.color = 'rgba(0, 0, 0, 1)'; 
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




