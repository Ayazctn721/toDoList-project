import { useState } from "react";
import ToDoForm from "./components/ToDoForm.jsx";
import ToDoList from "./components/ToDoList.jsx";
import Footer from "./components/Footer.jsx";
import ThemeSwitcher from './components/ThemeSwitcher.jsx';
import DateTime from "./components/DateTime.jsx";
function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [allChecked, setAllChecked] = useState(false);

  const toggleAllTasks = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setTasks((prev) =>
      prev.map((task) => ({ ...task, completed: newCheckedState }))
    );
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  return (
    <>
      <DateTime />
      <ThemeSwitcher />
      <div className="container">
        <ToDoForm
          addTask={addTask}
          toggleAllTasks={toggleAllTasks}
          allChecked={allChecked} />
      </div>
      <ToDoList
        tasks={tasks}
        removeTask={removeTask}
        toggleTask={toggleTask}
        filter={filter} />
      <Footer
        taskCount={tasks.length}
        setFilter={setFilter}
        clearCompleted={clearCompleted} />
    </>
  );
}

export default App;
