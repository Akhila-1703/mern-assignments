import { useState } from "react"

function AddTaskForm(props) {

    //form state
    let [title, setTitle] = useState("")
    let [priority, setPriority] = useState("")
    let [error, setError] = useState("")

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault()

        //validation
        if(title.trim() === ""){
            setError("Title is required")
            return
        }

        if(title.length < 3){
            setError("Title must be minimum 3 characters")
            return
        }

        //create task
        let newTask = {
            id: Date.now(),
            title: title,
            priority: priority,
            completed: false
        }

        props.addNewTask(newTask)

        //clear form
        setTitle("")
        setPriority("")
        setError("")
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4 border p-3">

            {/* title */}
            <input 
                type="text" 
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full"
            />

            {/* error */}
            <p className="text-red-500 text-sm">{error}</p>

            {/* priority */}
            <select 
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border p-2 w-full mt-2"
            >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <button className="border p-2 mt-2 w-full">
                Add Task
            </button>

        </form>
    )
}

export default AddTaskForm