/*
iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again
*/
import { addTask, getAllTasks, completeTask } from './task.js'

console.log('=== Task Management System ===');

// 1. Add some tasks
console.log('\n--- Adding tasks ---');
console.log(addTask('Buy groceries', 'high', '2026-01-25'));
console.log(addTask('Complete project', 'medium', '2026-02-01'));
console.log(addTask('Call mom', 'low', '2026-01-22'));

// 2.Display all tasks
console.log('\n--- All tasks ---');
console.log(getAllTasks());

// 3.Complete a task
console.log('\n--- Completing task 1 ---');
console.log(completeTask(1));

// 4. Display all tasks again
console.log('\n--- All tasks after completion ---');
console.log(getAllTasks());
