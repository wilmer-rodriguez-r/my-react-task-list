import { useEffect } from "react";
import {Header} from "./components/Header"
import { TaskList } from "./components/TaskList";

const taskList = [{"name": "Ayudar a mamá", "description": "Cuando se pueda","state": false}]

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
