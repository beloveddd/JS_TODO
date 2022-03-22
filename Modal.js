import {CONTAINER_MODAL,LIST_OF_TASKS, MODAL, CLASS_FOR_MODAL} from "./const.js";
import {getDateCreation, getValueFromInput, getValueForCreation, getValueForExpiration, markAsInvalid, renderTask} from "./functions.js";
import {Task} from "./Task.js";
import {INPUT_MODAL, CREATION_DATE_MODAL, EXPIRATION_DATE_MODAL, BTN_CLOSE, BTN_ADD, BTN_CANCEL} from './script.js';

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
    }

    initHandlers() {
        BTN_CLOSE.addEventListener('click', this.closeModalWindow);
        BTN_CANCEL.addEventListener('click', this.closeModalWindow);
        BTN_ADD.addEventListener('click', this.checkDataValidity);
        INPUT_MODAL.addEventListener('blur', getValueFromInput);
        CREATION_DATE_MODAL.addEventListener('blur', getValueForCreation);
        EXPIRATION_DATE_MODAL.addEventListener('blur', getValueForExpiration);
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
        INPUT_MODAL.value = '';
        CREATION_DATE_MODAL.value = '';
        EXPIRATION_DATE_MODAL.value = '';
    }

    checkDataValidity() {
        if (!MODAL.valfromInput && !MODAL.valCreation && !MODAL.valExpiration) {
            markAsInvalid(INPUT_MODAL, CREATION_DATE_MODAL, EXPIRATION_DATE_MODAL);
            return;
        } else if (!MODAL.valCreation && !MODAL.valExpiration) {
            markAsInvalid(CREATION_DATE_MODAL, EXPIRATION_DATE_MODAL);
            return;
        } else if (!MODAL.valfromInput && !MODAL.valCreation) {
            markAsInvalid(INPUT_MODAL, CREATION_DATE_MODAL);
            return;
        } else if (!MODAL.valfromInput && !MODAL.valExpiration) {
            markAsInvalid(INPUT_MODAL, EXPIRATION_DATE_MODAL);
            return;
        } else if (!MODAL.valExpiration) {
            markAsInvalid(EXPIRATION_DATE_MODAL);
            return;
        } else if (!MODAL.valfromInput) {
            markAsInvalid(INPUT_MODAL);
            return;
        } else {
            MODAL.saveValuesFromModal();  
        }
    }
}
