import { getLocalStorage as get, setLocalStorage as set } from './setGet.js';

export default class Task {
  constructor(desc) {
    this.desc = desc;
    this.completed = false;
    if (get.length > 0) {
      this.index = (get.at(-1).index) + 1;
    } else this.index = 1;

    const taskList = get;
    taskList.push(this);
    set(taskList);
  }
}