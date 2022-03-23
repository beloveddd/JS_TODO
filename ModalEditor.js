import { MODAL_EDITOR, CONTAINER_MODAL,CLASS_FOR_MODAL } from './const.js';
import { getDateCreation } from "./functions.js";
import { Modal } from './Modal.js';

export class ModalEditor extends Modal {
    chosenTask;
    
    renderModalEditor(objOfValues) {
        CONTAINER_MODAL.innerHTML = `
        <div id="modal" class="editor">
            <button id="btnClose">X</button>
        
            <header>        
                <h1>Edit your task</h1>
            </header>
        
            <main>
                <div>
                    <label for="inputModal">Task:</label>
                    <input type="text" id="inputModal" value="${objOfValues.taskName}">
                </div>
                <div>
                    <label for="creationDateModal">Creation Date:</label>
                    <input type="date" id="creationDateModal" value="${objOfValues.dateCreation.year}-${objOfValues.dateCreation.month}-${objOfValues.dateCreation.date}">
                </div>
                <div>
                    <label for="expirationDateModal">Expiration Date:</label>
                    <input type="date" id="expirationDateModal" value="${objOfValues.dateExpiration.year}-${objOfValues.dateExpiration.month}-${objOfValues.dateExpiration.date}">
                </div>
            </main>
        
            <footer>
                <button id="btnAdd">Add</button>
                <button id="btnCancel">Cancel</button>
            </footer>
        </div>
        `;
        super.initHandlers();
    }

    openModalEditorWindow(objOfValues) {
        this.renderModalEditor(objOfValues);
        CONTAINER_MODAL.style.display = 'block';
        CONTAINER_MODAL.classList = CLASS_FOR_MODAL;
    }
    
    closeModalEditorWindow() {
        super.clearValuesFromModal();
        super.closeModalWindow();
    }

    saveValuesFromModalEditor() {
        const taskInput = MODAL_EDITOR.chosenTask.querySelector('#taskInp');
        const creationDateInput = MODAL_EDITOR.chosenTask.querySelector('#dateCreation');
        const expirationDateInput = MODAL_EDITOR.chosenTask.querySelector('#dateExpiration');

        taskInput.innerHTML = `Task: ${inputModal.value}`;
        creationDateInput.innerHTML = `Creation Date: ${getDateCreation(new Date (creationDateModal.value))}`;
        expirationDateInput.innerHTML = `Expiraton Date: ${getDateCreation(new Date (expirationDateModal.value))}`;
        MODAL_EDITOR.closeModalEditorWindow();
    }
}