import { useTask } from "../hooks/useTask";
import { Task } from "./Task";;
import { FormTask } from "./formTask";

export const TaskList = ()=> {

    const [tasks, createTask, changeState, deleteTask, updateTask] = useTask();

    function handleCheckBox(taskName) {
        changeState(taskName);
    };

    function handleDeleteTask(taskName) {
        deleteTask(taskName);
    };

    function handleEditTask(taskName, newTaskName) {
        updateTask(taskName, newTaskName)
    };

    return(
        <>
            <FormTask onChangeTask={createTask}/>
            <ul>
                {
                    tasks.map(task => <Task 
                        key={task.name} 
                        name={task.name}
                        description={task.description}
                        isCompleted={task.state}
                        onChangeCheck={handleCheckBox}
                        onDelete={handleDeleteTask}
                        onEditTask={handleEditTask}/>)
                }
            </ul>
        </>
    );
};