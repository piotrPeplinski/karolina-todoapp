import TaskCard from "./TaskCard";

const TaskList = ({ tasksList }) => {
  return (
    <div className="task-list">
      {tasksList.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
};

export default TaskList;
