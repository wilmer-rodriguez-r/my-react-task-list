import { Header } from "../components/Header";
import { TaskList } from "../components/TaskList";
import { useEffect } from "react";

const taskList = [{"name": "Ayudar a mamá", "description": "Cuando se pueda","state": false}]

export const Tareas = () => {
    useEffect((()=>{
      const existingData = localStorage.getItem("tasks");
      if(existingData == null) {
        localStorage.setItem("tasks", JSON.stringify(taskList));
      }
    }), [])
    return(
    <div className="Tareas">
      <Header/>
      <TaskList list={taskList}/>
    </div>)
}