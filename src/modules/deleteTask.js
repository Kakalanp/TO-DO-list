import { getLocalStorage as get, setLocalStorage as set } from './setGet.js';

export default function deleteTask(arr) {
  let todo = get;
  let delI = 0;
  let arrI = todo.length;
  arr.forEach((el) => {
    const deleteIndex = todo[el - delI].index;
    todo = todo.filter((todo) => todo.index !== deleteIndex);
    if (arrI !== todo.length) delI += 1;
    arrI = todo.length;
  });
  set(todo);
}