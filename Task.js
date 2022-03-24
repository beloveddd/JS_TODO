export class Task {
    constructor(obj) {
        Object.assign(this, obj);
    }

    getData() {
            return `
                <div>
                    <div>
                        <div id="taskInp">Task: ${this.taskName}</div>
                            <div id="dateCreation">Creation Date: ${this.dateCreation}</div>
                            <div id="dateExpiration">Expiration Date: ${this.dateExpiration}</div>
                        </div>
                    </div>
                    <div class="taskBtns">
                        <input class="checkbox" type="checkbox">
                        <button class="crossrow">X</button>
                        <i class="fa-solid fa-pencil change"></i>
                    </div>
                </div>
            `;
    }

    static deleteTask(task) {
        task.remove();
    }
}

