import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <TaskList text={"Todo tasks"} />
      <TaskList text={"Finished tasks"} />
    </>
  );
}

export default App;
