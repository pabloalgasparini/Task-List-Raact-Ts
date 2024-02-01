import { useState } from "react"
import { TaskList } from "./TaskList"

export const TodoApp = () => {

    const [newTask, setNewTask] = useState<string>('')

    const [tasklList, setTasklList] = useState<string[]>([])

    const handelAddTask = () => {
        if(newTask.trim() === '') return
        setTasklList(previusTasks => [...previusTasks, newTask])
        setNewTask('')
    }

    const handleDeleteTask = (index: number) => {
        setTasklList(tasks => tasks.filter((_,i)=> i !== index))
    }

  return (
    <div>
        <h1>Lista de Tareas</h1>
        <div className="container">
            <input 
            type="text" 
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
            placeholder="Nueva Tarea"
            />
            <button
            onClick={handelAddTask}
            >Agregar Tarea</button>
        </div>
        <TaskList taskList={tasklList} deleteTask={handleDeleteTask}></TaskList>
    </div>
  )
}