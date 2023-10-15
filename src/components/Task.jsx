import { isValidElement } from "react";

export const Task = (props)=>{

    const {name, isCompleted, onChangeCheck} = props;

    const handleChangeCheck = () => {
      onChangeCheck(name);  
    };

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
            </>
        </li>
    );
}