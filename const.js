import {Modal} from './Modal.js';

export const CONTAINER_MODAL = document.querySelector('#containerModal');
export const LIST_OF_TASKS = document.querySelector('ul');
export const INPUT = document.querySelector('#addedTask');
export const BTN_PLUS = document.querySelector('#btnPlus');
export const MODAL = new Modal();
export const ENTER_KEY_CODE = 'Enter';
export const CLASS_FOR_MODAL = 'modal-overlay';