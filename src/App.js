import TaskList from "./components/TaskList";
import "./assets/css/tasklist.css";
import TaskForm from "./components/TaskForm";
import { useState } from "react";
import { useTaskContext } from "./context/taskContext";

function App() {
  const { taskData } = useTaskContext();
  // const filteredTasks = taskData.map((taskItem) =>
  //   taskItem.completed ? { ...taskItem, test: 'hello' } : taskItem,
  // );
  // console.log(filteredTasks);

  const todos = taskData.filter((task) => !task.completed);
  const completed = taskData.filter((task) => task.completed);

  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>

      <TaskForm />
      <div className="task-lists-container">
        <TaskList title="Todos" tasksList={todos} />
        <TaskList
          title="Completed"
          tasksList={completed}
        />
      </div>
    </>
  );
}

export default App;
