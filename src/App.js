import TaskList from "./components/TaskList";
import { taskData } from "./utils/mockTasks";

function App() {

  return (
    <>
      <TaskList tasksList={taskData} />
    </>
  );
}

export default App;
