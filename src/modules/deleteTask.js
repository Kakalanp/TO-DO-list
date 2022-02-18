import { getLocalStorage as get, setLocalStorage as set } from './setGet.js';

export default function deleteTask(arr) {
  const todo = get;
  arr.forEach((el) => {
    todo.splice(el, 1);
  });
  set(todo);
}