import {Modal} from './Modal.js';

export const CONTAINER_MODAL = document.querySelector('#containerModal');
export const LIST_OF_TASKS = document.querySelector('ul');
export const INPUT = document.querySelector('#addedTask');
export const MODAL = new Modal();
export const ENTER_KEY_CODE = 'Enter';
export const CLASS_FOR_MODAL = 'modal-overlay';
export const BTN_CLASSES = {
    CHECKBOX: 'checkbox',
    CROSSROW: 'crossrow',
    CHANGE: 'change',
    PLUS: 'btnPlus',
}
export const BTN_PLUS = document.querySelector(`#${BTN_CLASSES.PLUS}`);