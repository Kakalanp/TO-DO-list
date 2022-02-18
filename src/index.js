/* eslint-disable no-unused-vars */
import './style.css';
import Task from './modules/addTask.js';
import createList from './modules/printTasks.js';
import deleteTask from './modules/deleteTask.js';

const addTask = document.getElementById('addText');

function deleteSingleTask() {
  const deleteBtns = document.getElementsByClassName('delete-button');
  const deleteBtnsArr = Array.from(deleteBtns);

  deleteBtnsArr.forEach((el, i) => {
    el.addEventListener('click', () => {
      const deleteList = [];
      deleteList.push(i);
      deleteTask(deleteList);
      el.parentElement.parentElement.remove();
    });
  });
}

function add() {
  if (addTask.value !== '') {
    const newTask = new Task(addTask.value);
    createList();
    addTask.value = '';
    deleteSingleTask();
  }
}

addTask.addEventListener('click', () => {
  add();
});

addTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') add();
});

document.addEventListener('DOMContentLoaded', () => {
  createList();
  deleteSingleTask();
});
