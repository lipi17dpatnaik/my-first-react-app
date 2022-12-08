import { useState} from 'react';

export function ToDoList() {
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addToTaskList = () => {
        const newTaskList = [...taskList, newTask];
        setTaskList(newTaskList);
    }

    const deleteTask = (taskName) => {
        const newTaskList = taskList.filter((task) => {
            return task!==taskName;
        })
        setTaskList(newTaskList);
    }

    return (
        <div className="toDoList">
            <div className="addTask">
                <input onChange={(event)=> {
                    setNewTask(event.target.value)
                }}/>
                <button onClick={addToTaskList}> Add To Do</button>
            </div>
            <div className="taskList">
                <h1>Here's the task list</h1>
                {taskList.map((task, key)=> {return (
                     <div>
                        <h1 key={key}>{task}</h1>
                        <button onClick={() => deleteTask(task)}> x </button>
                     </div>
                    )   
                })}
            </div>
        </div>
    )
}