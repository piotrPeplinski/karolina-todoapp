import { taskData } from "./utils/mockTasks";
import TaskList from "./components/TaskList";
import "./assets/css/tasklist.css"
import TaskForm from "./components/TaskForm";


function App() {
  return (
    <>
    <header>
      <h1>Task Manager</h1></header>
      <TaskForm/>
    <TaskList tasksList={taskData} />
    </>
  );
}

export default App;

