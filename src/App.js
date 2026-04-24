import TaskList from "./components/TaskList";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/tasklist.css";
import TaskForm from "./components/TaskForm";
import { useState } from "react";

function App() {
  const [taskData, setTaskData] = useState([]);
  console.log();

  //przejdź po wszystkich zadaniach i zmień jedno konkretne
  // prevItems.map(item =>
  //       item.id === id ? { ...item, [field]: value } : item
  //     )

const markAsDone = (task.complete_until_date) => {
  setTaskData
prevItems.map(task =>
        task.complete_until_date === id ? { ...task, completed: true } : task
      )
    }


  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <TaskForm setTaskData={setTaskData} />
      <TaskList tasksList={taskData} />
      <ToastContainer transition={Flip} />
    </>
  );
}

export default App;
