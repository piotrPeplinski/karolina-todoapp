import TaskList from "./components/TaskList";
import "./assets/css/tasklist.css";
import TaskForm from "./components/TaskForm";
import { useState } from "react";
import { taskData } from "./utils/mockTasks";

function App() {
  const [TaskData, setTaskData] = useState([]);
  // const filteredTasks = taskData.map((taskItem) =>
  //   taskItem.completed ? { ...taskItem, test: 'hello' } : taskItem,
  // );
  // console.log(filteredTasks);
  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>

      <TaskForm setTaskData={setTaskData} />
      <TaskList tasksList={TaskData} setTaskData={setTaskData} />
    </>
  );
}

export default App;
