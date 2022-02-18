/* eslint-disable no-unused-vars */
import './style.css';
import Task from './modules/addTask.js';
import createList from './modules/printTasks.js';

const addTask = document.getElementById('addText');

function add() {
  if (addTask.value !== '') {
    const newTask = new Task(addTask.value);
    createList();
    addTask.value = '';
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
});
