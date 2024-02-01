type TaskProps = {
    task: string,
    deleteTask: ()=>void
}

export const Task = ({task, deleteTask}:TaskProps) => {
  return (
    <div className="task">
        <span>{task}</span>
        <button onClick={deleteTask}>Borar Tarea</button>
    </div>
  )
}