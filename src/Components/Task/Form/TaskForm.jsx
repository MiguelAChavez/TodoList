import "./taskForm.css";
import { useId, useState } from "react";
import { toast } from "react-toastify";
import { MdOutlineInfo } from "react-icons/md";

const TaskForm = ({ addTask }) => {
  const [tasks, setTasks] = useState("");
  const idInput = useId();

  const addTaskOnSubmit = (e) => {
    e.preventDefault();
    const name = tasks;
    if (!name || name.trim() == "") {
      toast.warn("Ingrese una tarea", {
        pauseOnHover: false,
        autoClose: 800,
        bodyStyle: {
          fontSize: "18px",
        },
      });
    } else {
      addTask(name);
      setTasks("");
    }
  };

  return (
    <>
      <form className="TaskForm" onSubmit={addTaskOnSubmit}>
        <div className="tooltip" id="tooltip">
          <MdOutlineInfo />{" "}
          <tool-tip role="tooltip" for="tooltip">
            Ingrese una tarea, luego presione el botón + o Enter para agregarla
            a la lista
          </tool-tip>
        </div>
        <input
          name="taskInput"
          id={idInput}
          type="text"
          placeholder="ingrese una tarea"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />
        <button type="submit" className="add">
          +
        </button>
      </form>
    </>
  );
};

export default TaskForm;
