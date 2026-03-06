import TaskItem from "./TaskItem"

function TaskList(props) {

    return (
        <div className="mt-4">

            {
                props.tasks.map((taskObj) => {
                    return (
                        <TaskItem 
                            key={taskObj.id}
                            task={taskObj}
                            toggleTask={props.toggleTask}
                            deleteTask={props.deleteTask}
                        />
                    )
                })
            }

        </div>
    )
}

export default TaskList