import TaskList from "./components/TaskList";
import "./assets/css/tasklist.css";
import TaskForm from "./components/TaskForm";
import { useState } from "react";

function App() {
  const [taskData, setTaskData] = useState([
    
  ]);

  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <TaskForm setTaskData={setTaskData}/>
      <TaskList tasksList={taskData} />
    </>
  );
}

export default App;
