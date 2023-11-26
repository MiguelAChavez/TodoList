import { useState } from "react";
import { TaskItem } from "./Item/TaskItem";
import TaskForm from "./Form/TaskForm";
import "./task.css";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (todo) => {
    //if (todo.trim() === "") {
    //return; // No se permite agregar una tarea vacía
    //}

    const task = {
      id: tasks.length + 1,
      nombre: todo,
      isCompletada: false,
    };
    setTasks([...tasks, task]);
  };

  const updateTaskEstado = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompletada: !task.isCompletada,
          };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(tasks);
  };

  return (
    <section className="task-list">
      <h2>Lista de tareas</h2>
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onChange={updateTaskEstado}
            onClick={deleteTask}
          ></TaskItem>
        ))}
      </ul>
    </section>
  );
};
