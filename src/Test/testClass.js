/* eslint-disable class-methods-use-this */
class Task {
  constructor(desc, completed, index) {
    this.desc = desc;
    this.completed = completed;
    this.index = index;
  }

  addTask(desc, getLocalStorage) {
    this.desc = desc;
    this.completed = false;
    if (getLocalStorage.length > 0) {
      this.index = (getLocalStorage[getLocalStorage.length - 1].index) + 1;
    } else this.index = 1;
    const taskList = getLocalStorage;
    taskList.push(this);
    return taskList;
  }

  deleteTask(arr, get) {
    const todo = get;
    let i = 0;
    arr.forEach((el) => {
      todo.splice(el - i, 1);
      i += 1;
    });
    return (todo);
  }

  complete(id, todo) {
    todo[id].completed = !todo[id].completed;
    return (todo);
  }

  edit(id, desc, todo) {
    todo[id].desc = desc;
    return todo;
  }

  clear(todo) {
    const clearTask = [];
    for (let i = 0; i < todo.length; i += 1) {
      if (todo[i].completed === true) clearTask.push(i);
    }
    // This is the mocking of delete task
    let i = 0;
    clearTask.forEach((el) => {
      todo.splice(el - i, 1);
      i += 1;
    });
    return todo;
  }
}

module.exports = Task;