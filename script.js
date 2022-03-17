const amountOfTasks = 4;

const container = document.querySelector('.container');
const listOfTasks = document.createElement('ul');

for (let i = 0; i < amountOfTasks; i++) {
    let task = document.createElement('li');
    task.innerHTML = `Task ${i+1}`;
    listOfTasks.append(task);
}

container.append(listOfTasks);