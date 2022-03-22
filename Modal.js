class Modal {
    valfromInput;
    valCreation;
    valExpiration;
    
    renderModalView() {
        CONTAINER_MODAL.innerHTML = `
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
        this.initVariables();
        this.initHandlers();
    }

    initVariables() {
        const inputModal = document.querySelector('#inputModal');
        const creationDateModal = document.querySelector('#creationDateModal');
        const expirationDateModal = document.querySelector('#expirationDateModal');
        const btnClose = document.querySelector('#btnClose');
        const btnAdd = document.querySelector('#btnAdd');
        const btnCancel = document.querySelector('#btnCancel');
    }

    initHandlers() {
        btnClose.addEventListener('click', this.closeModalWindow);
        btnCancel.addEventListener('click', this.closeModalWindow);
        btnAdd.addEventListener('click', this.saveValuesFromModal);
        inputModal.addEventListener('blur', getValueFromInput);
        creationDateModal.addEventListener('blur', getValueForCreation);
        expirationDateModal.addEventListener('blur', getValueForExpiration);
    }

    openModalWindow() {
        MODAL.clearValuesFromModal();
        CONTAINER_MODAL.style.display = 'block';
        CONTAINER_MODAL.classList = 'modal-overlay';
    }
    
    closeModalWindow() {
        CONTAINER_MODAL.style.display = 'none';
        CONTAINER_MODAL.classList.delete = 'modal-overlay';
    }

    saveValuesFromModal() {
        if (!MODAL.valfromInput || !MODAL.valCreation || !MODAL.valExpiration ) {
            inputModal.classList.add = 'canceled';
            return;
        } else {
            inputModal.classList.delete = 'canceled';
            const task = new Task ({
                taskName: MODAL.valfromInput,
                dateCreation: getDateCreation( new Date(MODAL.valCreation) ),
                dateExpiration: getDateCreation( new Date(MODAL.valExpiration) ),
            });
            const newLi = document.createElement('li');

            newLi.innerHTML = task.getData();
            LIST_OF_TASKS.append(newLi);
            MODAL.closeModalWindow();
            setListenersToCheckbox();
            MODAL.clearValuesFromModal()
            }
    }

    clearValuesFromModal() {
        this.valfromInput = '';
        this.valCreation = '';
        this.valExpiration = '';
        inputModal.value = '';
        creationDateModal.value = '';
        expirationDateModal.value = '';
    }
 }
