class Task {
    constructor(desc, completed, index) {
        this.desc = desc;
        this.completed = completed;
        this.index = index;
    }

    addTask(desc, getLocalStorage) {
        this.desc = desc
        this.completed = false
        if (getLocalStorage.length > 0) {
            this.index = (getLocalStorage[getLocalStorage.length - 1].index) + 1;
        } else this.index = 1;
        const taskList = getLocalStorage;
        taskList.push(this);
        return taskList
    }
}

module.exports = Task