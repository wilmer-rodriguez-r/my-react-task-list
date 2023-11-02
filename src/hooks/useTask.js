import { useEffect, useState } from "react";


export function useTask() {

    const [tasks, setTasks] = useState([]);
    function deleteTask(taskName) {
        let tasksAux = [...tasks];

        tasksAux = tasksAux.filter((task) => task.name != taskName);

        setTasks(tasksAux);
        localStorage.setItem("tasks", JSON.stringify(tasksAux));
    }

    function createTask(task) {
        const notExist = Object.keys(tasks).every((key) => tasks[key].name !== task.name);
        if (notExist | tasks.length === 0) {
            const tasksAux = [...tasks, task];
            setTasks(tasksAux);
            localStorage.setItem("tasks", JSON.stringify(tasksAux));
        }
    }

    function changeState(taskName) {
        let tasksAux = tasks.map((task) => task.name === taskName ? { ...task, state: !task.state } : task)
        setTasks(tasksAux);
        localStorage.setItem("tasks", JSON.stringify(tasksAux));
    };

    function updateTask(oldTaskName, newTask) {
        let tasksAux = tasks.map((task) => task.name === oldTaskName ? newTask : task)
        setTasks(tasksAux);
        localStorage.setItem("tasks", JSON.stringify(tasksAux));
    }

    useEffect(() => {
        const localStorageData = localStorage.getItem("tasks");
        const storageTasks = JSON.parse(localStorageData);

        setTasks(storageTasks);
    }, []);

    return [tasks, createTask, changeState, deleteTask, updateTask]
}