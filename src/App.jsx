import { useEffect } from "react";
import {Header} from "./components/Header"
import { TaskList } from "./components/TaskList";

const taskList = [{"name": "Ayudar a mamá", "state": false}, 
{"name": "Limpiar el cuarto", "state": true},
{"name": "Hacer tarea de IETI", "state": false},
{"name": "Dormir hasta tarde", "state": false}];



function App() {
  useEffect((()=>{
    const existingData = localStorage.getItem("tasks");
    if(existingData == null) {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }
  }), [])

  return (
    <div className="App">
      <Header/>
      <TaskList list={taskList}/>
    </div>
  );
};

export default App
