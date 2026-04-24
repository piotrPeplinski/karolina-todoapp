import TaskList from "./components/TaskList";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/tasklist.css";
import TaskForm from "./components/TaskForm";
import { useState } from "react";

function App() {
  const [taskData, setTaskData] = useState([]);
  console.log(taskData);

  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <TaskForm setTaskData={setTaskData} />
      <TaskList tasksList={taskData} setTaskData ={setTaskData}/>
      <ToastContainer transition={Flip} />
    </>
  );
}

export default App;
