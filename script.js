import { INPUT, BTN_PLUS, MODAL, LIST_OF_TASKS, BTN_ALL, BTN_ACTIVE, BTN_COMPLITED, BTN_CLEAR_COMPLITED, BTN_SORT, BTN_DATE_SORT, BTN_NAME_SORT, TASK_PROPERTIES } from "./const.js";
import { addTaskToList, defineTarget, showAllTasks, showActiveTasks, showCompletedTasks, clearCompletedTasks, showSortWindow, sortByProperty } from "./functions.js";

INPUT.addEventListener('keydown', addTaskToList);
BTN_PLUS.addEventListener('click', MODAL.openModalWindow);
BTN_ALL.addEventListener('click', showAllTasks);
BTN_ACTIVE.addEventListener('click', showActiveTasks);
BTN_COMPLITED.addEventListener('click', showCompletedTasks);
BTN_CLEAR_COMPLITED.addEventListener('click', clearCompletedTasks);
BTN_SORT.addEventListener('click', showSortWindow);
BTN_NAME_SORT.addEventListener('click', sortByProperty.bind(null, TASK_PROPERTIES.TASK_NAME));
BTN_DATE_SORT.addEventListener('click', sortByProperty.bind(null, TASK_PROPERTIES.CREATION_MS));
LIST_OF_TASKS.addEventListener('click', defineTarget);