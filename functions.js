function addTaskToList(e) {
    const ev = e.target;

    if (e.key !== ENTER_KEY_CODE) {
        return;
    }
    const date = new Date(); 

    const task = new Task ({
        taskName: ev.value,
        dateCreation: getDateCreation(date),
        dateExpiration: getDateExpiration(date),
    });
    const newLi = document.createElement('li');

    newLi.innerHTML = task.getData();
    LIST_OF_TASKS.append(newLi);
    ev.value = '';
    setListenersToCheckbox();
}

function getDateCreation(date) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

function getDateExpiration(date) {
    return `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

function setListenersToCheckbox() {
    const checkbox = document.querySelectorAll('.checkbox');

    if (!checkbox.length) {
        Array.from(checkbox).forEach( (elem) => {
            elem.addEventListener('click', checkCheckbox);
        } );
    }
}

function checkCheckbox(e) {
    const ev = e.target;

    const liTask = ev.parentNode.parentNode;

    if (ev.checked) {
        liTask.style.textDecoration = 'line-through';
        liTask.style.color = 'rgba(0, 0, 0, 0.5)';
        const markDone = document.createElement('div');

        markDone.id = "done";
        markDone.innerHTML = "DONE";
        liTask.children[0].append(markDone);
    } else {
        liTask.style.textDecoration = 'none';
        liTask.style.color = 'rgba(0, 0, 0, 1)'; 
        const markDone = liTask.querySelector('#done');

        markDone.remove();
    }
}

function getValueFromInput(e) {
    const ev = e.target;

    MODAL.valfromInput = ev.value;
}

function getValueForCreation(e) {
    const ev = e.target;

    MODAL.valCreation = ev.value;
}

function getValueForExpiration(e) {
    const ev = e.target;

    MODAL.valExpiration = ev.value;
}
