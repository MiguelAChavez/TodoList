import { MdOutlineDelete } from "react-icons/md";
import "./taskItem.css";
const TaskItem = ({ task, onChange, onClick }) => {
  const handleCheckboxChange = () => {
    onChange(task.id);
  };

  const handleDeleteClick = () => {
    onClick(task.id);
  };

  const className = task.isCompletada ? "task-item completed" : "task-item";
  return (
    <li className={className}>
      <input
        type="checkbox"
        checked={task.isCompletada}
        onChange={handleCheckboxChange}
      />
      <span className="task">{task.nombre}</span>
      <button className="button-delete" onClick={handleDeleteClick}>
        <MdOutlineDelete />
      </button>
    </li>
  );
};

export default TaskItem;
