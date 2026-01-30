import { validateTitle, validatePriority, validateDueDate } from "./validator.js"; // import validation functions

let tasks = []; // array to store all tasks

// add new task after validating title, priority, and due date
function addTask(title, priority, dueDate) {
    let titleCheck = validateTitle(title); // validate task title
    if (titleCheck !== true) return titleCheck; // return error if title is invalid
    
    let priorityCheck = validatePriority(priority); // validate task priority
    if (priorityCheck !== true) return priorityCheck; // return error if priority is invalid
    
    let dateCheck = validateDueDate(dueDate); // validate due date
    if (dateCheck !== true) return dateCheck; // return error if due date is invalid
    
    // create task object with required properties
    let task = {
        id: tasks.length + 1, // generate task id
        title: title, // set task title
        priority: priority, // set task priority
        dueDate: dueDate, // set task due date
        completed: false // task is incomplete by default
    };
    
    tasks.push(task); // add task to tasks array
    return { success: true, task: task }; // return success response with task
}

// return all tasks from the tasks array
function getAllTasks() {
    return tasks; // return stored tasks
}

// find task by id and mark it as completed
function completeTask(taskId) {
    let foundTask = null; // variable to store matched task
    
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
            foundTask = tasks[i]; // store task when id matches
            break; // stop loop after finding task
        }
    }
    
    if (!foundTask) return { error: 'Task not found' }; // return error if task not found
    
    foundTask.completed = true; // mark task as completed
    return { success: true, task: foundTask }; // return success response with task
}

export { addTask, getAllTasks, completeTask }; // export task functions
