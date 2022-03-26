import { Modal } from './Modal.js';
import { ModalEditor } from './ModalEditor.js';

export const CONTAINER_MODAL = document.querySelector('#containerModal');
export const LIST_OF_TASKS = document.querySelector('ul');
export const INPUT = document.querySelector('#addedTask');
export const SORT_BLOCK = document.querySelector('.sortBlock');
export const FILTER_INPUT = document.querySelector('#filterInp');
export const TASKS_OBJ = {};
export const MODAL = new Modal();
export const MODAL_EDITOR = new ModalEditor();
export const ENTER_KEY_CODE = 'Enter';
export const BTN_CLASSES = {
    CHECKBOX: 'checkbox',
    CROSSROW: 'crossrow',
    CHANGE: 'change',
    PLUS: 'btnPlus',
    ALL: 'all',
    ACTIVE: 'active',
    COMPLITED: 'completed',
    CLEAR_COMPLITED: 'clear_completed',
    SORT: 'sort',
    NAME_SORT: 'nameSort',
    DATE_SORT: 'dateSort',
    FILTER: 'btnFilter',
}
export const BTN_PLUS = document.querySelector(`.${BTN_CLASSES.PLUS}`);
export const BTN_ALL = document.querySelector(`.${BTN_CLASSES.ALL}`);
export const BTN_ACTIVE = document.querySelector(`.${BTN_CLASSES.ACTIVE}`);
export const BTN_COMPLITED = document.querySelector(`.${BTN_CLASSES.COMPLITED}`);
export const BTN_CLEAR_COMPLITED = document.querySelector(`.${BTN_CLASSES.CLEAR_COMPLITED}`);
export const BTN_SORT = document.querySelector(`.${BTN_CLASSES.SORT}`);
export const BTN_NAME_SORT = document.querySelector(`.${BTN_CLASSES.NAME_SORT}`);
export const BTN_DATE_SORT = document.querySelector(`.${BTN_CLASSES.DATE_SORT}`);
export const BTN_FILTER = document.querySelector(`.${BTN_CLASSES.FILTER}`);
export const CHECKBOX_STATUS = 'checked';
export const MODAL_EDITOR_CLASS = 'editor';
export const INVALID_DATA_CLASS = 'canceled';
export const DONE_TASK_ID_CLASS = 'done';
export const CLASS_FOR_MODAL = 'modal-overlay';
export const CLASS_FOR_SORT_BLOCK = 'hidden';
export const DISPLAY_PROPERTIES = {
    FLEX: 'flex' ,
    NONE: 'none'
}
export const TASK_PROPERTIES = {
    CREATION_MS: 'creationMs',
    TASK_NAME: 'taskName',
}
