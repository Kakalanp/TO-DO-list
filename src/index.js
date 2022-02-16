/* eslint-disable no-unused-vars */
import './style.css';

const list = [];

class Task {
  constructor(desc) {
    this.desc = desc;
    this.completed = false;
    if (list.length > 0) {
      this.index = (list.at(-1).index) + 1;
    } else this.index = 1;
    list.push(this);
  }
}

const walkDog = new Task('Walk the dog');
const sweepFloor = new Task('Sweep the floor');
const washDish = new Task('Wash the dishes');

function createList() {
  const todo = document.getElementById('list');
  todo.innerHTML = '';

  list.forEach((el) => {
    const listItem = document.createElement('li');
    listItem.classList.add('task');
    listItem.innerHTML = `<input type="checkbox"></input> <p>${el.desc}</p>`;

    todo.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createList();
});
