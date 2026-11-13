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
            priorityRank={task.priorityRank}
            status={task.status}
            />
        ))}
        <EditTaskForm />
    </ul>
  )
}

export default TaskList