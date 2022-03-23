import {CONTAINER_MODAL, MODAL, CLASS_FOR_MODAL} from "./const.js";
import {getDateCreation, getValueFromInput, getValueForCreation, getValueForExpiration, markAsInvalid, renderTask} from "./functions.js";
import {Task} from "./Task.js";

export class Modal {
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
                    <input type="date" id="expirationDateModal" >
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
        btnAdd.addEventListener('click', this.checkDataValidity);
        inputModal.addEventListener('blur', getValueFromInput);
        creationDateModal.addEventListener('blur', getValueForCreation);
        expirationDateModal.addEventListener('blur', getValueForExpiration);
    }

    openModalWindow() {
        MODAL.clearValuesFromModal();
        CONTAINER_MODAL.style.display = 'block';
        CONTAINER_MODAL.classList = CLASS_FOR_MODAL;
    }
    
    closeModalWindow() {
        CONTAINER_MODAL.style.display = 'none';
        CONTAINER_MODAL.classList.delete = CLASS_FOR_MODAL;
    }

    saveValuesFromModal() {
        const task = new Task ({
            taskName: MODAL.valfromInput,
            dateCreation: getDateCreation( new Date(MODAL.valCreation) ),
            dateExpiration: getDateCreation( new Date(MODAL.valExpiration) ),
        });

        renderTask(task);
        MODAL.closeModalWindow();
        MODAL.clearValuesFromModal();
    }

    clearValuesFromModal() {
        this.valfromInput = '';
        this.valCreation = '';
        this.valExpiration = '';
        inputModal.value = '';
        creationDateModal.value = '';
        expirationDateModal.value = '';
    }

    checkDataValidity() {
        if (!MODAL.valfromInput && !MODAL.valCreation && !MODAL.valExpiration) {
            markAsInvalid(inputModal, creationDateModal, expirationDateModal);
            return;
        } else if (!MODAL.valCreation && !MODAL.valExpiration) {
            markAsInvalid(creationDateModal, expirationDateModal);
            return;
        } else if (!MODAL.valfromInput && !MODAL.valCreation) {
            markAsInvalid(inputModal, creationDateModal);
            return;
        } else if (!MODAL.valfromInput && !MODAL.valExpiration) {
            markAsInvalid(inputModal, expirationDateModal);
            return;
        } else if (!MODAL.valExpiration) {
            markAsInvalid(expirationDateModal);
            return;
        } else if (!MODAL.valfromInput) {
            markAsInvalid(inputModal);
            return;
        } else if (!MODAL.valCreation) {
            markAsInvalid(creationDateModal);
            return;
        }

        MODAL.saveValuesFromModal();  
    }
}
