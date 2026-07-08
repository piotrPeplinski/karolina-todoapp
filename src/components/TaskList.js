import { useTaskContext } from "../context/taskContext";
import TaskCard from "./TaskCard";

const TaskList = ({ title, tasksList }) => {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasksList.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
};

export default TaskList;
