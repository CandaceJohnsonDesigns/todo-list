import "./TaskItem.css";
import clsx from "clsx";

const TaskItem = ({ key, title, priorityRank, status }) => {
  return (
    <li key={key} className={clsx('task-item', status )}>
        <span className="priority">{priorityRank}</span>
      <span className="task-title">{title}</span>
    </li>
  );
};

export default TaskItem;
