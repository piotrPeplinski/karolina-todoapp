import TaskList from "./components/TaskList";
import "./assets/css/tasklist.css";
import TaskForm from "./components/TaskForm";
import { useRef, useEffect } from "react";
import { useTaskContext } from "./context/taskContext";
import Counter from "./components/Counter";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const buttonRef = useRef(null);
  const { taskData } = useTaskContext();
  // const filteredTasks = taskData.map((taskItem) =>
  //   taskItem.completed ? { ...taskItem, test: 'hello' } : taskItem,
  // );
  // console.log(filteredTasks);
  console.log(process.env.REACT_APP_SERVICE_ID);
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
        <h1>{t("header_text")}</h1>
      </header>
      <button onClick={() => i18n.changeLanguage("en")}>Angielski</button>
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
