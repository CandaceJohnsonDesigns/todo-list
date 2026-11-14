import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm/TaskForm'
import TaskControls from './components/TaskControls/TaskControls'
import TaskList from './components/TaskList/TaskList'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Buy groceries',
      priority: 0,
      status: 'completed'
    },
    {
      id: 2,
      title: 'Take a walk',
      priority: 2,
      status: 'todo'
    },
    {
      id: 3,
      title: 'Read a book',
      priority: 3,
      status: 'todo'
    }
  ]);

  return (
    <main>
      <h2>To-Do List</h2>
      <TaskForm />
      <TaskControls />
      <TaskList tasks={tasks} />
    </main>
  )
}

export default App
