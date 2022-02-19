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

function clear() {
  const clear = document.getElementById('clear-button');
  clear.addEventListener('click', () => {
    const checkboxes = document.getElementsByClassName('task');
    const checkboxesArr = Array.from(checkboxes);

    let deleteList = [];

    checkboxesArr.forEach((el, i) => {
      if (el.classList.contains('task-done')) deleteList.push(i);
    });

    deleteTask(deleteList);
    deleteList = [];
    createList();
    deleteSingleTask();
  });
}

function add() {
  if (addTask.value !== '') {
    const newTask = new Task(addTask.value);
    createList();
    addTask.value = '';
    deleteSingleTask();
    clear();
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
  clear();
});
