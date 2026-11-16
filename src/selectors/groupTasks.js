import { sortByPosition } from "../utils/ordering";

export function getGroupTaskItems(
  tasks,
  placements,
  groupId,
  parentPlacementId = null,
) {
  // Index tasks by ID for fast lookup
  const taskMap = new Map(tasks.map((task) => [task.id, task]));

  // Filter placements for this group and nesting level, then sort by fractional position
  const groupPlacements = sortByPosition(
    placements.filter(
      (p) => p.groupId === groupId && p.parentPlacementId === parentPlacementId,
    ),
    "asc",
  );

  // Merge Placement + Task
  return groupPlacements
    .map((placement) => {
      const task = taskMap.get(placement.taskId);
      if (!task) return null;

      return {
        ...task,

        placementId: placement.id,
        groupId: placement.groupId,
        parentPlacementId: placement.parentPlacementId,
        position: placement.position,
      };
    })
    .filter(Boolean);
}
