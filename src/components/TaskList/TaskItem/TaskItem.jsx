import './TaskItem.css';
import clsx from 'clsx';
import { Trash, Pencil, GripVertical } from 'lucide-react';

const TaskItem = ({ id, title, completed }) => {
  return (
    <li id={id} className={clsx("task-item", completed && "completed")}>
      <span className="drag-handle"><GripVertical /></span>
      <input type="checkbox" checked={completed} />
      <span className="task-title">{title}</span>
      <button className="edit-button"><Pencil size={20} /></button>
      <button className="delete-button"><Trash size={20} /></button>
    </li>
  );
};

export default TaskItem;
