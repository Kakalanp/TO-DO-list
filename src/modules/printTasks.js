import { getLocalStorage as get } from './setGet.js';

export default function createList() {
  const todo = get;
  todo.innerHTML = '';

  todo.forEach((el) => {
    const listItem = document.createElement('li');
    listItem.classList.add('task');
    listItem.innerHTML = `<input type="checkbox"></input> <p>${el.desc}</p>`;

    todo.appendChild(listItem);
  });
}