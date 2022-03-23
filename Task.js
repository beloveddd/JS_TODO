export class Task {
    constructor(obj) {
        Object.assign(this, obj);
    }

    getData() {
            return `
                <div>
                    <div>
                        <div>Task: ${this.taskName}</div>
                            <div>Creation Date: ${this.dateCreation}</div>
                            <div>Expiration Date: ${this.dateExpiration}</div>
                        </div>
                    </div>
                    <div>
                        <input class="checkbox" type="checkbox">
                        <button class="crossrow">X</button>
                    </div>
                </div>
            `;
    }

    static deleteTask(task) {
        task.remove();
    }
}

