import './TaskControls.css';
import { ArrowDownWideNarrow } from 'lucide-react';

const TaskControls = ({ 
    showCompleted, 
    setShowCompleted, 
    sortTasks 
}) => {
  return (
    <div className="task-controls">
        <label className="show-completed">
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
          Show Completed Tasks
        </label>
      <button className="sort-button" onClick={sortTasks}><ArrowDownWideNarrow /></button>
    </div>
  )
}

export default TaskControls