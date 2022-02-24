const Task = require('./testClass.js')
let task = new Task
describe("Checking the add function", () => {
    test("Testing if a task is added to an empty list", () => {
        const getLocalStorage = [];
        expect((task.addTask(("Taking the block quiz"), getLocalStorage))).toEqual([{ desc: "Taking the block quiz", completed: false, index: 1 }])
    })

    test("Testing if a task is added to an exsiting list", () => {
        const getLocalStorage = [{ desc: "Finalizing project 1", completed: false, index: 1 }, { desc: "Finalizing project 2", completed: false, index: 2 }]

        expect((task.addTask(("Taking the block quiz"), getLocalStorage))).toEqual([{ desc: "Finalizing project 1", completed: false, index: 1 }, { desc: "Finalizing project 2", completed: false, index: 2 }, { desc: "Taking the block quiz", completed: false, index: 3 }])
    })
})