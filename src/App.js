import TaskList from "./components/TaskList";
import "./assets/css/tasklist.css";
import TaskForm from "./components/TaskForm";
import { useState, useRef, useEffect } from "react";
import { useTaskContext } from "./context/taskContext";
import Counter from "./components/Counter";

function App() {
  const buttonRef = useRef(null);
  const { taskData } = useTaskContext();
  // const filteredTasks = taskData.map((taskItem) =>
  //   taskItem.completed ? { ...taskItem, test: 'hello' } : taskItem,
  // );
  // console.log(filteredTasks);

  const todos = taskData.filter((task) => !task.completed);
  const completed = taskData.filter((task) => task.completed);

  useEffect(() => {
    if (buttonRef.current) {
      setTimeout(() => {
        buttonRef.current.scrollIntoView({ behavior: "smooth" });
      }, 2000);
    }
  }, [buttonRef]);
  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <Counter />
      <TaskForm />
      <div className="task-lists-container">
        <TaskList title="Todos" tasksList={todos} />
        <TaskList title="Completed" tasksList={completed} />
      </div>
      <button ref={buttonRef}>Call us 669 889 009</button>
    </>
  );
}

export default App;
