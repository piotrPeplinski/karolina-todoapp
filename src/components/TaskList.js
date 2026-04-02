const TaskList = ({ tasksList }) => {
  return (
    <div>
      {tasksList.map((task) => (
        //TODO
        //<TaskItem task={task} />
        <p>{task.title}</p>
      ))}
    </div>
  );
};

export default TaskList;
