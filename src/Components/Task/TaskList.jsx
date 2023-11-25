import { useState } from "react";
import { TaskItem } from "./Item/TaskItem";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <section className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task}></TaskItem>
        ))}
      </ul>
    </section>
  );
};
