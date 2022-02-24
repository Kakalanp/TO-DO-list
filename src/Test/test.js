const Task = require('./testClass.js');

const task = new Task();
describe('Checking the add function', () => {
  test('Testing if a task is added to an empty list', () => {
    const getLocalStorage = [];
    expect((task.addTask(('Taking the block quiz'), getLocalStorage))).toEqual([{ desc: 'Taking the block quiz', completed: false, index: 1 }]);
  });

  test('Testing if a task is added to an exsiting list', () => {
    const getLocalStorage = [{ desc: 'Finalizing project 1', completed: false, index: 1 }, { desc: 'Finalizing project 2', completed: false, index: 2 }];

    expect((task.addTask(('Taking the block quiz'), getLocalStorage))).toEqual([{ desc: 'Finalizing project 1', completed: false, index: 1 }, { desc: 'Finalizing project 2', completed: false, index: 2 }, { desc: 'Taking the block quiz', completed: false, index: 3 }]);
  });
});

describe('Checking the remove function', () => {
  it('deletes a single item', () => {
    const get = [{ desc: 'Finalizing project 1', completed: false, index: 1 }, { desc: 'Finalizing project 2', completed: false, index: 2 }, { desc: 'Taking the block quiz', completed: false, index: 3 }];
    const array = [0];

    expect((task.deleteTask(array, get))).toEqual([{ desc: 'Finalizing project 2', completed: false, index: 2 }, { desc: 'Taking the block quiz', completed: false, index: 3 }]);
  });

  it('deletes multiple items', () => {
    const get = [{ desc: 'Finalizing project 1', completed: false, index: 1 }, { desc: 'Finalizing project 2', completed: false, index: 2 }, { desc: 'Taking the block quiz', completed: false, index: 3 }];
    const array = [1, 2];

    expect((task.deleteTask(array, get))).toEqual([{ desc: 'Finalizing project 1', completed: false, index: 1 }]);
  });
});