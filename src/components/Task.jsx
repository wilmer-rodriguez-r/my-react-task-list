import { useState } from "react";
import { FormTask } from "./formTask";

export const Task = (props)=>{

    const [inputVisible, setInputVisible] = useState(false);
    const {name, description, isCompleted, onChangeCheck, onDelete, onEditTask} = props;

    const handleChangeCheck = () => {
        onChangeCheck(name);  
    };

    const handleDelete = () => {
        onDelete(name);  
    };

    const handleEdit = () => {
        setInputVisible(true);
    }

    const handleEditTask = (task) => {
        onEditTask(name, task)
    }

    return (
        <li>
            <>
                <label style={{textDecoration: isCompleted ? 'line-through' : 'none' }}>
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={handleChangeCheck}
                    />
                    {name}
                    <p>Description: {description}</p>
                </label>
                <div>
                    <button disabled={isCompleted} onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                <div>
                    {inputVisible && <FormTask onChangeTask={handleEditTask}/>}
                </div>
            </>
        </li>
    );
}