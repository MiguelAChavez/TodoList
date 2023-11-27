import "./task.css";
export const PendingTasks = ({ pending, borrar }) => {
  return (
    <article className="content-pending">
      <span className="pending"> Tareas pendientes : {pending} </span>
      <button onClick={borrar} className="clear">
        Borrar todo
      </button>
    </article>
  );
};
