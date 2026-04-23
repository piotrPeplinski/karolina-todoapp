import TaskCard from "./TaskCard";

const TaskList = ({ tasksList, setTaskData}) => {
  return (
    <div className="task-list">
      {tasksList.map((task,index) => (
        <TaskCard task={task} key={index} setTaskData={setTaskData} />
      ))}
    </div>
  );
};

export default TaskList;
