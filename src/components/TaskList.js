import TaskCard from "./TaskCard";

const TaskList = ({ title, tasksList, setTaskData }) => {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      <div className="tasklist-cards-row">
        {tasksList.map((task, index) => (
          <TaskCard task={task} key={index} setTaskData={setTaskData} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
