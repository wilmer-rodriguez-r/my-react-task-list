import { useState, useRef} from "react";

export const Task = (props)=>{

    const [inputVisible, setInputVisible] = useState(false);
    const inputValue = useRef(null);
    const {name, isCompleted, onChangeCheck, onDelete, onEditTask} = props;

    const handleChangeCheck = () => {
        onChangeCheck(name);  
    };

    const handleDelete = () => {
        onDelete(name);  
    };

    const handleEdit = () => {
        setInputVisible(true);
    }

    const handleEditTask = () => {
        setInputVisible(false);
        onEditTask(name, inputValue.current.value);
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
                </label>
                <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
                </div>
                <div>
                    {inputVisible && <label>
                            <input type="text" ref={inputValue}/>
                            <button onClick={handleEditTask}>Update</button>
                        </label>}
                </div>
            </>
        </li>
    );
}