import { CONTAINER_MODAL, MODAL, CLASS_FOR_MODAL, MODAL_EDITOR, MODAL_EDITOR_CLASS } from "./const.js";
import { getDateCreation, getValueFromInput, getValueForCreation, getValueForExpiration, markAsInvalid, renderTask } from "./functions.js";
import { Task } from "./Task.js";

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
        MODAL.renderModalView();
        CONTAINER_MODAL.style.display = 'block';
        CONTAINER_MODAL.classList = CLASS_FOR_MODAL;
    }
    
    closeModalWindow() {
        MODAL.clearValuesFromModal();
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
        const valInp = inputModal.value;
        const valDateCreation = creationDateModal.value;
        const valDateExpiration = expirationDateModal.value;
        const currentDate = new Date().setHours(0, 0, 0, 0);
        const dateCreation = new Date(valDateCreation);
        const dateExpiration = new Date(valDateExpiration);
        const modalClass = CONTAINER_MODAL.firstElementChild.className;

        if (!valInp) {
            markAsInvalid(inputModal);
        } else if (!valDateCreation || dateCreation < currentDate ) {
            markAsInvalid(creationDateModal);
        } else if (!valDateExpiration || dateExpiration < dateCreation) {
            markAsInvalid(expirationDateModal);
        } else {
            modalClass === MODAL_EDITOR_CLASS ? MODAL_EDITOR.saveValuesFromModalEditor() : MODAL.saveValuesFromModal();
        }
    }
}
