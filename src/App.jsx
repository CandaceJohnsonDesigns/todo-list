import { useState, useMemo } from "react";
import "./App.css";
import { sortByPosition } from "./utils/ordering";
import { initialGroups } from "./mocks/data/groups";
import { initialTasks } from "./mocks/data/tasks";
import { initialPlacements } from "./mocks/data/placements";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskControls from "./components/TaskControls/TaskControls";
import TaskList from "./components/TaskList/TaskList";
import { getGroupTaskItems } from "./selectors/groupTasks";
import { DragDropProvider } from '@dnd-kit/react';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [placements, setPlacements] = useState(initialPlacements);

  const [showCompleted, setShowCompleted] = useState(true);

  const todoItems = useMemo(
    () => getGroupTaskItems(tasks, placements, "group-todo"),
    [tasks, placements],
  );

  const completedItems = useMemo(
    () => getGroupTaskItems(tasks, placements, "group-completed"),
    [tasks, placements],
  );

  const handleReorder = (id, fromIndex, toIndex) => {
    if (fromIndex === toIndex) return;

    const updated = [...tasks];
    const [movedItem] = updated.splice(fromIndex, 1);

    const newPosition = getNextPosition(updated, toIndex);

    const updatedItem = { ...movedItem, position: newPosition };
    updated.splice(toIndex, 0, updatedItem);

    // TODO: Send moved item's new position to backend

    setTasks(updated);
  };

  return (
    <main>
      <h2>To-Do List</h2>
      <TaskForm />
      <TaskControls
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
        // sortTasks={sortByPosition}
      />
      <TaskList title="To-Do" tasks={todoItems} />
      <TaskList title="Completed" tasks={completedItems} />
    </main>
  );
}

export default App;
