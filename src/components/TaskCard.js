import { useState } from "react";
import { priorities } from "../utils/constants";
import Modal from "./Modal";

const TaskCard = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="task-card">
      <p className="priority">{priorities[task.priority]}</p>
      <h3 className="task-title"> {task.title}</h3>

      <button className="btn btn-full" onClick={handleClick}>
        Task details
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="task-details">Task details</h3>
        <p>Description: {task.desc || "No description"}</p>
        <p>Completed: {task.completed ? "Yes" : "No"}</p>
        <p>Created: {task.created_date.toLocaleDateString()}</p>
        <p>Complete until: {task.complete_until_date.toLocaleDateString()}</p>
      </Modal>
    </div>
  );
};

export default TaskCard;
