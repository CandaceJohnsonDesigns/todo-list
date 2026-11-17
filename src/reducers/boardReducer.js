import { sortByPosition } from "../utils/ordering";

export const initialBoardState = {
  views: [{ id: "view-todo", name: "Todo List", type: "list" }],
  groups: [
    {
      id: "group-todo",
      viewId: "view-todo",
      parentGroupId: null,
      name: "Todo",
      groupRole: "active",
      sortDirection: "asc",
      position: "a0",
    },
    {
      id: "group-completed",
      viewId: "view-todo",
      parentGroupId: null,
      name: "Completed",
      groupRole: "completed",
      sortDirection: "asc",
      position: "a1",
    },
  ],
  tasks: [],
  placements: [],
};

/**
 * Propagates completion status to related tasks
 * @param {*} tasks A list of tasks to propagate up or down through
 * @param {*} targetTaskId The current task
 * @param {*} completedAt The completion timestamp 
 * @returns An updated list with completion statuses propagated
 */
function propagateCompletion(tasks, targetTaskId, completedAt) {
  let updatedTasks = tasks.map((task) =>
    task.id === targetTaskId ? { ...task, completedAt } : task,
  );

  /** If parent marked as complete, mark all descendants as complete 
   *  by setting their completedAt to match the ancestor's completedAt
   */
  const updateDescendants = (parentId) => {
    const children = updatedTasks.filter(
      (task) => task.parentTaskId === parentId,
    );

    for (const child of children) {
      updatedTasks = updatedTasks.map((task) =>
        task.id === child.id ? { ...task, completedAt } : task,
      );
      updateDescendants(child.id);
    }
  };
  updateDescendants(targetTaskId);

  /** If a task was marked as complete and has a parent task, check if all
   *  siblings are also complete and if they are, mark the parent as complete
   *  by setting completedAt equal to the current (and last) child's
   *  completedAt
   */
  const updateAncestors = (childId) => {
    const currentChild = updatedTasks.find((task) => task.id === childId);
    if (!currentChild || !currentChild.parentTaskId) return;

    const siblings = updatedTasks.filter(
      (task) =>
        task.parentTaskId === currentChild.parentTaskId && task.id !== childId,
    );

    // Check if all siblings are completed
    const allSiblingsCompleted =
      siblings.length > 0 &&
      siblings.every((sibling) => sibling.completedAt !== null);

    updatedTasks = updatedTasks.map((task) => {
      if (task.id !== currentChild.parentTaskId) return task;

      return {
        ...task,
        completedAt: allSiblingsCompleted
          ? (task.completedAt ?? completedAt)
          : null,
      };
    });

    updateAncestors(currentChild.parentTaskId);
  };
  updateAncestors(targetTaskId);

  return updatedTasks;
}

export function boardReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            const {
                taskId,
                placementId,
                title,
                parentTaskId = null,
                parentPlacementId = null,
                groupId = 'group-todo',
            } = action.payload;

            const siblings = sortByPosition(
                state.placements.filter(
                    (placement) => 
                        placement.groupId === groupId && 
                        placement.parentPlacementId === parentPlacementId
                ),
                'asc'
            );

            // Find the last position among the siblings if one exists
            const lastPosition = 
                siblings.length > 0 ? siblings[siblings.length - 1].position : null;

            // Calculate the position for the new task at the top list
            const position = getPositionBetween(lastPosition, null);

            const newTask = {
                id: taskId,
                title,
                completedAt: null,
                parentTaskId,
            };

            const newPlacement = {
                id: placementId,
                taskId,
                groupId,
                parentPlacementId,
                position,
            };

            return {
                ...state,
                tasks: [...state.tasks, newTask],
                placements: [...state.placements, newPlacement],
            };
        }
}
