import TaskCard from "./TaskCard";

const TaskList = ({ tasksList }) => {
  return (
    <div className="task-list">
      {tasksList.map((task,index) => (
        <TaskCard task={task} key={index}/>
      ))}
    </div>
  );
};

export default TaskList;
