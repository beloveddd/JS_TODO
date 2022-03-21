class Modal {

    valfromInput;
    valCreation;
    valExpiration;
    
    renderModalView() {
        containerModal.innerHTML = `
        <div id="modal">
            <button id="btnClose">X</button>
        
            <header>        
                <h1>Enter your task</h1>
            </header>
        
            <main>
                <div>
                    <label for="inputModal">Task:</label>
                    <input type="text" id="inputModal">
                </div>
                <div>
                    <label for="creationDateModal">Creation Date:</label>
                    <input type="date" id="creationDateModal">
                </div>
                <div>
                    <label for="expirationDateModal">Expiration Date:</label>
                    <input type="date" id="expirationDateModal">
                </div>
            </main>
        
            <footer>
                <button id="btnAdd">Add</button>
                <button id="btnCancel">Cancel</button>
            </footer>
        </div>
        `;
        this.initHandlers();
    }

    initHandlers() {

        const inputModal = document.querySelector('#inputModal');
        const creationDateModal = document.querySelector('#creationDateModal');
        const expirationDateModal = document.querySelector('#expirationDateModal');

        const btnClose = document.querySelector('#btnClose');
        const btnAdd = document.querySelector('#btnAdd');
        const btnCancel = document.querySelector('#btnCancel');
        
        btnClose.addEventListener('click', this.closeModalWindow);
        btnCancel.addEventListener('click', this.closeModalWindow);
        btnAdd.addEventListener('click', this.saveValuesFromModal);

        inputModal.addEventListener('blur', (e) => {
            let ev = e.target; 
            this.valfromInput = ev.value;
        });

        creationDateModal.addEventListener('blur', (e) => {
            let ev = e.target; 
            this.valCreation = ev.value;
        });
            
        expirationDateModal.addEventListener('blur', (e) => {
            let ev = e.target; 
            this.valExpiration = ev.value;
        });
    }

    openModalWindow() {

        inputModal.value = '';
        creationDateModal.value = '';
        expirationDateModal.value = '';
    
        containerModal.style.display = 'block';
        containerModal.classList = 'modal-overlay';
    }
    
    closeModalWindow() {
        containerModal.style.display = 'none';
        containerModal.classList.delete = 'modal-overlay';
    }

    saveValuesFromModal() {
    
        let task = new Task ({
            taskName: modal.valfromInput,
            dateCreation: getDateCreation( new Date(modal.valCreation) ),
            dateExpiration: getDateCreation( new Date(modal.valExpiration) ),
        });
    
        let newLi = document.createElement('li');
        newLi.innerHTML = task.getData();
        listOfTasks.append(newLi);

        modal.closeModalWindow();
        setListenersToCheckbox();
    }

}

