import "./TaskItem.css";
import clsx from "clsx";
import { Trash, Pencil } from "lucide-react";

const TaskItem = ({ id, title, priority, completed }) => {
  return (
    <li id={id} className={clsx("task-item", completed && "completed")}>
      <input type="checkbox" checked={completed} />
      {/* <span className="priority">{priority}</span> */}
      <span className="task-title">{title}</span>
      <button className="edit-button"><Pencil size={16} /></button>
      <button className="delete-button"><Trash size={16} /></button>
    </li>
  );
};

export default TaskItem;
