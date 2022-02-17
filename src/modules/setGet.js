export function getLocalStorage() {
  let taskList = [];
  if (localStorage.getItem('taskList') !== null) {
    taskList = JSON.parse(localStorage.getItem('taskList'));
    return taskList;
  }
  return taskList;
}

export function setLocalStorage(taskList) {
  localStorage.setItem('taskList', JSON.stringify(taskList));
}