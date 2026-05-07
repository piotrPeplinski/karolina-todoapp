import TaskCard from "./TaskCard";


const TaskList = ({title, tasksList, setTaskData }) => {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasksList.map((task,index) => (
        <TaskCard task={task} key={index} setTaskData={setTaskData}/>
      ))}
    </div>
  );
};

export default TaskList;
