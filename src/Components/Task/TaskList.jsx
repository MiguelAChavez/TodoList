import { useEffect, useState } from "react";
import TaskItem from "./Item/TaskItem";
import TaskForm from "./Form/TaskForm";
import { PendingTasks } from "./PendingTasks";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
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
      id: uuidv4(),
      nombre: todo,
      isCompletada: false,
    };

    setTasks([...tasks, task]);

    toast.success("Tarea agregada", {
      pauseOnHover: false,
      autoClose: 500,
      bodyStyle: {
        fontSize: "18px",
      },
    });
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
    toast.error("Tarea eliminada", {
      pauseOnHover: false,
      autoClose: 500,
      icon: false,
      bodyStyle: {
        fontSize: "18px",
      },
    });
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
      <PendingTasks pending={tasksPendientes} borrar={() => setTasks([])} />
    </section>
  );
};
