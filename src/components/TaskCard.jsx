import { FaTrashAlt } from "react-icons/fa";

function TaskCard({ task, removeTask, toggleTask }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
            <div className="d-flex justify-content-center align-items-center gap-2">
                <input
                    type="checkbox"
                    className="form-check-input mx-2 mb-2 border-1 rounded-4 fs-3"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <label className={`form-check-label ms-2 text-success ${task.completed ? "completed" : ""}`}>
                    {task.title}
                </label>
            </div>
            <button onClick={() => removeTask(task.id)} className="btn opacity-25">
                <FaTrashAlt />
            </button>
        </li>
    );
}

export default TaskCard;
