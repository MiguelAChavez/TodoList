import "./App.css";
import { TaskList } from "./Components/Task/TaskList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <main>
        <ToastContainer />
        <div className="task-wrapper">
          <TaskList />
        </div>
      </main>
    </>
  );
}

export default App;
