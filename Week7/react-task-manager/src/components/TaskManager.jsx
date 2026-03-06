import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import TaskList from "./TaskList"

function TaskManager() {

    //state
    let [tasks, setTasks] = useState([])

    //add new task
    const addNewTask = (taskObj) => {
        setTasks([...tasks, taskObj])
    }

    //toggle complete
    const toggleTask = (id) => {
        let updated = tasks.map((task) => {
            if(task.id === id){
                return { ...task, completed: !task.completed }
            }
            else{
                return task
            }
        })
        setTasks(updated)
    }

    //delete task
    const deleteTask = (id) => {
        let filtered = tasks.filter((task) => task.id !== id)
        setTasks(filtered)
    }

    //counts
    let totalCount = tasks.length
    let completedCount = tasks.filter((task) => task.completed).length

    return (
        <div className="p-4">

            {/* heading */}
            <h1 className="text-2xl font-bold text-center">Task Manager</h1>

            {/* counts */}
            <p className="text-center mt-2">
                Total: {totalCount} | Completed: {completedCount}
            </p>

            <AddTaskForm addNewTask={addNewTask} />

            <TaskList 
                tasks={tasks} 
                toggleTask={toggleTask} 
                deleteTask={deleteTask} 
            />

        </div>
    )
}

export default TaskManager