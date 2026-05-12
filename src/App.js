import TaskList from "./components/TaskList";
import "./assets/css/tasklist.css";
import TaskForm from "./components/TaskForm";
import { useEffect, useState } from "react";
import { taskData } from "./utils/mockTasks";
import axios from "axios";

function App() {
  const [TaskData, setTaskData] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
      );
      console.log(response);
    };
    fetchTasks();
  }, []);

  const todos = taskData.filter((task) => !task.completed);
  const completed = taskData.filter((task) => task.completed);

  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>

      <TaskForm setTaskData={setTaskData} />
      <div className="task-lists-container">
        <TaskList title="Todos" tasksList={todos} setTaskData={setTaskData} />
        <TaskList
          title="Completed"
          tasksList={completed}
          setTaskData={setTaskData}
        />
      </div>
    </>
  );
}

export default App;
