import "./TaskList.css";
import TaskItem from "./TaskItem/TaskItem";
import EditTaskForm from "./EditTaskForm/EditTaskForm";

const TaskList = ({ groupId, title, tasks }) => {
  return (
    <section id={groupId} className="task-group">
      {title && <h2 className="task-group-title">{title}</h2>}
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              completedBy={task.completedBy}
            />
          ))}
        </ul>
      )}
      {/* <EditTaskForm /> */}
    </section>
  );
};

export default TaskList;
