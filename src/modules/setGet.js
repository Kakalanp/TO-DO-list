let taskList = [];
if (localStorage.getItem('taskList') !== null) {
  taskList = JSON.parse(localStorage.getItem('taskList'));
}

export const getLocalStorage = taskList;

export function setLocalStorage(taskList) {
  localStorage.setItem('taskList', JSON.stringify(taskList));
}