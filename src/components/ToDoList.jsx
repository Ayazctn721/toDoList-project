import TaskCard from "./TaskCard";

function ToDoList({ tasks, removeTask, toggleTask, filter }) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return filteredTasks.length < 1 ? (
    <div className="text-center p-2 " id="no-tasks">No tasks</div>
  ) : (
    <div className='container mx-auto mt-1 d-flex justify-content-center flex-column align-items-center'>
      <ul className="list-group-item bg-white w-75 p-2 border-0 mb-0">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} removeTask={removeTask} toggleTask={toggleTask} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
