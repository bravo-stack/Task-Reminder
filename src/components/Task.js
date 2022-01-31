import { FaTimes } from "react-icons/fa"

const Task = ({task, onDelete, onToggle}) => {
  return (
  <div className={`task ${task.reminder? "task-reminder": ""}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} <FaTimes className="fa-times" onClick={() => onDelete(task.id)} /></h3>
      <p>{task.day}</p>
  </div>
  );
};

Task.propTypes = {};

export default Task;
