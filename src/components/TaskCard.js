import { useState } from "react";
import { priorities } from "../utils/constants";
import Modal from "./Modal";
import TaskCardButton from "./TaskCardButton";

const TaskCard = ({ task, setTaskData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };
  const priorityClass = priorities[task.priority].toLowerCase();

  return (
    <div className={`task-card task-card-${priorityClass}`}>
      <p className={`priority priority-${priorityClass}`}>
        {priorities[task.priority]}
      </p>
      <h3 className="task-title"> {task.title}</h3>

      <TaskCardButton type={"taskDetails"} onClick={handleClick}>
        Task details
      </TaskCardButton>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="modal-title">Task details</h3>
        <p>Description: {task.desc || "No description"}</p>
        <p>Completed: {task.completed ? "Yes" : "No"}</p>
        <p>Created: {task.created_date.toLocaleDateString()}</p>
        <p>Complete until: {task.complete_until_date.toLocaleDateString()}</p>
      </Modal>
      <div className="buttons">
        <TaskCardButton type={"complete"}>Complete</TaskCardButton>
        <TaskCardButton type={"delete"}>Delete</TaskCardButton>
      </div>
    </div>
  );
};

export default TaskCard;
