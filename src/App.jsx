import {Header} from "./components/Header"
import { TaskList } from "./components/TaskList";

const taskList = [{"name": "Ayudar a mamá"}, 
{"name": "Limpiar el cuarto"},
{"name": "Hacer tarea de IETI"},
{"name": "Dormir hasta tarde"}];

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskList list={taskList}/>
    </div>
  );
};

export default App
