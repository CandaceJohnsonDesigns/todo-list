import "./TaskItem.css";
import clsx from "clsx";

const TaskItem = ({ key, title, priority, completed }) => {
  return (
    <li key={key} className={clsx('task-item', { completed })}>
      {title}
      <span className="priority">{priority}</span>
    </li>
  );
};

export default TaskItem;
