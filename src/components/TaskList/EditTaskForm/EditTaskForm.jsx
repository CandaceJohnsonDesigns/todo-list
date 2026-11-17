import './EditTaskForm.css';

export function EditTaskForm () {
  return (
    <form>
      <input type="text" placeholder="Edit task" />
      <button type="submit">Save</button>
    </form>
  )
}