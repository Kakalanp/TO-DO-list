import { getLocalStorage as get, setLocalStorage as set } from './setGet.js';

export default function deleteTask(arr) {
  const todo = get;
  let i = 0;
  arr.forEach((el) => {
    const deleteIndex = parseInt(el, 10) - i;
    todo.splice(deleteIndex, 1);
    i += 1;
  });
  set(todo);
}