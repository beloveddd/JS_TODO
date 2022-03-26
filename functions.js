import { LIST_OF_TASKS, ENTER_KEY_CODE, MODAL, BTN_CLASSES, MODAL_EDITOR, INVALID_DATA_CLASS, DONE_TASK_ID_CLASS, TASKS_OBJ, DISPLAY_PROPERTIES, SORT_BLOCK, CLASS_FOR_SORT_BLOCK, CHECKBOX_STATUS, FILTER_INPUT } from "./const.js";
import { Task } from "./Task.js";

export function addTaskToList(e) {
    if (e.key !== ENTER_KEY_CODE) {
        return;
    }

    const ev = e.target;
    const date = new Date();
    const taskId = Date.now();
    const task = new Task ({
        isChecked: false,
        taskId: taskId,
        creationMs: taskId,
        taskName: ev.value,
        dateCreation: getDateCreation(date),
        dateExpiration: getDateExpiration(date),
    });

    TASKS_OBJ[taskId] = task;
    ev.value = '';
    renderTask(task);   
}

export function getDateCreation(date) {
    const dataFormatTo10 = `0${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`;
    const monthFormatTo10 = `${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`;

    if (date.getMonth() < 10) {
        return (date.getDate() < 10) ? dataFormatTo10 : monthFormatTo10;
    }
        
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export function getDateExpiration(date) {
    const dataFormatTo10 = `0${date.getDate() + 1}.0${date.getMonth() + 1}.${date.getFullYear()}`;
    const monthFormatTo10 = `${date.getDate() + 1}.0${date.getMonth() + 1}.${date.getFullYear()}`;
    
    if (date.getMonth() < 10) {
        return (date.getDate() < 10) ? dataFormatTo10 : monthFormatTo10;
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
    const divTask = ev.parentNode.parentNode.firstElementChild.firstElementChild;
    const taskId = ev.parentNode.parentNode.firstElementChild.id;

    if (ev.checked) {
        setTaskAsDone(divTask, taskId);
    } else {
        cancelTaskAsDone(divTask, taskId);
    }
}

export function setTaskAsDone(divTask, taskId) {
    const taskContainer = divTask.parentNode.firstElementChild.className;

    if (taskContainer === DONE_TASK_ID_CLASS) {
        return;
    }

    const markDone = document.createElement('div');
    const clickedTask = Object.values(TASKS_OBJ).find( (elem) => elem.taskId === +taskId);
    const checkbox = divTask.parentNode.parentNode.lastElementChild.firstElementChild;
    
    markDone.id = DONE_TASK_ID_CLASS;
    markDone.innerHTML = DONE_TASK_ID_CLASS.toUpperCase();
    divTask.classList.add(DONE_TASK_ID_CLASS);
    divTask.parentNode.append(markDone);
    clickedTask.isChecked = true;
    checkbox.checked = CHECKBOX_STATUS;
}

export function cancelTaskAsDone(divTask, taskId) {
    const markDone = divTask.parentNode.querySelector(`#${DONE_TASK_ID_CLASS}`);
    const clickedTask = Object.values(TASKS_OBJ).find( (elem) => elem.taskId === +taskId);

    markDone.remove();
    divTask.classList.remove(DONE_TASK_ID_CLASS);
    clickedTask.isChecked = false;
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
    newLi.firstElementChild.id = task.taskId;
    LIST_OF_TASKS.append(newLi);
}

export function renderEdittedTask(task) {
    document.getElementById(task.taskId).parentNode.innerHTML = task.getData();
}

export function showAllTasks() {
    Object.values(TASKS_OBJ).forEach( (elem) => {
       const task = document.getElementById(elem.taskId);

       setTaskDispayProperty(task, DISPLAY_PROPERTIES.FLEX);
    });
}

export function showActiveTasks() {
    Object.values(TASKS_OBJ).forEach( (elem) => {
        const task = document.getElementById(elem.taskId);

        if (elem.isChecked) {
            setTaskDispayProperty(task, DISPLAY_PROPERTIES.NONE);
        } else {
            setTaskDispayProperty(task, DISPLAY_PROPERTIES.FLEX);
        }
    });
}

export function showCompletedTasks() {
    Object.values(TASKS_OBJ).forEach( (elem) => {
        const task = document.getElementById(elem.taskId);

        if (elem.isChecked) {
            setTaskDispayProperty(task, DISPLAY_PROPERTIES.FLEX);
        } else {
            setTaskDispayProperty(task, DISPLAY_PROPERTIES.NONE);
        }
    });
}

export function clearCompletedTasks() {
    Object.values(TASKS_OBJ).forEach( (elem) => {
        const task = document.getElementById(elem.taskId);

        if (elem.isChecked) {
            Task.deleteTask(task.parentNode, elem.taskId);
        }
    });
}

export function setTaskDispayProperty(task, property) {
    task.parentNode.style.display = property;    
}

export function showSortWindow() {
    markAsValid(FILTER_INPUT);
    FILTER_INPUT.value = '';
    SORT_BLOCK.classList.toggle(CLASS_FOR_SORT_BLOCK);
}

export function sortByProperty(property) {
    const tasksArr = Object.values(TASKS_OBJ); 

    tasksArr.sort((a, b) => a[property] > b[property] ? 1 : -1);
    Array.from(LIST_OF_TASKS.children).forEach( (elem) => elem.remove() );
    tasksArr.forEach( (elem) => {
        renderTask(elem);

        const divTask = Array.from(LIST_OF_TASKS.children).find( (element) => +element.firstElementChild.id === elem.taskId ).firstElementChild.firstElementChild;

        if (elem.isChecked) {
            setTaskAsDone(divTask, elem.taskId);
        }
    });
}

export function filterTasks() {
    const valueFromFilterInp = getValueFromFilterInput();
    const tasksArr = Object.values(TASKS_OBJ); 
    const valName = tasksArr.find( (elem) => elem.taskName === valueFromFilterInp );
    const valDate = tasksArr.find( (elem) => elem.dateCreation === valueFromFilterInp );

    FILTER_INPUT.value ? markAsValid(FILTER_INPUT) : markAsInvalid(FILTER_INPUT);
    Array.from(LIST_OF_TASKS.children).forEach( (elem) => {
        const childContainerTask = elem.firstElementChild;
        const inpName = elem.firstElementChild.firstElementChild.firstElementChild.outerText.split(' ')[1];
        const dateCr = elem.firstElementChild.firstElementChild.children[1].outerText.split(' ')[2];

        if (valName  && (valName .taskName === inpName)){
            return setTaskDispayProperty(childContainerTask, DISPLAY_PROPERTIES.FLEX);
        } 
        
        if (valDate && (valDate.dateCreation === dateCr)) {
            return setTaskDispayProperty(childContainerTask, DISPLAY_PROPERTIES.FLEX);
        }

        return setTaskDispayProperty(childContainerTask, DISPLAY_PROPERTIES.NONE);
    });
}

export function getValueFromFilterInput() {
    return FILTER_INPUT.value;
}


