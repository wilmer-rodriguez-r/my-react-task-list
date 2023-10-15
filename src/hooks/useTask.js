import { useEffect, useState } from "react";


export function useTask() {

    const [tasks, setTasks] = useState([]);
    function deleteTask(taskName) {
        let tasksAux = [...tasks];

        tasksAux = tasksAux.filter((task)=> task.name != taskName);

        setTasks(tasksAux);
        localStorage.setItem("tasks", JSON.stringify(tasksAux));
    }

    function createTask(taskName) {
        const tasksAux = [...tasks, {"name": taskName, state: false}];
        setTasks(tasksAux);
        localStorage.setItem("tasks", JSON.stringify(tasksAux));
    }

    function changeState(taskName) {
        let tasksAux = tasks.map((task) => task.name === taskName ? {...task, state: !task.state} : task)
        setTasks(tasksAux);
        localStorage.setItem("tasks", JSON.stringify(tasksAux));
    };

    function updateTask(taskName, newTaskName) {
        let tasksAux = tasks.map((task) => task.name === taskName ? {...task, name: newTaskName} : task)
        setTasks(tasksAux);
        localStorage.setItem("tasks", JSON.stringify(tasksAux));
    }

    useEffect(()=>{
        const localStorageData = localStorage.getItem("tasks");
        const storageTasks = JSON.parse(localStorageData);

        setTasks(storageTasks);
    }, []);
   
    return[tasks, createTask, changeState, deleteTask, updateTask]
}