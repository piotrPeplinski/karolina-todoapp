import { useState } from "react";
import TaskCardButton from "./TaskCardButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";
import "../assets/css/taskform.css";

// ---------TEST---------
// const TaskForm = () => {
//   const [value, setValue] = useState("");

//   return (
//     <form>
//       <label className="task-label" htmlFor="title">
//         Title
//       </label>
//       <input
//         type="text"
//         id="title"
//         value={value}
//         onChange={(event) => {
//           setValue(event.target.value);
//           console.log(event.target.value);
//         }}
//       />
//     </form>
//   );
// };

const TaskForm = ({ setTaskData }) => {
  //odbiera funkcje setTaskData z App.js
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    priority: 0,
    complete_until_date: null,
  });

  // const [value, setValue] = useState(""); //example

  const handleSubmit = (e) => {
    e.preventDefault(); //blokowanie domyślnej operacji - dla formularza odswiezenie strony
    //z.d.2 walidacja formularza
    if (formData.title === "") {
      
      return;
    }
    if (formData.priority === 0) {
      return;
    }
    if (formData.complete_until_date === null) {
      return;
    }

    setTaskData((prev) => [
      //„weź stare zadania (prev) i dodaj nowe”
      ...prev,
      {
        title: formData.title,
        desc: formData.desc,
        priority: formData.priority,
        created_date: new Date(),
        complete_until_date: formData.complete_until_date,
      },
    ]);
    //z.d.1 czyszczenie formularza
    setFormData({
      title: "",
      desc: "",
      priority: 0,
      complete_until_date: null,
    });
  };

  return (
    <form className="task-form">
      <p className="task-form-title">ADD TASK</p>
      {/* -------TITLE------ */}
      <label className="task-label" htmlFor="title">
        Title
      </label>
      <input
        className="form-input common-style"
        placeholder="Task title"
        type="text"
        id="title"
        /*input WYŚWIETLA to, co jest w formData.title*/
        value={formData.title}
        /*React renderuje i value=nowy formData.title*/
        onChange={(event) => {
         
          setFormData((prev) => ({
            ...prev,
            // desc: prev.desc,
            // priority: prev.priority,
            // date:prev.date,
            title: event.target.value,
          }));
        }}
      />
      {/* -------DESCRIPTION------ */}
      <label className="task-label" htmlFor="desc">
        Description
      </label>
      <textarea
        className="form-textarea common-style"
        placeholder="Task description"
        value={formData.desc}
        onChange={(event) =>
          setFormData((prev) => ({
            ...prev,
            desc: event.target.value,
          }))
        }
      />
      {/* -------PRIORITY------ */}
      <label className="task-label " htmlFor="priority">
        Priority
      </label>
      <select
        className="form-select common-style"
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
      <label className="task-label" htmlFor="complete">
        Complete until
      </label>
      {/* <input className="form-date common-style" type="date" id="complete" /> */}
      <div className="date-input-wrapper">
        <DatePicker
          className="form-date common-style"
          selected={formData.complete_until_date}  // selected tylko wyświetla datę w polu DatePickera
          onChange={(date) =>   //date to data wybrana przez użytkownika
            setFormData((prev) => ({
              ...prev,             //zachowaj wszystko inne np.title,desc i dodaj date
              complete_until_date: date,
            }))
          }
          dateFormat="yyyy-MM-dd"
        />
        <FiCalendar className="calendar-icon" />
      </div>

      <TaskCardButton type="taskDetails" onClick={handleSubmit}>
        Add task
      </TaskCardButton>
    </form>
  );
};

export default TaskForm;
