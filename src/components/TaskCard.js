import { useState } from "react";
import { priorities } from "../utils/constants";
import Modal from "./Modal";

const TaskCard = ({ task }) => {
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

      <button className="btn btn-full" onClick={handleClick}>
        Task details
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="modal-title">Task details</h3>
        <p>Description: {task.desc || "No description"}</p>
        <p>Completed: {task.completed ? "Yes" : "No"}</p>
        <p>Created: {task.created_date.toLocaleDateString()}</p>
        <p>Complete until: {task.complete_until_date.toLocaleDateString()}</p>
      </Modal>
      <div className="buttons">
        <button className="btn btn-green">
          <ion-icon name="trash-outline"></ion-icon> Complete
        </button>
        <button className="btn btn-red">
          <ion-icon name="trash-outline"></ion-icon> Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
