import TaskList from "./components/TaskList";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/tasklist.css";
import "./assets/css/app.css";
import TaskForm from "./components/TaskForm";
import { useState } from "react";

function App() {
  const [taskData, setTaskData] = useState([]);
  console.log(taskData);

  const todos = taskData.filter((task) => !task.completed);
  const completed = taskData.filter((task) => task.completed);

  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <div className="content-container">
        <TaskForm setTaskData={setTaskData} />
        <div className="task-lists-container">
          <h2>YOUR TASKS</h2>
          <h3>Manage and organize your tasks efficently</h3>
          <div className="tasks-container-row">
            <TaskList
              title="Todos"
              tasksList={todos}
              setTaskData={setTaskData}
            />

            <TaskList
              title="Completed"
              tasksList={completed}
              setTaskData={setTaskData}
            />
          </div>
        </div>
      </div>
      <ToastContainer transition={Flip} />
    </>
  );
}

export default App;
