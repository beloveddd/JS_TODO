import {INPUT, BTN_PLUS, MODAL, LIST_OF_TASKS} from "./const.js";
import {addTaskToList, checkCheckbox} from "./functions.js";

MODAL.renderModalView();
INPUT.addEventListener('keydown', addTaskToList);
BTN_PLUS.addEventListener('click', MODAL.openModalWindow);
LIST_OF_TASKS.addEventListener('click', checkCheckbox);