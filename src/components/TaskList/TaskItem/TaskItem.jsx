import "./TaskItem.css";
import clsx from "clsx";
import { Trash, Pencil, GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/react/sortable";

export function TaskItem({ task, index, groupId }) {
  const isCompleted = task.completedAt !== null;

  const { ref, handleRef, isDragging } = useSortable({
    id: task.placementId,
    index,
    group: groupId,
    data: {
        type: 'placement',
        task,
    },
  });

  return (
    <li
      ref={ref}
      id={task.placementId}
      className={clsx("task-item", isCompleted && "completed")}
    >
      <input type="checkbox" checked={isCompleted} readOnly />
      <span className="task-title">{task.title}</span>
      {/* <button className="edit-button"><Pencil size={20} /></button>
      <button className="delete-button"><Trash size={20} /></button> */}
      <span ref={handleRef} className="drag-handle">
        <GripVertical />
      </span>
    </li>
  );
}
