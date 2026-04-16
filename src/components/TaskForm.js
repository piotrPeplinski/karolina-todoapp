import { useState } from "react";
import TaskCardButton from "./TaskCardButton";


const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    priority: 0,
    date: "",
  });
  const [value, setValue] = useState(""); //example

  return (
    <form className="task-form">
      {/* example */}
      {/* <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      /> */}
      <h1>ADD TASK</h1>
      {/* -------TITLE------ */}
      <label className="task-label" htmlFor="title">Title</label>
      <input className="form-input common-style" placeholder="Task title"
        type="text"
        id="title"
        value={formData.title}
        onChange={(event) =>
          setFormData((prev) => ({
            ...prev,
            // desc: prev.desc,
            // priority: prev.priority,
            // date:prev.date,
            title: event.target.value,
          }))
        }
      />
      {/* -------DESCRIPTION------ */}
      <label className="task-label" htmlFor="desc">Description</label>
      <textarea className="form-textarea common-style" placeholder="Task description"
        value={formData.desc}
        onChange={(event) =>
          setFormData((prev) => ({
            ...prev,
            desc: event.target.value,
          }))
        }
      />
      {/* -------PRIORITY------ */}
      <label className="task-label " htmlFor="priority">Priority</label>
      <select className="form-select common-style"
        value={formData.priority}
        onChange={(event) =>
          setFormData((prev) => ({
            ...prev,
            priority: event.target.value,
          }))
        }
      >
        <option disabled value={0}>
          Select priority
        </option>
        <option value={1}>Low</option>
        <option value={2}>Medium</option>
        <option value={3}>High</option>
      </select>
      {/* -------DATE------ */}
      <label className="task-label" htmlFor="complete">Complete until</label>
      <input className="form-date common-style" type="date" id="complete" />
      <TaskCardButton type="taskDetails">Add task</TaskCardButton>
    </form>
  );
};

export default TaskForm;
