import { INPUT, BTN_PLUS, MODAL, LIST_OF_TASKS, BTN_ALL, BTN_ACTIVE, BTN_COMPLITED, BTN_CLEAR_COMPLITED } from "./const.js";
import { addTaskToList, defineTarget, showAllTasks, showActiveTasks, showCompletedTasks, clearCompletedTasks } from "./functions.js";

INPUT.addEventListener('keydown', addTaskToList);
BTN_PLUS.addEventListener('click', MODAL.openModalWindow);
BTN_ALL.addEventListener('click', showAllTasks);
BTN_ACTIVE.addEventListener('click', showActiveTasks);
BTN_COMPLITED.addEventListener('click', showCompletedTasks);
BTN_CLEAR_COMPLITED.addEventListener('click', clearCompletedTasks);
LIST_OF_TASKS.addEventListener('click', defineTarget);