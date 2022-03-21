function addTaskToList(e) {
    ev = e.target;

    if (e.key !== "Enter") {
        return;
    }

    let date = new Date(); 

    let task = new Task ({
        taskName: ev.value,
        dateCreation: getDateCreation(date),
        dateExpiration: getDateExpiration(date),
    });

    let newLi = document.createElement('li');
    newLi.innerHTML = task.getData();
    listOfTasks.append(newLi);
    ev.value = '';
    setListenersToCheckbox();
}

function getDateCreation(date) {

    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
}

function getDateExpiration(date) {

    return `${date.getDate()+1}.${date.getMonth()+1}.${date.getFullYear()}`;
}

function setListenersToCheckbox() {
    const checkbox = document.querySelectorAll('.checkbox');

    if (checkbox.length > 0) {

        [].forEach.call(checkbox, (elem) => {
            elem.addEventListener('click', checkCheckbox);
        });
    }
    
}

function checkCheckbox(e) {
    let ev = e.target;
    let liTask = ev.parentNode.parentNode;

    if (ev.checked) {
        liTask.style.textDecoration = 'line-through';
        liTask.style.color = 'rgba(0, 0, 0, 0.5)';
        let markDone = document.createElement('div');
        markDone.id = "done";
        markDone.innerHTML = "DONE";
        liTask.children[0].append(markDone);
        
    } else {
        liTask.style.textDecoration = 'none';
        liTask.style.color = 'rgba(0, 0, 0, 1)'; 
        let markDone = liTask.querySelector('#done');
        markDone.remove();
    }
}
