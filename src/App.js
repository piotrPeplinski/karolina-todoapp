import { taskData } from "./utils/mockTasks";
import TaskList from "./components/TaskList";
import "./assets/css/styles.css"

function App() {
  return (
    <>
      <TaskList tasksList={taskData} />
    </>
  );
}

export default App;
