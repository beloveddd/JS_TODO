import { Modal } from './Modal.js';
import { ModalEditor } from './ModalEditor.js';

export const CONTAINER_MODAL = document.querySelector('#containerModal');
export const LIST_OF_TASKS = document.querySelector('ul');
export const INPUT = document.querySelector('#addedTask');
export const MODAL = new Modal();
export const MODAL_EDITOR = new ModalEditor();
export const ENTER_KEY_CODE = 'Enter';
export const CLASS_FOR_MODAL = 'modal-overlay';
export const BTN_CLASSES = {
    CHECKBOX: 'checkbox',
    CROSSROW: 'crossrow',
    CHANGE: 'fa-solid fa-pencil change',
    PLUS: 'btnPlus',
}
export const BTN_PLUS = document.querySelector(`#${BTN_CLASSES.PLUS}`);
export const MODAL_EDITOR_CLASS = 'editor';
