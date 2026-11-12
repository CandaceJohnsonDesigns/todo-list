import './TaskList.css';
import TaskItem from './TaskItem/TaskItem';
import EditTaskForm from './EditTaskForm/EditTaskForm';

const TaskList = ({ tasks }) => {
  return (
    <ul>
        {tasks.map(task => (
          <TaskItem 
            key={task.id}
            title={task.title} 
            priority={task.priority}
            completed={task.completed} 
            />
        ))}
        <EditTaskForm />
    </ul>
  )
}

export default TaskList