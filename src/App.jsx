import { useReducer, useState } from "react";
import "./App.css";
import { sortByPosition } from "./utils/ordering";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskControls } from "./components/TaskControls/TaskControls";
import { TaskList } from "./components/TaskList/TaskList";
import { getGroupTaskItems } from "./selectors/groupTasks";
import { boardReducer, initialBoardState } from "./reducers/boardReducer";
import { mockBoardState } from "./mocks/index";
import { DragDropProvider } from "@dnd-kit/react";
import { isSortable } from "@dnd-kit/react/sortable";

function App() {
  const [state, dispatch] = useReducer(boardReducer, mockBoardState);

  const activeGroups = sortByPosition(
    state.groups.filter(
      (group) => group.viewId === "view-todo" && group.parentGroupId === null,
    ),
  );

  const [showCompleted, setShowCompleted] = useState(true);

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

  console.log(
    "groups:",
    activeGroups,
    "placements:",
    state.placements,
    "tasks:",
    state.tasks,
  );

  return (
    <main>
      <h2>To-Do List</h2>
      <TaskForm />
      <TaskControls
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
        // sortTasks={sortByPosition}
      />

      <DragDropProvider>
        {activeGroups.map((group) => {
          const items = getGroupTaskItems(
            state.tasks,
            state.placements,
            group.id,
            null,
            group.sortDirection,
          );

          return <TaskList key={group.id} group={group} tasks={items} />;
        })}
      </DragDropProvider>
    </main>
  );
}

export default App;
