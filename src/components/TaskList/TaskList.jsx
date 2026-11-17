import "./TaskList.css";
import { TaskItem } from "./TaskItem/TaskItem";
import { EditTaskForm } from "./EditTaskForm/EditTaskForm";
import { ArrowDownWideNarrow } from "lucide-react";
import { TaskControls } from '../TaskControls/TaskControls'
import { useDroppable } from "@dnd-kit/react";

export function TaskList({ group, tasks }) {
  const { ref } = useDroppable({
    id: group.id,
    data: {
        type: 'group',
        group,
    },
  });

  return (
    <section ref={ref} id={group.id} className="task-group">
      {group.name && (
        <header className="task-group-header">
          <h2 className="task-group-title">{group.name}</h2>
          <div className="task-count">{tasks.length}</div>
          <TaskControls />
        </header>
      )}
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <TaskItem
              key={task.placementId}
              task={task}
              index={index}
              groupId={group.id}
            />
          ))}
        </ul>
      )}
      {/* <EditTaskForm /> */}
    </section>
  );
}
