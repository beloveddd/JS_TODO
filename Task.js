class Task {
    constructor(obj) {
        this.taskName = obj.taskName;
        this.dateCreation = obj.dateCreation;
        this.dateExpiration = obj.dateExpiration;
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

