/* eslint-disable no-unused-vars */
import './style.css';
import Task from './modules/addTask.js';
import createList from './modules/printTasks.js';

const walkDog = new Task('Walk the dog');
const sweepFloor = new Task('Sweep the floor');
const washDish = new Task('Wash the dishes');

document.addEventListener('DOMContentLoaded', () => {
  createList();
});
