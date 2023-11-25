export const TaskItem = ({ task }) => {
  return (
    <li>
      <div className="task-item">
        <h3>{task.nombre}</h3>
        <input type="checkbox" name="" id="" value={task.isCompletada} />
      </div>
    </li>
  );
};
