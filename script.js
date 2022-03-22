import {INPUT, BTN_PLUS, MODAL, LIST_OF_TASKS} from "./const.js";
import {addTaskToList, checkCheckbox} from "./functions.js";

MODAL.renderModalView();
export const INPUT_MODAL = document.querySelector('#inputModal');
export const CREATION_DATE_MODAL = document.querySelector('#creationDateModal');
export const EXPIRATION_DATE_MODAL = document.querySelector('#expirationDateModal');
export const BTN_CLOSE = document.querySelector('#btnClose');
export const BTN_ADD = document.querySelector('#btnAdd');
export const BTN_CANCEL = document.querySelector('#btnCancel');

MODAL.initHandlers();
INPUT.addEventListener('keydown', addTaskToList);
BTN_PLUS.addEventListener('click', MODAL.openModalWindow);
LIST_OF_TASKS.addEventListener('click', checkCheckbox);