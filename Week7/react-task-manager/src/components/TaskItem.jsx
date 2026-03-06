function TaskItem(props) {

    //receive task
    let task = props.task

    return (
        <div className="border p-3 mt-2">

            <h2 className={task.completed ? "line-through font-bold" : "font-bold"}>
                {task.title}
            </h2>

            <p className="text-sm">{task.priority}</p>

            <div className="mt-2">

                <button 
                    onClick={() => props.toggleTask(task.id)}
                    className="border px-2 mr-2"
                >
                    {task.completed ? "Undo" : "Complete"}
                </button>

                <button 
                    onClick={() => props.deleteTask(task.id)}
                    className="border px-2"
                >
                    Delete
                </button>

            </div>

        </div>
    )
}

export default TaskItem