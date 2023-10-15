import {Task} from "./Task";
import {useEffect, useState} from "react";

export const TaskList = (props)=> {

    const {list} = props;

    const [completed, setCompleted] = useState([]);
    
    const handleCheckBox = (taskName) => {
        let completedAux = [...completed]

        if (!completed.includes(taskName)) {
            completedAux = [...completedAux, taskName];
        } else {
            completedAux = completedAux.filter((task)=> task != taskName);
        }
        setCompleted(completedAux);
        localStorage.setItem("completed", JSON.stringify(completedAux));
    }

    useEffect(()=>{
        const localStorageData = localStorage.getItem("completed");
        const storageCompleted = JSON.parse(localStorageData);

        setCompleted(storageCompleted);
    }, []);


    return(
        <ul>
            {
                list.map(task => <Task 
                    key={task.name} 
                    name={task.name}
                    onChangeCheck={handleCheckBox}
                    isCompleted={completed.includes(task.name)}/>)
            }
        </ul>
    );
};