import {Header} from "./components/Header"
import { TaskList } from "./components/TaskList";

const taskList = [{"name": "Ayudar a mamá", "checked":false}, 
{"name": "Limpiar el cuarto", "checked":false},
{"name": "Hacer tarea de IETI", "checked":true},
{"name": "Dormir hasta tarde", "checked":true}];

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskList list={taskList}/>
    </div>
  );
};

export default App
