class Task {
    constructor(obj) {
        Object.assign(this, obj);
    }

    getData() {
        return `
            <div>
                <div>Task: ${this.taskName}</div>
                    <div>Creation Date: ${this.dateCreation}</div>
                    <div>Expiration Date: ${this.dateExpiration}</div>
                </div>
                <div><input class="checkbox" type="checkbox">
            </div>
        `;
    }
}

