const TaskForm = ({ addTask }) => {
  //vamos a utilizar el hook useRef para obtener el valor del input

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const name = e.target[0].value;
        addTask(name);
      }}
    >
      <input type="text" placeholder="ingrese una tarea" />
    </form>
  );
};

export default TaskForm;
