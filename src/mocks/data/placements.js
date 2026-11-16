import { createPlacementModel } from "../../models/placement";
import { seedInitialPositions } from "../../utils/ordering";

const mockPlacements = [
  {
    id: "placement-1",
    groupId: "group-todo",
    taskId: "task-1",
    parentPlacementId: null,
    createdAt: new Date().toISOString(),
  },
  {
    id: "placement-2",
    groupId: "group-completed",
    taskId: "task-2",
    parentPlacementId: null,
    createdAt: new Date().toISOString(),
  },
  {
    id: "placement-3",
    groupId: "group-todo",
    taskId: "task-3",
    parentPlacementId: null,
    createdAt: new Date().toISOString(),
  },
  {
    id: "placement-4",
    groupId: "group-todo",
    taskId: "task-4",
    parentPlacementId: "placement-3",
    createdAt: new Date().toISOString(),
  }

];

export const initialPlacements = seedInitialPositions(mockPlacements.map(createPlacementModel));
