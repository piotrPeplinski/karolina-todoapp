import { taskData } from "./utils/mockTasks";
import TaskList from "./components/TaskList";
import "./assets/css/tasklist.css"


function App() {
  return (
    <>
    <header>
      <h1>Task Manager</h1></header>
    <TaskList tasksList={taskData} />
    </>
  );
}

export default App;

