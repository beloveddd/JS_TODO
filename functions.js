import { LIST_OF_TASKS, ENTER_KEY_CODE, MODAL, BTN_CLASSES, MODAL_EDITOR, INVALID_DATA_CLASS, DONE_TASK_ID_CLASS } from "./const.js";
import { Task } from "./Task.js";

export function addTaskToList(e) {
    if (e.key !== ENTER_KEY_CODE) {
        return;
    }

    const ev = e.target;
    const date = new Date(); 
    const task = new Task ({
        taskId: new Date(),
        taskName: ev.value,
        dateCreation: getDateCreation(date),
        dateExpiration: getDateExpiration(date),
    });

    ev.value = '';
    renderTask(task);   
}

export function getDateCreation(date) {
    if (date.getMonth() < 10) {
        return `${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`;
    }

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export function getDateExpiration(date) {
    if (date.getMonth() < 10) {
        return `${date.getDate() + 1}.0${date.getMonth() + 1}.${date.getFullYear()}`;
    }

    return `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export function defineTarget(e) {
    const ev = e.target;
    const targetClass = ev.className;

    switch (true) {
        case targetClass.includes(BTN_CLASSES.CHECKBOX):
            checkCheckbox(ev);
            break;
        case targetClass.includes(BTN_CLASSES.CROSSROW):
            const liTask = ev.parentNode.parentNode;
            const taskId = liTask.firstElementChild.id;

            Task.deleteTask(liTask, taskId);
            break;
        case targetClass.includes(BTN_CLASSES.CHANGE):
            const taskLi = ev.parentNode.parentNode;

            MODAL_EDITOR.chosenTask = taskLi;
            changeTaskData(taskLi);
            break;
    }
}

export function changeTaskData(taskLi) {
    const taskName = taskLi.querySelector('#taskInp').outerText;
    const dateCreation = taskLi.querySelector('#dateCreation').outerText;
    const dateExpiration = taskLi.querySelector('#dateExpiration').outerText;
    const objOfDataTask = {
        taskName: taskName,
        dateCreation: dateCreation,
        dateExpiration: dateExpiration,
    }
    
    MODAL_EDITOR.openModalEditorWindow(parseDataFromTask(objOfDataTask));
};

export function parseDataFromTask(objOfDataTask) {
    const valueTaskName = objOfDataTask.taskName.split(' ')[1];
    const valueCreationDate = objOfDataTask.dateCreation.split(' ')[2].split('.');
    const valueExpirationDate = objOfDataTask.dateExpiration.split(' ')[2].split('.');

    return {
        taskName: valueTaskName,
        dateCreation: {
            year: valueCreationDate[2],
            month: valueCreationDate[1],
            date: valueCreationDate[0],
        },
        dateExpiration: {
            year: valueExpirationDate[2],
            month: valueExpirationDate[1],
            date: valueExpirationDate[0],
        }
    }
}

export function checkCheckbox(ev) {
    const divTask = ev.parentNode.parentNode.children[0].children[0];
    
    if (ev.checked) {
        setTaskAsDone(divTask);
    } else {
        cancelTaskAsDone(divTask);
    }
}

export function setTaskAsDone(divTask) {
    const markDone = document.createElement('div');

    markDone.id = DONE_TASK_ID_CLASS;
    markDone.innerHTML = DONE_TASK_ID_CLASS.toUpperCase();
    divTask.classList.add(DONE_TASK_ID_CLASS);
    divTask.parentNode.append(markDone);
}

export function cancelTaskAsDone(divTask) {
    const markDone = divTask.parentNode.querySelector('#done');

    markDone.remove();
    divTask.classList.remove(DONE_TASK_ID_CLASS);
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
}

export function markAsInvalid() {
    Array.from(arguments).forEach( (elem) => elem.classList.add(INVALID_DATA_CLASS) );
}

export function markAsValid(input) {
    input.classList.remove(INVALID_DATA_CLASS); 
}

export function renderTask(task) {
    const newLi = document.createElement('li');

    newLi.innerHTML = task.getData();
    LIST_OF_TASKS.append(newLi);
}





