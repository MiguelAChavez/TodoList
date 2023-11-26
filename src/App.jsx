import "./App.css";
import { TaskList } from "./Components/Task/TaskList";

function App() {
  return (
    <>
      <main>
        <div className="task-wrapper">
          <TaskList />
        </div>
      </main>
    </>
  );
}

export default App;
