import { useState } from "react";
import Modal from "./Modal";
import { priorities } from "../utils/constants";

const TaskCard = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="task-card">
      <p>Task: {task.title}</p>
      <p>Completed: {task.completed ? "Yes" : "No"}</p>

      <p>Priority: {priorities[task.priority]}</p>
      <p>Created: {task.created_date.toLocaleDateString()}</p>
      <p>Complete until: {task.complete_until_date.toLocaleDateString()}</p>
      <button onClick={handleClick}>See more...</button>

      <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <p>{task.desc}</p>
      </Modal>
    </div>
  );
};

export default TaskCard;
