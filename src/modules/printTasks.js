import { getLocalStorage as get, setLocalStorage as set } from './setGet.js';
import editTasks from './editTasks.js';

export default function createList() {
  const todo = get;

  const list = document.getElementById('list');
  list.innerHTML = '';

  if (todo.length === 0) {
    list.innerHTML = 'You have nothing left to do!';
  } else {
    todo.forEach((el, i) => {
      let complete = '';
      const listItem = document.createElement('li');
      listItem.setAttribute('id', `task-${el.index}`);
      listItem.classList.add('task');

      if (el.completed) {
        complete = 'checked';
        listItem.classList.add('task-done');
      }

      listItem.innerHTML = `<input type="checkbox" id="box-${el.index}" ${complete}></input> <p>${el.desc}</p>`;

      const manageTask = document.createElement('div');
      manageTask.classList.add('manageTask');
      manageTask.innerHTML = `<div class="vertical-button"></div> <div class="edit-button off" id="edit-${i}"></div> <div class="delete-button off"></div>`;

      listItem.appendChild(manageTask);
      list.appendChild(listItem);

      document.getElementById(`edit-${i}`).addEventListener('click', () => {
        const currentParagraph = document.querySelector(`#task-${el.index} p`);
        currentParagraph.setAttribute('contenteditable', 'true');
        currentParagraph.focus();
        currentParagraph.addEventListener('input', () => {
          el.desc = currentParagraph.innerText;
          set(todo);
        });
      });

      document.getElementById(`box-${el.index}`).addEventListener('change', () => {
        document.getElementById(`task-${el.index}`).classList.toggle('task-done');
        todo[i].completed = !el.completed;
        set(todo);
      });
    });
    editTasks();
  }
}
