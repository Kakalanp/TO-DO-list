import { getLocalStorage as get, setLocalStorage as set } from './setGet.js';

export default function deleteTask(arr) {
  const todo = get;
  let i = 0;
  arr.forEach((el) => {
    todo.splice(el - i, 1);
    i += 1;
  });
  set(todo);
}