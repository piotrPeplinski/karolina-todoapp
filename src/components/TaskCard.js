const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <p>Task: {task.title}</p>
      <p>Description: {task.desc || "No description"}</p>
      <p>Completed: {task.completed ? "Yes" : "No"}</p>
      <p>
        Priority:{" "}
        {task.priority === 3 ? "High" : task.priority === 2 ? "Medium" : "Low"}
      </p>
      <p>Created: {task.created_date.toLocaleDateString()}</p>
      <p>Complete until: {task.complete_until_date.toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
