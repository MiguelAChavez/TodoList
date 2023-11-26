export const TaskItem = ({ task, onChange, onClick }) => {
  return (
    <li>
      <div className="task-item">
        <h3>{task.nombre}</h3>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            console.log(task.id);
            onChange(task.id);
          }}
        />
        <button onClick={() => onClick(task.id)}>eliminar</button>
      </div>
    </li>
  );
};
