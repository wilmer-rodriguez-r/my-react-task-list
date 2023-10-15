import { useTask } from "../hooks/useTask";
import { Task } from "./Task";
import { useRef } from "react";

export const TaskList = ()=> {

    const [tasks, createTask, changeState, deleteTask, updateTask] = useTask();
    const inputValue = useRef(null);

    function handleCheckBox(taskName) {
        changeState(taskName);
    };

    function handleNewTask() {
        createTask(inputValue.current.value);
    };

    function handleDeleteTask(taskName) {
        deleteTask(taskName);
    };

    function handleEditTask(taskName, newTaskName) {
        updateTask(taskName, newTaskName)
    };

    return(
        <>
            <input ref={inputValue} type="text" />
            <button onClick={handleNewTask}>+</button>
            <ul>
                {
                    tasks.map(task => <Task 
                        key={task.name} 
                        name={task.name}
                        onChangeCheck={handleCheckBox}
                        isCompleted={task.state}
                        onDelete={handleDeleteTask}
                        onEditTask={handleEditTask}/>)
                }
            </ul>
        </>
    );
};