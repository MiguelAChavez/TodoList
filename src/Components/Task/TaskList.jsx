import { useEffect, useState } from "react";
import TaskItem from "./Item/TaskItem";
import TaskForm from "./Form/TaskForm";
import { PendingTasks } from "./PendingTasks.jsx";
import "./task.css";

export const TaskList = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const tasksPendientes = tasks.filter((task) => !task.isCompletada).length;

  const addTask = (todo) => {
    const task = {
      id: Math.floor(Math.random() * 10000) + 1,
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
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <section>
      <h2>Lista de tareas</h2>
      <TaskForm addTask={addTask} />
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onChange={updateTaskEstado}
            onClick={deleteTask}
          ></TaskItem>
        ))}
      </ul>

      <PendingTasks pending={tasksPendientes} borrar={deleteAllTasks} />
    </section>
  );
};
