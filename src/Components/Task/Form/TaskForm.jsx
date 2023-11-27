import "./taskForm.css";
import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [tasks, setTasks] = useState("");

  const addTaskOnSubmit = (e) => {
    e.preventDefault();
    const name = tasks;
    if (!name || name.trim() == "") {
      alert("Ingrese una tarea");
    } else {
      addTask(name);
      setTasks("");
    }
  };

  return (
    <form className="TaskForm" onSubmit={(e) => addTaskOnSubmit(e)}>
      <input
        type="text"
        placeholder="ingrese una tarea"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
      />
      <span className="add">+</span>
    </form>
  );
};

export default TaskForm;
