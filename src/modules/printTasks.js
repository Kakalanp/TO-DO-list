import { getLocalStorage as get, setLocalStorage as set} from './setGet.js';

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

      list.appendChild(listItem);

      document.getElementById(`box-${el.index}`).addEventListener('change', () => {
        document.getElementById(`task-${el.index}`).classList.toggle('task-done');
        todo[i].completed = !el.completed;
        set(todo);
      });
    });
  }
}