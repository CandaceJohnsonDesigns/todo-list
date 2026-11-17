import './TaskForm.css';
import { Plus } from 'lucide-react';

export function TaskForm () {
  return (
    <form className="task-form">
      <input className="task-title" type="text" placeholder="Add a task" />
      <input type="number" min="1" placeholder="1" />
      <button className="add-button" type="submit"><Plus /></button>
    </form>
  )
}