class Task {
    constructor(obj) {
        Object.assign(this, obj);
    }

    getData() {
        // if (!this.taskName) {
        //     inputModal.classList.add = 'canceled';
        //     return;
        // } else {
        //     inputModal.classList.delete = 'canceled';
            return `
                <div>
                    <div>Task: ${this.taskName}</div>
                        <div>Creation Date: ${this.dateCreation}</div>
                        <div>Expiration Date: ${this.dateExpiration}</div>
                    </div>
                    <div><input class="checkbox" type="checkbox">
                </div>
            `;
        // }
    }
}

