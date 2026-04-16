import { useState } from "react";


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
      <label htmlFor="title">Title</label>
      <input
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
      <label htmlFor="desc">Description</label>
      <textarea
        value={formData.desc}
        onChange={(event) =>
          setFormData((prev) => ({
            ...prev,
            desc: event.target.value,
          }))
        }
      />
      <select
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
      <label htmlFor="complete">Complete until</label>
      <input type="date" id="complete" />
      
    </form>
  );
};

export default TaskForm;
